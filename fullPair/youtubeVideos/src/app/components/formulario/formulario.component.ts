import { Component, OnInit } from '@angular/core';
import { FormularioServiceService } from '../../services/formulario-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {

  showVideo: boolean =  false;
  videos: Videos[] = [];
  urlModel: string = '';
  categoryModel: string = '';
  titleModel: string = '';
  descriptionModel: string = '';
  viewsModel: number = 0;
  likesModel: number = 0;
  dislikesModel: number = 0;

  constructor(public formService: FormularioServiceService) {}

  ngOnInit(): void {
    this.obtenerVideos();
  }

  obtenerVideos() {
    this.formService.getVideos().subscribe(
      (videos) => {
        this.videos = videos;
      },
      (error) => {
        console.error('Error al obtener videos:', error);
      }
    );
  }

  submitForm(formulario: NgForm) {
    if (formulario.valid) {
      const nuevoVideo = {
        url: this.urlModel,
        category: this.categoryModel,
        title: this.titleModel,
        description: this.descriptionModel,
        views: this.viewsModel,
        likes: this.likesModel,
        dislikes: this.dislikesModel,
      };
      this.formService.cargarVideo(nuevoVideo).subscribe(
        (respuesta) => {
          console.log('Video cargado:', respuesta);
          this.videos = respuesta;
        },
        (error) => {
          console.error('Error al crear video:', error);
        }
      );

      this.urlModel = '';
      this.categoryModel = '';
      this.titleModel = '';
      this.descriptionModel = '';
      this.viewsModel = 0;
      this.likesModel = 0;
      this.dislikesModel = 0;
    }
  }
  showIframe(){
    this.showVideo = !this.showVideo
  }

}

class Videos {
  id?: number;
  url: string;
  category: string;
  title: string;
  description?: string;
  views: number;
  likes: number;
  dislikes: number;

  constructor(
    url: string,
    category: string,
    title: string,
    description: string,
    views: number,
    likes: number,
    dislikes: number
  ) {
    (this.url = url),
      (this.category = category),
      (this.title = title),
      (this.description = description),
      (this.views = views),
      (this.likes = likes),
      (this.dislikes = dislikes);
  }
}
