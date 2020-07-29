import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes{
  DANGER='danger',
  SUCCESS = 'success',
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private ShowAlert(message: string, type:string){
    const bsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.messase = message;

  }

  ShowAlertDanger(message:string){
    this.ShowAlert(message, AlertTypes.DANGER);
  }

  ShowAlertSuccess(message:string){ 
    console.log(message);   
    this.ShowAlert(message, AlertTypes.SUCCESS);
  }

}

