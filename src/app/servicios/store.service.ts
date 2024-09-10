import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myShopingCart: Producto[]= [];
  constructor() { }

  adProducto(producto:Producto){
    this.myShopingCart.push(producto);
  }
  getTotal(){
    return this.myShopingCart.reduce((sum, item)=> sum + item.price, 0);
    
  }
  getShopipngCart(){
    return this,this.myShopingCart;
  }
}
