import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.modelo';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


 
@Input() producto:  Producto = {
    id: '',
    title : '',
    price: 0,
    image: '',
    description: '',
    category:''
  }
  @Output() addedProduct = new EventEmitter<Producto>();

  addToCard() {
    this.addedProduct.emit(this.producto);
    }
}
