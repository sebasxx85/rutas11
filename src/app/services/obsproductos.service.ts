import { Injectable } from '@angular/core';
import { Productos } from '../Models/productos';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObsproductosService {

  //Esta es la local pero tambien tengo la variable en environment
  UrlAPI: string  = 'https://64953135b08e17c91791b6e6.mockapi.io/cursos'

  constructor(
    private http: HttpClient
  ) {}

  //Obtener productos
  obtenerProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(environment.api,
    {
      headers: new HttpHeaders({
        'content-type' : 'application/json',
        'encoding':'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerProducto(id: number): Observable<Productos>{
    return this.http.get<Productos>(this.UrlAPI + id,
    {
      headers: new HttpHeaders({
        'content-type' : 'application/json',
        'encoding':'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarProducto(producto: Productos){
    return this.http.put<Productos[]>(this.UrlAPI + producto,
      {
        headers: new HttpHeaders({
          'content-type' : 'application/json',
          'encoding':'UTF-8'
        })
      }).pipe(
        catchError(this.manejarError)
      )
  }  

  editarProducto(producto: Productos){
    this.http.put<Productos>(environment.api + producto.id, producto).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log)
  }

  eliminarProducto(id: number){
    this.http.delete<Productos>(environment.api + '/producto' + id).subscribe(console.log)
    alert("Registro Eliminado")
  }

 //Funcion para manejar los errores de comuncacion HTTP
  private manejarError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
       console.warn("Error del lado cliente", error. error.message);
      
    } else {
      console.warn("Error del lado servidor", error. error.message);
    }
    return throwError(() => new Error("Error comunicacion html"))
  }
  
}
