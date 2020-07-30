import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordenacaoListaComponent } from './coordenacao-lista/coordenacao-lista.component';
import { CoordenacaoFormComponent } from './coordenacao-form/coordenacao-form.component';


const routes: Routes = [
  {path: '', component:CoordenacaoListaComponent},
  {path: 'novo', component:CoordenacaoFormComponent},
  {path: 'editar/:id', component:CoordenacaoFormComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordenacaoRoutingModule { }
