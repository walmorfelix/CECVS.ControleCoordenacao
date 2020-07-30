import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpregadoRoutingModule } from './empregado-routing.module';
import { EmpregadoFormComponent } from './empregado-form/empregado-form.component';
import { EmpregadoListaComponent } from './empregado-lista/empregado-lista.component';

@NgModule({
  declarations: [    
    EmpregadoFormComponent,
    EmpregadoListaComponent
  ],
  imports: [
    CommonModule,
    EmpregadoRoutingModule,
    ReactiveFormsModule    

  ]
})
export class EmpregadoModule { }
