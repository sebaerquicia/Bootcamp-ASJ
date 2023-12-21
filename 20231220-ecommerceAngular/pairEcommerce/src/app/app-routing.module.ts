import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './components/main/catalogo/catalogo.component';
import { DetalleComponent } from './components/main/detalle/detalle.component';
import { CarritoComponent } from './components/main/carrito/carrito.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: CatalogoComponent
      },
      {
        path: ':idProd',
        component:DetalleComponent
      },
      {
        path: 'categories/:idCat',
        component: CatalogoComponent
      },
      {
        path: 'price/:precio',
        component: CatalogoComponent
      },
      {
        path: 'title/:titulo',
        component: CatalogoComponent
      },
      {
        path: 'rango/:rangoValor',
        component: CatalogoComponent
      }
    ]
  },
  {
    path: 'cart',
    component: CarritoComponent
  },
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}