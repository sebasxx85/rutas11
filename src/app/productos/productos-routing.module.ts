import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from '../components/productos/productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { DetalleProductosComponent } from './components/detalle-productos/detalle-productos.component';
import { AutenticationGuard} from '../core/guards/autentication.guard';
import { AdminGuard  } from '../core/guards/admin.guard';

const routes: Routes = [
  { path: '', component: ProductosComponent, children: [
    { path: 'editar', component: EditarProductoComponent },
    { path: 'agregar', component: AgregarProductoComponent,
    canActivate: [AutenticationGuard, AdminGuard ] },
    { path: 'listar', component: ListarProductosComponent },
    { path: ':id', component: DetalleProductosComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
