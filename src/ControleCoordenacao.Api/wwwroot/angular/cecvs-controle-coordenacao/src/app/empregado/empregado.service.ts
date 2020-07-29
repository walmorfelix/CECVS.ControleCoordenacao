import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { empregado} from './empregado';
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private readonly api = 'https://localhost:44361/api/empregados';

  constructor(private http: HttpClient) {
  }

  head: any = new HttpHeaders()
    .append('Access-Control-Allow-Origin', '*');


  GetAll() {
    return this.http.get<empregado[]>(this.api + "/get-all");
  }

  Add(empregado) {
    
    empregado.id = 0;  
      
    let response = this.http
      .post(this.api + "/add", empregado)
      .pipe(take(1)
      );
    return response;
  }
  LoadById(id){
    return this.http.get(this.api + "/" + id).pipe(take(1));
  }

  Update(empregado: empregado){
    return this.http.put(this.api + "/alterar", empregado).pipe(take(1));
  }

  Save(empregado){
    if (empregado.id !=null){
      console.log(empregado)
      return this.Update(empregado)
    }
    else{
      return this.Add(empregado)
    }
  }

  Remove(id){
    console.log(id);
    return this.http.delete(this.api + "/remover/" + id).pipe(take(1));
  }
}

