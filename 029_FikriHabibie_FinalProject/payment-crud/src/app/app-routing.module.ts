import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPaymentFormComponent } from './components/edit-payment-form/edit-payment-form.component';
import { HomeComponent } from './components/home/home.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'editpayment/:id', component: EditPaymentFormComponent },
  { path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
