import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../Coordenacao';


@Component({
  selector: 'app-coordenacao-lista',
  templateUrl: './coordenacao-lista.component.html',
  styleUrls: ['./coordenacao-lista.component.css'],
  preserveWhitespaces:true
})
export class CoordenacaoListaComponent implements OnInit {
  coordenacoes:coordenacao[];

  constructor(private service:CoordenacaoService) { }

  ngOnInit() {
    this.service.GetAll()
      .subscribe(data=> this.coordenacoes = data);
  }
}
