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
    nombre : '',
    imagen: '',
    precio: 0
  }
  @Output() addedProduct = new EventEmitter<Producto>();

  addToCard() {
    this.addedProduct.emit(this.producto);
    }
}
