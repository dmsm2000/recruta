import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [{
  path: "", component: HomeComponent
},
{
  path: "sobre", component: SobreComponent
},
{
  path: "inscricoes", component: InscricoesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
