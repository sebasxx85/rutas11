import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import { SharedModule } from '../shared/shared.module';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';


@NgModule({
  declarations: [
    EditarProductoComponent,
    AgregarProductoComponent,
    ListarProductosComponent,
    DetalleProductosComponent,

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ProductosService
  ]
})
export class ProductosModule { }
