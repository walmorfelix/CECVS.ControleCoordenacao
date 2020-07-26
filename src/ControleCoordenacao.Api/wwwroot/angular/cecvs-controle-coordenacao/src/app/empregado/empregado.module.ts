import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpregadoRoutingModule } from './empregado-routing.module';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';

@NgModule({
  declarations: [EmpregadoListaComponent],
  imports: [
    CommonModule,
    EmpregadoRoutingModule
  ]
})
export class EmpregadoModule { }
