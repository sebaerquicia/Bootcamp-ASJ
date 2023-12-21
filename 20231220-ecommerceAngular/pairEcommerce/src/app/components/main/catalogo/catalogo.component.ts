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
      const title = params['titulo'];
      const precio = params['precio'];
      const rangoValor = params['rangoValor'];
      
      //Renderiza todos los productos
      this.catalogoService.getData().subscribe((data: any) => {
      this.productos = data;
      this.category = 'Todos los productos'
      });
      // Filtracion

      idCat && this.filterProducts("CATEGORIA",idCat);
      title && this.filterProducts("TITULO",title);
      precio && this.filterProducts("PRECIO",precio);
      rangoValor && this.filterProducts("RANGO",rangoValor);
    });
  }
  filterProducts (param:string, valor:string):void {
    let min = '';
    let max = '';
    if (param === "CATEGORIA") {
      this.catalogoService.getDataCategory(valor).subscribe((data: any) => {
        console.log(data)
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
    if (param === "PRECIO") {
      this.catalogoService.getDataPrice(valor).subscribe((data:any) => {
        this.productos = data;
        this.category = "Filtracion por precio " + valor;
      })
    }
    if(param === "RANGO") {
      switch (valor){
        case '1':
        min = '1';
        max = '99'
        break;
        case '2':
        min = '100';
        max = '499'
        break;
        case '3':
        min = '500';
        max = '999'
        break;
        default:
        alert('No existe ese rango de precio');
      }
      this.catalogoService.getDataPriceRange(min,max).subscribe((data:any) => {
        this.productos = data;
        this.category = "Filtracion por rango " + min + ' - ' + max;
      })
    }
  }
  handleImageError(index: number,urlReemplazo:string) {
    // Puedes cambiar la URL por la de la imagen de reemplazo que desees
    this.productos[index].images[0] = urlReemplazo;
  }
}