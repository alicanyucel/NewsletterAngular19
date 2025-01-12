import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';  
import { CheckInputValidDirective } from '../../directives/check-input-valid.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CheckInputValidDirective,
    HttpClientModule,
  ],
  providers: [
    AuthService
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth: boolean = false;
  userName: string = "";

  constructor(
    private _auth: AuthService
  ) {}

  ngOnInit(): void {}

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this._auth.login(loginForm.value);
    }
  }
}
