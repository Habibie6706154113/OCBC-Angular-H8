import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStaffService } from 'src/app/services/data-staff.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  staff_id: number

  editform = {
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

  constructor(public dataStaff: DataStaffService, public router: Router, private activatedRoute: ActivatedRoute) {
    this.staff_id = activatedRoute.snapshot.params.id
   }

  ngOnInit(): void {
  }

  get Title(){
    return this.editform.inputData.get('title')
  }
  get Firstname(){
    return this.editform.inputData.get('firstname')
  }
  get Lastname(){
    return this.editform.inputData.get('lastname')
  }
  get Role(){
    return this.editform.inputData.get('role')
  }
  get Email(){
    return this.editform.inputData.get('email')
  }
  get Password(){
    return this.editform.inputData.get('password')
  }
  get Confirmpassword(){
    return this.editform.inputData.get('confirmpassword')
  }

  editStaff(id:number){
    this.dataStaff.updateData(this.editform.inputData.value,id)
    .subscribe((res) =>{
      if(res){
        this.editform.inputData.reset()
        this.router.navigate(['home'])
      }
    })
  }
}
