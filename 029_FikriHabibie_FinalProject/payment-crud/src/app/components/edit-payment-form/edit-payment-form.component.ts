import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataPaymentService } from 'src/app/services/data-payment.service';
import { ActivatedRoute } from '@angular/router';
import { payment } from 'src/app/models/payment';

@Component({
  selector: 'app-edit-payment-form',
  templateUrl: './edit-payment-form.component.html',
  styleUrls: ['./edit-payment-form.component.css']
})
export class EditPaymentFormComponent implements OnInit {
  payment_id: number
  datas: payment[] = []

  editform = {
    inputData: new FormGroup({
      paymentdetailid: new FormControl,
      cardownername: new FormControl('',[Validators.required, Validators.minLength(3)]),
      cardnumber: new FormControl('',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
      expirationdate: new FormControl('',[Validators.required]),
      securitycode: new FormControl('',[Validators.required, Validators.minLength(6)]),
    })
  }

  onEdit(datas: any){
    this.editform.inputData.controls['paymentdetailid'].setValue(datas.paymentDetailId)
    this.editform.inputData.controls['cardownername'].setValue(datas.cardOwnerName)
    this.editform.inputData.controls['cardnumber'].setValue(datas.cardNumber)
    this.editform.inputData.controls['expirationdate'].setValue(datas.expirationDate)
    this.editform.inputData.controls['securitycode'].setValue(datas.securityCode)
  }

  constructor(public dataPayment: DataPaymentService, private activatedRoute: ActivatedRoute, public router: Router) { 
    this.payment_id = activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.setData(this.payment_id)
  }
  
  get Cardownername(){
    return this.editform.inputData.get('cardownername')
  }
  get Cardnumber(){
    return this.editform.inputData.get('cardnumber')
  }
  get Expirationdate(){
    return this.editform.inputData.get('expirationdate')
  }
  get Securitycode(){
    return this.editform.inputData.get('securitycode')
  }

  editPayment(id:number){
    this.dataPayment.updateData(this.editform.inputData.value,id)
    .subscribe((res) =>{
      if(res){
        this.editform.inputData.reset()
        this.router.navigate(['home'])
      }
    })
  }

  setData(id:number){
    this.dataPayment.getDataUpdated(id).subscribe((res:any[]) => {
      this.datas = res
      this.onEdit(this.datas)
    })
  }
}
