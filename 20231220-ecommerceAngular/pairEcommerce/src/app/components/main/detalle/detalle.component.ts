import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../../../services/detalle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  constructor(public detalleService: DetalleService, public router: ActivatedRoute) {}
  product:any = {};
  idProd:number = 0;
  ngOnInit(): void {
    this.idProd = this.router.snapshot.params['idProd'];
    this.detalleService.getDataProduct(this.idProd).subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }
  agregarProducto(list:any){
    this.detalleService.addCart(list);
    window.location.reload()
  }
  handleImageError(urlReemplazo:string) {
    // Puedes cambiar la URL por la de la imagen de reemplazo que desees
    this.product.images[0] = urlReemplazo;
  }
}