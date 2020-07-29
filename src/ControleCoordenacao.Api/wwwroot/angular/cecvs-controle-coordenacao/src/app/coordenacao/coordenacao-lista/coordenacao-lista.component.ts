import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../coordenacao';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertModalService } from '../../shared/alert-modal-service';


@Component({
  selector: 'app-coordenacao-lista',
  templateUrl: './coordenacao-lista.component.html',
  styleUrls: ['./coordenacao-lista.component.css'],
  preserveWhitespaces: true
})
export class CoordenacaoListaComponent implements OnInit {
  coordenacoes: coordenacao[];
  coordenacoes$:Observable<coordenacao[]>;
  //bsModalRef:BsModalRef;

  constructor(
    private service: CoordenacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
    private location:Location)  { }

  ngOnInit() {

    // this.service.GetAll()
    //   .subscribe(data => this.coordenacoes = data);

    this.coordenacoes$ = this.service.GetAll();


  }

  onEdit(coordenacaoId) {
    this.router.navigate(['editar', coordenacaoId], { relativeTo: this.route })
    console.log(coordenacaoId);
  }

  onRemove(coordenacaoId){
    this.service.Remove(coordenacaoId)
      .subscribe(
        success=>{window.location.reload()},
        error=>{window.location.reload()});     
  }

  handleError(){
  this.alertService.ShowAlertDanger('erro');
  }
    
}
