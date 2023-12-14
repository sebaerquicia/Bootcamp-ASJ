import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiContentComponent } from './components/mi-content/mi-content.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: 'ToDoList', component: MiContentComponent },
  { path: 'Simpsons', component: SimpsonsComponent },
  { path: 'Inicio', component:InicioComponent},
  { path: '', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
