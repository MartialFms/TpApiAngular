import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './component/trainings/trainings.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { CustomerComponent } from './component/customer/customer.component';
import { TrainingComponent } from './component/training/training.component';
import { OrderComponent } from './component/order/order.component';
import { Er404Component } from './component/er404/er404.component';
import { Er403Component } from './component/er403/er403.component';
import { TestComponent } from './component/test/test.component';
import { AppRoutingModule } from './app.routing.module';
import { DialogModule } from "primeng/dialog";
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { MenuModule }from 'primeng/menu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CustomerComponent,
    TrainingComponent,
    OrderComponent,
    Er404Component,
    Er403Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    CheckboxModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    HttpClientModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
