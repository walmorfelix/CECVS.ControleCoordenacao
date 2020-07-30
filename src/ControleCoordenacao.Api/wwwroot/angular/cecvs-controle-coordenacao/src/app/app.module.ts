import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal'
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpregadoListaComponent } from './empregado/empregado-lista/empregado-lista.component';
import { CoordenacaoListaComponent } from './coordenacao/coordenacao-lista/coordenacao-lista.component';
import { CoordenacaoFormComponent } from './coordenacao/coordenacao-form/coordenacao-form.component';
import { EmpregadoFormComponent } from './empregado/empregado-form/empregado-form.component';

@NgModule({
  declarations: [
    AppComponent,       
    EmpregadoListaComponent,        
    CoordenacaoListaComponent,
    CoordenacaoFormComponent,
    EmpregadoFormComponent,
    EmpregadoListaComponent 
  ],
  entryComponents:[
    EmpregadoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule,
    CommonModule,    
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
