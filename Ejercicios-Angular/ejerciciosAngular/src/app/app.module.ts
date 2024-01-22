import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiFooterComponent } from './components/mi-footer/mi-footer.component';
import { MiContentComponent } from './components/mi-content/mi-content.component';
import { MiSidebarComponent } from './components/mi-sidebar/mi-sidebar.component';
import { SimpsonsComponent } from './components/simpsons/simpsons.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RickandmortyComponent } from './components/rickandmorty/rickandmorty.component';
import { RickandmortyDetailsComponent } from './components/rickandmorty-details/rickandmorty-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioEjemploService } from './services/servicio-ejemplo.service';
import { PrimePipe } from './pipes/prime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiFooterComponent,
    MiContentComponent,
    MiSidebarComponent,
    SimpsonsComponent,
    InicioComponent,
    RickandmortyComponent,
    RickandmortyDetailsComponent,
    PrimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServicioEjemploService],
  bootstrap: [AppComponent],
})
export class AppModule {}
