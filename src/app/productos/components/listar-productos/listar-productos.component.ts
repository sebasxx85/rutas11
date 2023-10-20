import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from 'src/app/Models/productos';
import { ObsproductosService} from 'src/app/services/obsproductos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  //Uso de observable service 
  productos$!: Observable<Productos[]>

  constructor(
      private obsproductosService : ObsproductosService,
      private router: Router
  ) { }

  ngOnInit(): void {
    //asignar a productos los item del servicio usando el metodo
    this.productos$ = this.obsproductosService.obtenerProductos()
  }

  eliminarProducto(id: number){
    this.obsproductosService.eliminarProducto(id) 
    this.productos$ = this.obsproductosService.obtenerProductos()
  }

  editarProducto(producto: Productos){
    //pasando parametros al navigate
    this.router.navigate(['productos/editar',
    {
      id: producto.id,
      name: producto.name,
      categoria: producto.categoria,
      stock: producto.stock,
      precio: producto.precio,
      imagen: producto.imagen,
      fechaIngreso: producto.fechaIngreso,}
  ])}

}
