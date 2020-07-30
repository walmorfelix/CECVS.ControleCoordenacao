import { Location } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../coordenacao';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertModalService } from '../../shared/alert-modal-service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
    console.log(coordenacaoId);  

        this.router.navigate(['./listarEmpregados', coordenacaoId], { relativeTo: this.route });         
  }

  onEdit(coordenacaoId) {
    this.router.navigate(['./editarCoordenacao', coordenacaoId], { relativeTo: this.route });   
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
