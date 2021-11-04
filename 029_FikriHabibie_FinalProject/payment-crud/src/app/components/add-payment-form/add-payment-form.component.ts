import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataPaymentService } from 'src/app/services/data-payment.service';

@Component({
  selector: 'app-add-payment-form',
  templateUrl: './add-payment-form.component.html',
  styleUrls: ['./add-payment-form.component.css']
})
export class AddPaymentFormComponent implements OnInit {
  addform = {
    inputData: new FormGroup({
      cardownername: new FormControl('',[Validators.required, Validators.minLength(3)]),
      cardnumber: new FormControl('',[Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]),
      expirationdate: new FormControl('',[Validators.required]),
      securitycode: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]),
    })
  }  

  constructor(public dataPayment: DataPaymentService) { }

  ngOnInit(): void {
  }

  get Cardownername(){
    return this.addform.inputData.get('cardownername')
  }
  get Cardnumber(){
    return this.addform.inputData.get('cardnumber')
  }
  get Expirationdate(){
    return this.addform.inputData.get('expirationdate')
  }
  get Securitycode(){
    return this.addform.inputData.get('securitycode')
  }

  addPayment(){
    this.dataPayment.addData(this.addform.inputData.value)
    .subscribe((res) =>{
      if(res){
        this.addform.inputData.reset()
        location.reload()
      }
    })
  }
}
