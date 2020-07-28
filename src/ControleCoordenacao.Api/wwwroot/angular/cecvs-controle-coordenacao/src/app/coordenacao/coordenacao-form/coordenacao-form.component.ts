import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../coordenacao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coordenacao-form',
  templateUrl: './coordenacao-form.component.html',
  styleUrls: ['./coordenacao-form.component.css']
})
export class CoordenacaoFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  coordenacao: coordenacao;

  constructor(
    private fb: FormBuilder,
    private service: CoordenacaoService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params:any)=> {
        const id = params['id'];

        if(id){ //Carrega o formulário se estiver passando id
          const coordenacao$ = this.service.LoadById(id);
        
          coordenacao$.subscribe(coordenacao=>{          
            this.updateForm(coordenacao);
          });
        }
      }
    )

    this.form = this.fb.group({
      id:[null],
      nome: [null, Validators.required],
      caixaPostal: [null, Validators.email]
    });
  }

  updateForm(coordenacao){
    this.form.patchValue({
      id: coordenacao[0].id,
      nome: coordenacao[0].nome,
      caixaPostal: coordenacao[0].caixaPostal,      
    })
  }

  hasError(field: string) {
    return this.form.get(field).errors
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form);
      this.coordenacao = Object.assign({}, this.coordenacao, this.form.value)

      console.log(this.coordenacao);
      this.service.Save(this.coordenacao).subscribe(
        success=>{},
        error=>{}
      )


      // if (this.form.value.id){ //Se existe fazer update, se não existe criar
      //   this.coordenacao = Object.assign({}, this.coordenacao, this.form.value)//bind para o backend receber
        
      //   this.service.Update(this.coordenacao).subscribe(
      //     success => console.log('sucesso'),
      //     error => console.log(error)
      //   );

      // }
      // else{ 
      //   //Criar        
      //   this.coordenacao = Object.assign({}, this.coordenacao, this.form.value)//bind para o backend receber
      //   this.service.Add(this.coordenacao).subscribe(
      //     success => console.log('sucesso'),
      //     error => console.log(error)
      //   );
      // }     
    };
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log("cancela");
  };
}
