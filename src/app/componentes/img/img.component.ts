import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges,AfterViewInit, OnDestroy{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  contador = 0;
  contadorFn : number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    // before - during render
    // changes inputs -- multiples times
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    this.contadorFn = window.setInterval(()=>{
        this.contador += 1;
        console.log('corriendo el contador');
    },1000)
  }

  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
    window.clearInterval(this.contadorFn)
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
 
}
