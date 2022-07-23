import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CustomerComponent } from './component/customer/customer.component';
import { Er403Component } from './component/er403/er403.component';
import { Er404Component } from './component/er404/er404.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';
import { TestComponent } from './component/test/test.component';
import { TrainingComponent } from './component/training/training.component';
import { TrainingsComponent } from './component/trainings/trainings.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: '404', component: Er404Component },
  { path: '403', component: Er403Component },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
