import { Component } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css',
})
export class ContenidoComponent {
  titulo = "La Mayor";
  num = 0;
  generarAleatorio() {
    this.num = Math.floor(Math.random() * 11);
  }
  incrementar() {
    this.num++;
  }
  decrementar() {
    this.num--;
  }
}
