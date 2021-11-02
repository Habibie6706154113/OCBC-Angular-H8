import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { DataStaffService } from 'src/app/services/data-staff.service';
import { staff } from 'src/app/models/staff';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: staff[] = []
  id: number

  constructor(
    public dataStaff: DataStaffService, 
    public router: Router, 
    private actRoute: ActivatedRoute) { 
      this.id = actRoute.snapshot.params.id 
    }

  ngOnInit(): void {
    this.setStaff()
  }

  setStaff(){
    this.dataStaff.getData().subscribe(res => {
      this.employees = res
      console.log(this.employees)
    })
  }

  deleteStaff(id: number){
    this.dataStaff.deleteData(id).subscribe(() => {
      this.setStaff()
    })
  }
}
