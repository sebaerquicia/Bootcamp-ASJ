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
  category:string = '';
  productos:any[] = [];
  ngOnInit(): void {
    // Subscribe to route params changes
    this.route.params.subscribe(params => {
      const idCat = params['idCat'];
      //Renderiza todos los productos
      this.catalogoService.getData().subscribe((data: any) => {
      this.productos = data;
      this.category = 'Todos los productos'
      });
      // Filtracion
      let fullpath = params['fullpath'];
      let categoria = ''
      let title =  '';
      let min = ''
      let max = ''
      if(fullpath !== undefined){
        if(fullpath.includes("-")) {
          fullpath = fullpath.split('-');
          categoria = fullpath[0]
          title =  fullpath[1];
          min = fullpath[2]
          max = fullpath[3]
        }
      }
      idCat && this.filterProducts("CATEGORIA",idCat);
      if(categoria !== 'null' && title !== 'null' && min !== 'null' && max !== 'null') this.filterProducts("PATHCOMPLETO",fullpath);
      else if (categoria !== 'null' && title !== 'null' && min === 'null' && max === 'null') this.filterProducts ("CATEGORIATITULO", fullpath);
      else if (categoria !== 'null' && title === 'null' && min !== 'null' && max !== 'null') this.filterProducts ("CATEGORIAPRECIO",fullpath);
      else if (categoria === 'null' && title !== 'null' && min !== 'null' && max !== 'null') this.filterProducts ("TITULOPRECIO",fullpath);
      else if (categoria === 'null' && title !== 'null' && min === 'null' && max === 'null') this.filterProducts("TITULO",title);
      else if (categoria !== 'null' && title === 'null' && min === 'null' && max === 'null') this.filterProducts("CATEGORIAFILTRO",categoria);
      else if (categoria === 'null' && title === 'null' && min !== 'null' && max !== 'null') this.filterProducts("RANGO",fullpath);  
    });
  }
  filterProducts (param:string, valor:any):void {
    if (param === "PATHCOMPLETO") {
      this.catalogoService.getDataFullPath(valor[0],valor[1],valor[2],valor[3]).subscribe((data: any) => {
        this.productos = data;
        this.category = `Filtrado por categoria ${valor[0]}, ${valor[1]}, rango de precio $${valor[2]} - $${valor[3]}`
      });
    }
    if (param === "CATEGORIATITULO") {
      this.catalogoService.getDataCategoryTitle(valor[0],valor[1]).subscribe((data: any) => {
        this.productos = data;
        this.category = `Filtrado por categoria ${valor[0]}, ${valor[1]}`
      });
    }
    if (param === "CATEGORIAPRECIO") {
      this.catalogoService.getDataCategoryPrice(valor[0],valor[2],valor[3]).subscribe((data: any) => {
        this.productos = data;
        this.category = `Filtrado por categoria ${valor[0]}, rango de precio $${valor[2]} - $${valor[3]}`
      });
    }
    if (param === "TITULOPRECIO") {
      this.catalogoService.getDataTitlePrice(valor[1],valor[2],valor[3]).subscribe((data: any) => {
        this.productos = data;
        this.category = `${valor[1]}, rango de precio $${valor[2]} - $${valor[3]}`
      });
    }
    if (param === "CATEGORIA") {
      this.catalogoService.getDataCategory(valor).subscribe((data: any) => {
        this.productos = data;
        this.category = data[0].category.name
      });
    }
    if (param === "TITULO") {
      this.catalogoService.getDataTitle(valor).subscribe((data:any) => {
        this.productos = data;
        this.category = valor;
      })
    } 
    if(param === "CATEGORIAFILTRO") {
      this.catalogoService.getDataCategoryFilter(valor).subscribe((data:any) => {
        this.productos = data;
        this.category = data[0].category.name;
      })
    }
    if(param === "RANGO") {
      this.catalogoService.getDataPriceRange(valor[2],valor[3]).subscribe((data:any) => {
        this.productos = data;
        this.category = "Filtracion por rango " + valor[2] + ' - ' + valor[3];
      })
    }
  }
  handleImageError(index: number,urlReemplazo:string) {
    // Puedes cambiar la URL por la de la imagen de reemplazo que desees
    this.productos[index].images[0] = urlReemplazo;
  }
}