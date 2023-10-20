import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Productos } from 'src/app/Models/productos';
import { ObsproductosService } from 'src/app/services/obsproductos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  formularioProducto!: FormGroup
  id!: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private obsproductosService : ObsproductosService,
    private router: Router
  ) { }
  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (parametros) => {
      //console.log(parametros); 

      this.id = parseInt(parametros.get('id')|| '0'),
      //name = parametros.get('name') || '',


      this.formularioProducto = new FormGroup({
        name: new FormControl(parametros.get('name'), [Validators.required]),
        categoria: new FormControl(parametros.get('categoria'), [Validators.required]),
        stock: new FormControl(parametros.get('stock'), [Validators.required]),
        precio: new FormControl(parametros.get('precio'), [Validators.required]),
        imagen: new FormControl(parametros.get('imagen'), [Validators.required]),
        fechaIngreso: new FormControl(parametros.get('fechaIngreso'), [Validators.required]),
    })
  })}

  editarProducto(){
    //obtenemos los valores desde los get del ngOnInit
    let p: Productos = {
      id: this.id,
      name: this.formularioProducto.value.name,
      categoria: this.formularioProducto.value.categoria,
      stock: this.formularioProducto.value.stock,
      precio: this.formularioProducto.value.precio,
      imagen: this.formularioProducto.value.imagen,
      fechaIngreso: this.formularioProducto.value.fechaIngreso,
    }
      //Le enviamos el producto p para editar a la funcion    
      this.obsproductosService.editarProducto(p);
      this.router.navigate(['productos/listar'])
  }

}
