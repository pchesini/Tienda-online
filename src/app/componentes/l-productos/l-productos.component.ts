import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.modelo';
import { StoreService } from 'src/app/servicios/store.service';
import { LProductosService } from 'src/app/servicios/l-productos.service';

@Component({
  selector: 'app-l-productos',
  templateUrl: './l-productos.component.html',
  styleUrls: ['./l-productos.component.css']
})
export class LProductosComponent implements OnInit{
   myShopingCart: Producto[]= [];
  total= 0;
  productos :Producto[] = []
  today = new Date();
  date= new Date (2024,3,21);
  
  constructor
    (private storeService :StoreService,
     private lProdS: LProductosService,
    )
    {
      this.myShopingCart = this.storeService.getShopipngCart();
    };
  
  ngOnInit():void{
    this.lProdS.getAllProducts().subscribe(data =>{
      this.productos = data;
    })
  }
  
  onAddToShopingCard(producto: Producto){
    this.storeService.adProducto(producto)
    this.total = this.storeService.getTotal();
    
  }
}
