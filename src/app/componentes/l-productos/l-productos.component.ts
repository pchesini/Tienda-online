import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.modelo';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-l-productos',
  templateUrl: './l-productos.component.html',
  styleUrls: ['./l-productos.component.css']
})
export class LProductosComponent implements OnInit{
  private myShopingCart: Producto[]= [];
  total= 0;

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
  
  constructor
    (private storeService :StoreService){
      this.myShopingCart = this.storeService.getShopipngCart();
    };
  
  ngOnInit():void{

  }
  
  onAddToShopingCard(producto: Producto){
    this.storeService.adProducto(producto)
    this.total = this.storeService.getTotal();
    
  }
}
