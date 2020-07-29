import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';
import { EmpregadoFormComponent } from './empregado-form/empregado-form.component';

const routes: Routes = [
  {path: '', component:EmpregadoListaComponent},
  {path: 'novoEmpregado', component:EmpregadoFormComponent},
  {path: 'editar/:id', component:EmpregadoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpregadoRoutingModule { }
