import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgForm, ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CheckInputValidDirective } from '../../directives/check-input-valid.directive';

@Component({
  selector: 'app-login',
  imports: [RouterModule,CommonModule,FormsModule,ReactiveFormsModule,CheckInputValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private _auth:AuthService
  ){}
  ngOnInit():void{}
  login(loginForm: NgForm){
  if(loginForm.valid)
  {
   this._auth.login(loginForm.value);
  }
  }
}