import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioEjemploService{

  constructor(private http: HttpClient) { console.log('funciona')}

  public getDataAPI(){
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1')
  }

  public getDataIdAPI(id:number){
    return this.http.get('https://rickandmortyapi.com/api/character/' + id)
  }

}
