import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //la escribio bill gates capo total
//import { Usuario } from '../models/Usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  URL_API = 'https://reqres.in/api/users';

  datosUsuario: any = {
    id:-1,
    name: '',
    job: '',
  };

  public getUsers(): Observable<any> {
    console.log('HTTP GET');
    return this.http.get(this.URL_API);
  }

  //post usuario
  public createUser(usuario: any): Observable<any> {
    console.log('HTTP POST');
    return this.http.post(this.URL_API, usuario);
  }


  //delete usuario
  public deleteUser(id:any): Observable<any> {
    return this.http.delete(this.URL_API + "/" + id)
  }


  //put usuario
  public updateUser(usuario:any): Observable<any>{
  return this.http.put(this.URL_API+"/"+ this.datosUsuario.id, usuario)
  }
}
