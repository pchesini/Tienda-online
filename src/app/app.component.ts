import { Component } from '@angular/core';
import { Producto } from './modelos/producto.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = ''; 
  showImg= true;

  onLoaded(img: string) {
    console.log('log padre', img);
  }
  toogleImg(){
    this.showImg = !this.showImg;
  }
}
