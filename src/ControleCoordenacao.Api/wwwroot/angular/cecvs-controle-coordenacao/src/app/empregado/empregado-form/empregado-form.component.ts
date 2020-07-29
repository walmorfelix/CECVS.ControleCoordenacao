import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { EmpregadoService } from '../empregado.service';
import { empregado } from '../empregado';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empregado-form',
  templateUrl: './empregado-form.component.html',
  styleUrls: ['./empregado-form.component.css']
})
export class EmpregadoFormComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  empregado: empregado;
  bloquearEdicao : boolean = false;
  coordenacoes = [];
  

  constructor(
    private fb: FormBuilder,
    private service: EmpregadoService,
    private route: ActivatedRoute,
    private location:Location

  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:any)=> {
        const id = params['id'];

        if(id){ //Carrega o formulário se estiver passando id
          console.log(id);
          const empregado$ = this.service.LoadById(id);
          
          this.bloquearEdicao = true;        
          empregado$.subscribe(empregado=>{  
            
            this.updateForm(empregado);            
          });
        }
      }
    )

    this.form = this.fb.group({
      id:[null],      
      matricula: [null, Validators.required],
      nome: [null, Validators.required],
      coordenacao: [null, Validators.required]
    });
  }

  updateForm(empregado){
    console.log(empregado);        
    this.form.setValue({
      id: empregado.id,
      matricula: empregado.matricula,
      nome: empregado.nome,
      coordenacao: empregado.coordenacao,      
    }
  )
  }

  hasError(field: string) {
    return this.form.get(field).errors
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {      
      console.log(this.form);
      this.empregado = Object.assign({}, this.empregado, this.form.value)

      console.log(this.empregado);
      this.service.Save(this.empregado).subscribe(
        success=>{
          this.location.back();
        },
        error=>{
          this.location.back();
        }
      )  
    };
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log("cancela");
  };
}

