import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  constructor(private http: HttpClient) { }
  cartProducts: any[] = [];
  URL_PROD = 'https://api.escuelajs.co/api/v1/products/'
  public getDataProduct(id:number):Observable<any> {
    return this.http.get(this.URL_PROD + id);
  }
  public addCart(list:any){
    if(localStorage.getItem('cart') === null) {
      localStorage.setItem('cart',JSON.stringify([]));
    }
    if(localStorage.getItem('cart') != null){
      const storedCartData = localStorage.getItem('cart');
      if (storedCartData) {
        this.cartProducts = JSON.parse(storedCartData);
      }
      if(this.cartProducts.find(item => item.id === list.id)) {
        alert('El producto ya fue agregado al carrito')
        return;
      } else {
        alert('El producto fue agregado correctamente')
        this.cartProducts.push(list);
        localStorage.setItem('cart',JSON.stringify(this.cartProducts));
      }
    }
  }
}