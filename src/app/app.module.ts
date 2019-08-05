import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { HomeComponent } from './home/home.component';
import { IntervenantComponent } from './intervenant/intervenant.component';
import { AdministrationComponent } from './administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiaireComponent,
    HomeComponent,
    IntervenantComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
