import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
@Input() datoEnviado:any={};
@Input() otro: string='';

//crear una variable que vamos a enviarle al padre
@Output() mensaje: EventEmitter<string>

constructor(){
  this.mensaje = new EventEmitter();
}
enviarMsj(){
  this.mensaje.emit('Comunicacion Hijo-Padre')
}
}
