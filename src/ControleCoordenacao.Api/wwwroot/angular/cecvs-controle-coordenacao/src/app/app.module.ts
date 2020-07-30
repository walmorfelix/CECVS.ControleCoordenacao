import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal'
import { SharedModule } from './shared/shared.module';
import { EmpregadoListaComponent } from './empregado/empregado-lista/empregado-lista.component';

@NgModule({
  declarations: [
    AppComponent,       
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
