import { Component, OnInit } from '@angular/core';
import { ServicioEjemploService } from '../../services/servicio-ejemplo.service';
import { RickandmortyDetailsComponent } from '../rickandmorty-details/rickandmorty-details.component';
@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css'
})
export class RickandmortyComponent implements OnInit {

  characters: any = [];
id: string =''

  constructor(private myService: ServicioEjemploService){

  }
  ngOnInit(): void {
    this.myService.getDataAPI().subscribe((data)=>this.characters =data)
  }


}
