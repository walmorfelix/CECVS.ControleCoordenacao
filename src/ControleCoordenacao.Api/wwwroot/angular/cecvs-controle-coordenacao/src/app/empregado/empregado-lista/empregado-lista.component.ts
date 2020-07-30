import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../empregado.service';
import { empregado } from '../empregado';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from '../../shared/alert-modal-service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-empregado-lista',
  templateUrl: './empregado-lista.component.html',
  styleUrls: ['./empregado-lista.component.css'],
  preserveWhitespaces: true
})
export class EmpregadoListaComponent implements OnInit {
  empregados: any;
  bsModalRef: BsModalRef;

  constructor(
    private service: EmpregadoService,
    private router: Router,
    private route: ActivatedRoute,
    private alertModal:AlertModalService,
    private modalService: BsModalService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:any)=> {
        const id = params['id'];

        if(id){ //Carrega o formulário se estiver passando id
          
          // const empregado$ = this.service.EmpregadosPorCoordenacao(id);
        
          // empregado$.subscribe(empregados=>{                      
          //   this.empregados = empregados;
          // });
        }else{
              
          this.service.GetAll()
          .subscribe(data => this.empregados = data);

        }
      }
    )


  }

  onEdit(empregadoId) {
    this.router.navigate(['editar', empregadoId], { relativeTo: this.route })
    console.log(empregadoId);
  }

  onRemove(empregadoId){
    this.service.Remove(empregadoId)
      .subscribe(

        success=>{
          alert(success);
          window.location.reload();          
        },
        error=>{
          alert(error);
          window.location.reload(); 
        }        
      );
  }
    
}







