import { Component } from '@angular/core';
import { Producto } from './modelos/producto.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  productos :Producto[] = [
    {
        id: '1',
        nombre: 'Automobil de juguete',
        precio: 100,
        imagen: './image1.jpg'
    },
    {
        id: '2',
        nombre: 'Muñeca de trapo',
        precio: 180,
        imagen: './image2.jpg'
    },
    {
        id: '3',
        nombre: 'Pelota de futbol',
        precio: 120,
        imagen: './image3.jpg'
    }
  ];
}
