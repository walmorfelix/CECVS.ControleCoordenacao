import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-coordenacao-form',
  templateUrl: './coordenacao-form.component.html',
  styleUrls: ['./coordenacao-form.component.css']
})
export class CoordenacaoFormComponent implements OnInit {
  form: FormGroup;
  submitted:boolean = false;

  constructor(private fb:FormBuilder) { }

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
      console.log(this.form.value)
      
    }

  }
  onCancel(){
    this.submitted = false;
    this.form.reset();
    console.log("cancela");

  }
}
