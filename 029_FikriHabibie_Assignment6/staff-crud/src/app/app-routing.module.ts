import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'addstaff', component: AddStaffComponent },
  { path: 'editstaff/:id', component: EditStaffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
