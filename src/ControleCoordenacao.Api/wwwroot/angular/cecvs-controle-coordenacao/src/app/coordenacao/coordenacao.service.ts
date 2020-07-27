import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { coordenacao } from './coordenacao';

import { pipe } from '../../../node_modules/@angular/core/src/render3';
import { post } from '../../../node_modules/@types/selenium-webdriver/http';
import { Observable } from '../../../node_modules/rxjs';
import { take, map, catchError } from "rxjs/operators";

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
  Add(coordenacao: coordenacao) {
    let response = this.http
      .post(this.api + "/add", coordenacao)
      .pipe(take(1)
      );
    return response;
  }
}
