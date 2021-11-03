import { Component, OnInit } from '@angular/core';
import { DataPaymentService } from 'src/app/services/data-payment.service';
import { payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: payment[] = []
  id: number = 0;

  constructor(private dataPayment: DataPaymentService) { }

  ngOnInit(): void {
    this.setData();
  }

  setData(){
    this.dataPayment.getData().subscribe(res => {
      this.payments = res
    })
  }

  deleteStaff(id: number){
    this.dataPayment.deleteData(id).subscribe(() => {
      this.setData()
    })
  }
}
