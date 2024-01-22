import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  private apiUrl = 'http://localhost:8080/tareas';

  constructor(private http: HttpClient) {}

  public obtenerTareas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  public crearTarea(nuevaTarea: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<String>(this.apiUrl, nuevaTarea, { headers });
    //return this.http.post<any>(this.apiUrl, nuevaTarea, );
  }

  public actualizarTarea(id: number, tareaActualizada: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, tareaActualizada);
  }

  public eliminarTarea(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
