import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../empregado.service';
import { empregado } from '../empregado';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empregado-lista',
  templateUrl: './empregado-lista.component.html',
  styleUrls: ['./empregado-lista.component.css'],
  preserveWhitespaces: true
})
export class EmpregadoListaComponent implements OnInit {
  empregados: empregado[];

  constructor(
    private service: EmpregadoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.service.GetAll()
      .subscribe(data => this.empregados = data);
  }

  onEdit(empregadoId) {
    this.router.navigate(['editar', empregadoId], { relativeTo: this.route })
    console.log(empregadoId);
  }

  onRemove(empregadoId){
    this.service.Remove(empregadoId)
      .subscribe(
        success=>{},
        error=>{}
      );
  }
    
}







