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

  public cargarVideo(nuevoVideo: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<String>(this.apiUrl, nuevoVideo, { headers });
  }

  public actualizarVideo(id: number, videoActualizado: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, videoActualizado);
  }

  public eliminarVideo(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
