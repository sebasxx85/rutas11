import { ObsproductosService } from 'src/app/services/obsproductos.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productos } from 'src/app/Models/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  formularioProducto!: FormGroup

  constructor(
    private obsproductosService: ObsproductosService,
    private router: Router
  ) {
    this.formularioProducto = new FormGroup({
      name: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      fechaIngreso: new FormControl('', [Validators.required]),
    })
  }

  agregarProducto(){
    const producto: Productos = {
    id: Math.round(Math.random()*1000),
    name: this.formularioProducto.value.name,
    categoria: this.formularioProducto.value.categoria,
    stock: this.formularioProducto.value.stock,
    precio: this.formularioProducto.value.precio,
    imagen: this.formularioProducto.value.imagen,
    fechaIngreso: this.formularioProducto.value.fechaIngreso
  }
  //llamamos a agregarProducto del service y le enviamos este producto
    this.obsproductosService.agregarProducto(producto)
    this.router.navigate(['productos/listar'])

}

  ngOnInit(): void {
  }

}



