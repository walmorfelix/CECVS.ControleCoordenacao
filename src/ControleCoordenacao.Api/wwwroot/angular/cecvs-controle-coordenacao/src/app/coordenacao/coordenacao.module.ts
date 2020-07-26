import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordenacaoRoutingModule } from './coordenacao-routing.module';
import { CoordenacaoListaComponent } from './coordenacao-lista/coordenacao-lista.component';

@NgModule({
  declarations: [CoordenacaoListaComponent],
  imports: [
    CommonModule,
    CoordenacaoRoutingModule
    
  ]
})
export class CoordenacaoModule { }
