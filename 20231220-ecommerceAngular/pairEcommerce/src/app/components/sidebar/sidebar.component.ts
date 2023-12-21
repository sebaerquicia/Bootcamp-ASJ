import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  titulo:string = '';
  precio:number = 0;
  filtrarRango:string = '';
  precioMin:string = '';
  precioMax:string = '';
  categoria:string = '';
  urlCompleta:string = `1/generic`;
  crearUrl(){
    this.urlCompleta += `1/generic`
  }
}