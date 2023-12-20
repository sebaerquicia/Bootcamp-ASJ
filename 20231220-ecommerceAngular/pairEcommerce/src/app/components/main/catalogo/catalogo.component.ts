import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../services/catalogo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  constructor(public catalogoService: CatalogoService,public route: ActivatedRoute){}
  productos:any[] = [];
  idCat:number = 0;
  ngOnInit(): void {
    // Subscribe to route params changes
    this.route.params.subscribe(params => {
      this.idCat = +params['idCat']; // Convert to number
      console.log(this.idCat);

      if (!this.idCat) {
        this.catalogoService.getData().subscribe((data: any) => {
          console.log(data);
          this.productos = data;
        });
      } else {
        this.catalogoService.getDataCategory(this.idCat).subscribe((data: any) => {
          console.log(data);
          this.productos = data;
        });
      }
    });
  }
  handleImageError(index: number,urlReemplazo:string) {
    // Puedes cambiar la URL por la de la imagen de reemplazo que desees
    this.productos[index].images[0] = urlReemplazo;
  }
}
