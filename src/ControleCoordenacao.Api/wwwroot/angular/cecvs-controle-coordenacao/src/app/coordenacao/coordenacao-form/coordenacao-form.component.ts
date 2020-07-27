import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { CoordenacaoService } from '../coordenacao.service';
import { coordenacao } from '../coordenacao';

@Component({
  selector: 'app-coordenacao-form',
  templateUrl: './coordenacao-form.component.html',
  styleUrls: ['./coordenacao-form.component.css']
})
export class CoordenacaoFormComponent implements OnInit {
  form: FormGroup;
  submitted:boolean = false;
  coordenacao:coordenacao;

  constructor(private fb:FormBuilder, private service:CoordenacaoService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome:[null, Validators.required],
      caixaPostal:[null, Validators.email]
    });
  }

  hasError(field:string){
    return this.form.get(field).errors
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid){ 
      this.coordenacao = Object.assign({},this.coordenacao, this.form.value)        
      
      this.service.Add(this.coordenacao).subscribe(
        success => console.log('sucesso'),
        error => console.log(error)        
      );      
    };
  }
  onCancel(){
    this.submitted = false;
    this.form.reset();
    console.log("cancela");
  };
}
