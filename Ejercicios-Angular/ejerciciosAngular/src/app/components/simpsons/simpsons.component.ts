import { Component } from '@angular/core';

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrl: './simpsons.component.css',
})
export class SimpsonsComponent {
  nameContent = '';
  urlContent = '';
  profesionContent = '';
  listaPersonajes: { name: string; url: string; profesion: string }[] = [];

  insertForm(n: string, url: string, profesion: string) {
    this.nameContent = n;
    this.urlContent = url;
    this.profesionContent = profesion;
    if (
      this.nameContent.trim() ||
      this.urlContent.trim() ||
      this.profesionContent.trim() !== ''
    ) {
      this.listaPersonajes.push({
        name: this.nameContent,
        url: this.urlContent,
        profesion: this.profesionContent,
      });
      console.log(this.listaPersonajes);
      this.nameContent = '';
      this.urlContent = '';
      this.profesionContent = '';
    }else{
      alert('Completa todos los campos')
    }
  }
}
