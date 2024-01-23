import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioServiceService {

  private apiUrl = 'http://localhost:8080/videos';
  constructor( private http: HttpClient) {}

  
  public getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  public sumarVistas(id: number) : Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url,{ observe: 'response', responseType: 'text' as 'json'  }) 
  }
  public sumarLike(id: number) : Observable<any>{
    const url = `${this.apiUrl}/like/${id}`;
    return this.http.put(url,{ observe: 'response', responseType: 'text' as 'json'  }) 
  }
  public sumarDislike(id: number) : Observable<any>{
    const url = `${this.apiUrl}/dislike/${id}`;
    return this.http.put(url,{ observe: 'response', responseType: 'text' as 'json'  }) 
  }

  public cargarVideo(nuevoVideo: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<String>(this.apiUrl, nuevoVideo, { headers });
  }

  public eliminarVideo(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url,{ observe: 'response', responseType: 'text' as 'json'  });
 
  }
}
