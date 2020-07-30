
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordenacaoListaComponent } from './coordenacao/coordenacao-lista/coordenacao-lista.component';
import { CoordenacaoFormComponent } from './coordenacao/coordenacao-form/coordenacao-form.component';
import { EmpregadoListaComponent } from './empregado/empregado-lista/empregado-lista.component';
import { EmpregadoFormComponent } from './empregado/empregado-form/empregado-form.component';

const routes: Routes = [

  {path: '', component:CoordenacaoListaComponent},
  {path: 'coordenacao', component:CoordenacaoListaComponent},
  {path: 'empregado', component:EmpregadoListaComponent},
  {path: 'coordenacao/novaCoordenacao', component:CoordenacaoFormComponent},
  {path: 'coordenacao/editarCoordenacao/:id', component:CoordenacaoFormComponent},    
  {path: 'empregado/novoEmpregado', component:EmpregadoFormComponent},
  {path: 'empregado/editarEmpregado/:id', component:EmpregadoFormComponent},    
  {path: 'coordenacao/listarEmpregados/:id', component:EmpregadoListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
