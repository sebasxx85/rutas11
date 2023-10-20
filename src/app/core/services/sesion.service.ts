import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Sesion } from 'src/app/Models/sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  sesionSubject!: BehaviorSubject<Sesion>

  constructor() {
    const sesion: Sesion = {
      sesionActive: false
    }
    this.sesionSubject = new BehaviorSubject(sesion)
  }

  Login(user: string, password: string, admin: boolean) {
    const sesion: Sesion = {
      sesionActive: true,
      userActive: {
        user: user,
        password: password,
        admin: admin
      }}
    //con next actualizamos el subject
    this.sesionSubject.next(sesion)
  }
    //Metodo para obtener los datos de la sesion usando observable
    obtenerSesion(): Observable<Sesion> {
      return this.sesionSubject.asObservable()
    }

}