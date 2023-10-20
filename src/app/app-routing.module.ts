import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticationGuard } from './core/guards/autentication.guard';


const routes: Routes = [
  { path: '', component: InicioComponent, canActivate: [AutenticationGuard] },
  { path: 'inicio', redirectTo: '', pathMatch: 'full'},
  { 
    path: 'productos', 
    loadChildren: () => import('./productos/productos.module').then((p) => p.ProductosModule)
    , canActivate: [AutenticationGuard]
  },
  { 
    path: 'autentication', 
    loadChildren: () => import('./autentication/autentication.module').then((p) => p.AutenticationModule)
  },
  //{ path: '**', component: PaginaNoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
