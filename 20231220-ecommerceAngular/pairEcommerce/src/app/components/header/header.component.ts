import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
 
  constructor(public cartService: CarritoService){}
  arrayProd:any = this.cartService.getLocalStorage()
  cantProd= this.arrayProd.length
}