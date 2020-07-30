import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../coordenacao';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertModalService } from '../../shared/alert-modal-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../../modal-content/modal-content.component';
import { EmpregadoListaComponent } from '../../empregado/empregado-lista/empregado-lista.component';


@Component({
  selector: 'app-coordenacao-lista',
  templateUrl: './coordenacao-lista.component.html',
  styleUrls: ['./coordenacao-lista.component.css'],
  preserveWhitespaces: true
})
export class CoordenacaoListaComponent implements OnInit {
  empregados:any;
  coordenacoes: coordenacao[];
  coordenacoes$:Observable<coordenacao[]>;
  bsModalRef:BsModalRef;

  constructor(
    private service: CoordenacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
    private location:Location,
    private modalService: BsModalService)  { }

  ngOnInit() {

    this.coordenacoes$ = this.service.GetAll();
  }

  listarEmpregados(coordenacaoId){

    this.empregados = this.service.EmpregadosPorCoordenacao(coordenacaoId).subscribe(data=>{
      this.empregados=data});


    console.log( this.empregados);

    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };   

    this.bsModalRef = this.modalService.show(EmpregadoListaComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';

    console.log(coordenacaoId);
  }

  onEdit(coordenacaoId) {
    this.router.navigate(['editar', coordenacaoId], { relativeTo: this.route })
    console.log(coordenacaoId);
  }

  onRemove(coordenacaoId){
    this.service.Remove(coordenacaoId)
      .subscribe(
        success=>{
          alert(success);
          window.location.reload();          
        },
        error=>{
          alert(error);
          window.location.reload(); 
        });    
  }

  handleError(){
  this.alertService.ShowAlertDanger('erro');
  }
    
}
