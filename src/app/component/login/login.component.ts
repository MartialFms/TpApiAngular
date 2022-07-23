import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  user : User | undefined;
  error : string | undefined;
  connected : boolean = false;
  activeIndex : boolean = false;

  constructor(private formBuilder : FormBuilder, public authService : AuthService,
    private apiService : ApiService, private router : Router) {
    this.user = authService.getUser();
    this.connected = authService.isConnected();
    this.myForm = this.formBuilder.group({
      email : [this.user.email, [Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      password : [this.user.password, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onLogin(form : FormGroup){
    if(form.valid){
      if(this.authService.login(form.value.email,form.value.password)){
          this.router.navigateByUrl('cart');
      }
      this.error = 'Email ou Password incorrectes';
    }
  }

  onAddUser(){

  }

  deconnexion(){
    this.authService.deconnected();
    this.connected = false;
    this.router.navigateByUrl('trainings');
  }
}
