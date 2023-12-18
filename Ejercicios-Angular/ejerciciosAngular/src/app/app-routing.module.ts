import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiContentComponent } from './components/mi-content/mi-content.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';
import { RickandmortyDetailsComponent } from './components/rickandmorty-details/rickandmorty-details.component';

const routes: Routes = [
  { path: 'to-do-list', component: MiContentComponent },
  { path: 'simpsons', component: SimpsonsComponent },
  { path: '', component: InicioComponent },

  { path: 'rickandmorty-list', component: RickandmortyComponent },
  { path: 'rickandmorty-details', component: RickandmortyDetailsComponent},

  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
