import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpregadoRoutingModule } from './empregado-routing.module';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';
import { EmpregadoFormComponent } from './empregado-form/empregado-form.component';

@NgModule({
  declarations: [EmpregadoListaComponent, EmpregadoFormComponent],
  imports: [
    CommonModule,
    EmpregadoRoutingModule,
    ReactiveFormsModule    

  ]
})
export class EmpregadoModule { }
