import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MiFooterComponent } from './components/mi-footer/mi-footer.component';
import { MiContentComponent } from './components/mi-content/mi-content.component';
import { MiSidebarComponent } from './components/mi-sidebar/mi-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiFooterComponent,
    MiContentComponent,
    MiSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
