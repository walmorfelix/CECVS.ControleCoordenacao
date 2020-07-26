import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'coordenacao'
  },

  {
    path:'coordenacao',
    loadChildren:'./coordenacao/coordenacao.module#CoordenacaoModule'
  },  
  {
    path:'empregado',
    loadChildren:'./empregado/empregado.module#EmpregadoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
