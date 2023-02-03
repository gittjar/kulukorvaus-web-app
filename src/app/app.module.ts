import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LomakepohjaComponent } from './lomakepohja/lomakepohja.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';
import { MatkalaskuComponent } from './matkalasku/matkalasku.component';
import {MatRadioModule} from '@angular/material/radio';











@NgModule({
  declarations: [
    AppComponent,
    LomakepohjaComponent,
    NavbarComponent,
    FooterComponent,
    InformationComponent,
    MatkalaskuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
