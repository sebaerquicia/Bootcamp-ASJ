import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  constructor(private http: HttpClient) { }
  URL = 'https://api.escuelajs.co/api/v1/products'
  URL_CAT = 'https://api.escuelajs.co/api/v1/categories'
  public getData():Observable<any>{
    return this.http.get(this.URL)
  }
  public getDataCategory(id:number):Observable<any>{
    return this.http.get(`${this.URL_CAT}/${id}/products`)
  }
}