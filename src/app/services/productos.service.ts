import { Productos } from '../Models/productos';
import { Injectable } from '@angular/core';

@Injectable(
  //comentamos ya que no se usara en el modulo principal, sino en el de productos
  //{providedIn: 'root'}
  )

export class ProductosService {

  private productosService: Productos[] = [

    {
      id: 1,
      name: "Polera Amarilla",
      categoria: "Ropa",
      stock: 21,
      precio: 17500,
      imagen: "data:image/jpeg;base64,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",
      fechaIngreso: new Date(2023, 10, 3),
    },
    {
      id: 2,
      name: "Zapatillas Nike",
      categoria: "Calzado",
      stock: 33,
      precio: 79000,
      imagen: "https://www.theline.cl/img/products/DM9922-200-1_1024.png",
      fechaIngreso: new Date(2022, 8, 5),
    },
    {
      id: 3,
      name: "Pelota Addidas",
      categoria: "Deporte",
      stock: 25,
      precio: 39700,
      imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/674bd9cb2b044c7cb6b8aaed00eec2c4_9366/Pelota_Entrenamiento_Futsal_Uniforia_UNISEX_Blanco_FH7349_01_standard.jpg",
      fechaIngreso: new Date(2021, 3, 5),
    },
    {
      id: 4,
      name: "Short Underarmour",
      categoria: "Ropa",
      stock: 52,
      precio: 19800,
      imagen: "https://falabella.scene7.com/is/image/Falabella/14882551_1?wid=800&hei=800&qlt=70",
      fechaIngreso: new Date(2020, 11, 5),
    },
    {
      id: 5,
      name: "Zapatillas Puma",
      categoria: "Calzado",
      stock: 28,
      precio: 39770,
      imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/390984/01/sv01/fnd/EEA/fmt/png/Zapatillas-Smash-3.0",
      fechaIngreso: new Date(2023, 5, 5),
    },
    {
      id: 6,
      name: "Raqueta Tennis",
      categoria: "Deporte",
      stock: 18,
      precio: 129770,
      imagen: "https://wilsonstore.cl/cdn/shop/products/WILWR079810U3_0.jpg?v=1648491400",
      fechaIngreso: new Date(5, 9, 6),
    }
  ]
  //Obtener productos
    obtenerProductos(): Productos[]{
    return this.productosService
  }

}