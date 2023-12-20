import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cartProducts: any[] = [];
  public getLocalStorage():any{
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
      this.cartProducts = JSON.parse(storedCartData);
      return this.cartProducts;
    }
  }
  public deleteCartProduct(id:number):any{
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
      this.cartProducts = JSON.parse(storedCartData);
      this.cartProducts = this.cartProducts.filter(item => item.id != id);
      localStorage.setItem('cart',JSON.stringify(this.cartProducts));
    }
  }
  public vaciarLocalStorage(){
    localStorage.setItem('cart',JSON.stringify([]));
  }
}