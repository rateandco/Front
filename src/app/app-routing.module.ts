import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntervenantComponent } from './intervenant/intervenant.component';
import { AdministrationComponent } from './administration/administration.component';


const routes: Routes = [
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'home', component: HomeComponent },
  { path: 'intervenants', component: IntervenantComponent },
  { path: 'admin', component: AdministrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
