import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataStaffService } from 'src/app/services/data-staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  addform = {
    inputData: new FormGroup({
      title:new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      firstname:new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastname:new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      role:new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1),
        Validators.pattern("^[0-1]*$")
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmpassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    })
  }

  constructor(public dataStaff: DataStaffService, public router: Router) { }

  ngOnInit(): void {
  }

  get Title(){
    return this.addform.inputData.get('title')
  }
  get Firstname(){
    return this.addform.inputData.get('firstname')
  }
  get Lastname(){
    return this.addform.inputData.get('lastname')
  }
  get Role(){
    return this.addform.inputData.get('role')
  }
  get Email(){
    return this.addform.inputData.get('email')
  }
  get Password(){
    return this.addform.inputData.get('password')
  }
  get Confirmpassword(){
    return this.addform.inputData.get('confirmpassword')
  }

  addStaff(){
    this.dataStaff.addData(this.addform.inputData.value)
    .subscribe((res) =>{
      if(res){
        this.addform.inputData.reset()
        this.router.navigate(['home'])
      }
    })
  }
}
