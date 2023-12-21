import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  constructor(private http: HttpClient) {}
  URL = 'https://api.escuelajs.co/api/v1/products';
  URL_CAT = 'https://api.escuelajs.co/api/v1/categories';
  //https://api.escuelajs.co/api/v1/products/?title=Generic
  //https://api.escuelajs.co/api/v1/products/?price=100
  public getData(): Observable<any> {
    return this.http.get(this.URL);
  }
  public getDataCategory(id: string): Observable<any> {
    return this.http.get(`${this.URL_CAT}/${id}/products`);
  }
  public getDataTitle(title:string):Observable<any>{
    return this.http.get(this.URL + '/?title=' + title)
  }
  public getDataPrice(price:string):Observable<any> {
    return this.http.get(this.URL + '/?price=' + price)
  }
  public getDataPriceRange(min:string,max:string):Observable<any> {
    return this.http.get(`https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`)
  }
}