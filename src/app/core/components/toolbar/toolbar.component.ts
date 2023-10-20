import { SesionService } from './../../services/sesion.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/Models/sesion';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sesion$!: Observable<Sesion>

  constructor(
    private SesionService: SesionService
  ) { }

  ngOnInit(): void {
    this.sesion$ = this.SesionService.obtenerSesion()
  }

}
