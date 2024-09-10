import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class LProductosService {

  constructor(
    private http:HttpClient
  ) { }


  getAllProducts(){
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
  }
}
