import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../Coordenacao';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coordenacao-lista',
  templateUrl: './coordenacao-lista.component.html',
  styleUrls: ['./coordenacao-lista.component.css'],
  preserveWhitespaces: true
})
export class CoordenacaoListaComponent implements OnInit {
  coordenacoes: coordenacao[];

  constructor(
    private service: CoordenacaoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.service.GetAll()
      .subscribe(data => this.coordenacoes = data);


  }

  onEdit(coordenacaoId) {
    this.router.navigate(['editar', coordenacaoId], { relativeTo: this.route })
    console.log(coordenacaoId);
  }
}
