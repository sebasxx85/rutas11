import { ObsproductosService } from 'src/app/services/obsproductos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { Productos } from 'src/app/Models/productos';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  producto$! : Observable<Productos>

  constructor(
    private activatedRoute: ActivatedRoute,
    private ObsproductosService: ObsproductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
        let id = parseInt(parametros.get('id') || '0');
        this.producto$ = this.ObsproductosService.obtenerProducto(id)
    })
  }

}
