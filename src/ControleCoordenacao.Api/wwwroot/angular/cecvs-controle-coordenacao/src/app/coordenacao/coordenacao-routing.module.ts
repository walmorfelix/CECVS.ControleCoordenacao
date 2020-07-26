import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordenacaoListaComponent } from './coordenacao-lista/coordenacao-lista.component';

const routes: Routes = [
  {path: '', component:CoordenacaoListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordenacaoRoutingModule { }
