import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SesionService } from '../services/sesion.service';
import { Sesion } from 'src/app/Models/sesion';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    private sesion: SesionService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //usamos el metodo del servicio  
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.userActive?.admin){
            return true
          }else{
            alert("no tiene permisos para ingresar")
            this.router.navigate(['inicio'])
            return false
          }
       })
      )
  }
  
}
