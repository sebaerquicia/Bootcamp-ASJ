/* import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../../services/to-do-service.service';


@Component({
  selector: 'app-mi-content',
  templateUrl: './mi-content.component.html',
  styleUrl: './mi-content.component.css'
})
export class MiContentComponent implements OnInit{

  nuevaTarea : string = '';
listarTareas: {texto: string; tachada: boolean}[] =[] 
  mostrarTachadas: boolean = false;
  listaTareas: any[] = [];
  constructor(private todoService: ToDoServiceService) {

  }
  ngOnInit() {
    this.cargarTareas();
  }
  

  cargarTareas(){
    this.todoService.getTareas().subscribe(
      (tareas) => {
        this.listaTareas = tareas;
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }

agregarTarea(){
  if(this.nuevaTarea.trim() !==''){
  this.listaTareas.push({texto: this.nuevaTarea, tachada: false});
  this.nuevaTarea='';
}}

tacharTarea(index : number){
  this.listaTareas[index].tachada = ! this.listaTareas[index].tachada;
}

eliminarTarea(index:number){
  this.listaTareas.splice(index,1);
}

filtrarTarea(){
  if(this.mostrarTachadas){
    return this.listaTareas
  } else {
    return this.listaTareas.filter(tarea=> !tarea.tachada)
  }
}
}
 */

import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../../services/to-do-service.service';

@Component({
  selector: 'app-mi-content',
  templateUrl: './mi-content.component.html',
  styleUrls: ['./mi-content.component.css']
})
export class MiContentComponent implements OnInit {
  mostrarTachadas: boolean = false;
  nuevaTareaNombre: string = '';
  nuevaTareaDescripcion: string = '';
  listaTareas: {id: number; nombre: string; descripcion: string; estado: boolean}[] =[] 


  constructor(private todoService: ToDoServiceService) {}

  ngOnInit() {
    this.obtenerTareas();
  }

  agregarTarea() {
    if (this.nuevaTareaNombre.trim() !== '') {
      const nuevaTareaObj = { nombre: this.nuevaTareaNombre, descripcion: this.nuevaTareaDescripcion, estado: false };

      this.todoService.crearTarea(nuevaTareaObj).subscribe(
        (respuesta) => {
          console.log('Tarea creada:', respuesta);
          this.listaTareas = respuesta;
        },
        (error) => {
          console.error('Error al crear tarea:', error);
        }
      );

      this.nuevaTareaNombre = '';
      this.nuevaTareaDescripcion = '';
    }
  }

  actualizarTarea(id: number, tareaActualizada: any) {
    this.todoService.actualizarTarea(id, tareaActualizada).subscribe(
      (respuesta) => {
        console.log('Tarea actualizada:', respuesta);
        this.obtenerTareas();
      },
      (error) => {
        console.error('Error al actualizar tarea:', error);
      }
    );
  }

  eliminarTarea(id: number) {
    this.todoService.eliminarTarea(id).subscribe(
      (response) => {
        console.log('Tarea eliminada con éxito');
        this.listaTareas = response;
      },
      (error) => {
        console.error('Error al eliminar tarea:', error);
      }
    );
  }

  obtenerTareas() {
    this.todoService.obtenerTareas().subscribe(
      (tareas) => {
        this.listaTareas = tareas;
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }
  filtrarTarea(){
    if(this.mostrarTachadas){
      return this.listaTareas
    } else {
      return this.listaTareas.filter(tarea=> !tarea.estado)
    }
  }
  tacharTarea(index : number){
    this.listaTareas[index].estado = ! this.listaTareas[index].estado;
  }
}
