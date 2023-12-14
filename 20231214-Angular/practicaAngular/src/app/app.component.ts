import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './components/hijo/hijo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'algo loco'
  msjContenido: string = '';
  recibirMsj(msj: string) {
    this.msjContenido = msj;
  }

  contenidoInput = '';
  mostrar(txt:string){
    this.contenidoInput=txt;
  }
}
