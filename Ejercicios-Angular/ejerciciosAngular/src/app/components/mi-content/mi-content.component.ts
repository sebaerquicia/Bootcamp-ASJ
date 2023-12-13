import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-content',
  templateUrl: './mi-content.component.html',
  styleUrl: './mi-content.component.css'
})
export class MiContentComponent {
  nuevaTarea : string = '';
  listaTareas: {texto: string; tachada: boolean}[] =[]
  mostrarTachadas: boolean = false;


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
