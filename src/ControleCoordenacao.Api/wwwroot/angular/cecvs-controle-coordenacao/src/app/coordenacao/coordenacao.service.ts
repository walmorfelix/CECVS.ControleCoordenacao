import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { coordenacao } from './coordenacao';

@Injectable({
  providedIn: 'root'
})
export class CoordenacaoService {

  private readonly api = 'https://localhost:44361/api/coordenacoes';

  constructor(private http:HttpClient) { }

  GetAll(){    
    return this.http.get<coordenacao[]>(this.api);
  }
  Insert(coordenacao){
    return this.http.post(this.api, coordenacao);
  }
}
