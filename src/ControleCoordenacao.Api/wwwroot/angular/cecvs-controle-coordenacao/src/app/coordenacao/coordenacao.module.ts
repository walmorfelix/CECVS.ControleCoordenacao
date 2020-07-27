import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoordenacaoRoutingModule } from './coordenacao-routing.module';
import { CoordenacaoListaComponent } from './coordenacao-lista/coordenacao-lista.component';
import { CoordenacaoFormComponent } from './coordenacao-form/coordenacao-form.component';



@NgModule({
  declarations: [CoordenacaoListaComponent, CoordenacaoFormComponent],
  imports: [
    CommonModule,
    CoordenacaoRoutingModule,
    ReactiveFormsModule    
  ],
  providers:[    
  ]
})
export class CoordenacaoModule { }
