import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { coordenacao} from './coordenacao';
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoordenacaoService {

  private readonly api = 'https://localhost:44361/api/coordenacoes';

  constructor(private http: HttpClient) {
  }

  head: any = new HttpHeaders()
    .append('Access-Control-Allow-Origin', '*');


  GetAll() {
    return this.http.get<coordenacao[]>(this.api + "/get-all");
  }

  Add(coordenacao) {
    
    coordenacao.id = 0;    
    let response = this.http
      .post(this.api + "/add", coordenacao)
      .pipe(take(1)
      );
    return response;
  }
  LoadById(id){
    return this.http.get(this.api + "/" + id).pipe(take(1));
  }

  Update(coordenacao: coordenacao){
    return this.http.put(this.api + "/alterar", coordenacao).pipe(take(1));
  }

  Save(coordenacao){
    if (coordenacao.id !=null){
      console.log(coordenacao)
      return this.Update(coordenacao)
    }
    else{
      return this.Add(coordenacao)
    }
  }

  Remove(id){
    console.log(id);
    return this.http.delete(this.api + "/remover/" + id).pipe(take(1));
  }

  
  EmpregadosPorCoordenacao(coordenacaoId){
    return this.http.get("https://localhost:44361/api/empregados/empregados-coordenacao/"+coordenacaoId).pipe(take(1));
  }
}
