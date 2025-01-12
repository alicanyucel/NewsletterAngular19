import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';  
import { CheckInputValidDirective } from '../../directives/check-input-valid.directive';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/usermodel';

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
    ToastrModule
  ],
  providers: [
    AuthService,ToastrService
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterContentChecked {
  isAuth: boolean = false;
  userName: string = "";
  toastr: ToastrService;
  router: Router;

  constructor(
    private _auth: AuthService
  ) {}
  ngAfterContentChecked(): void {
    this.checkUser();
   }
 checkUser(){
   if(localStorage.getItem("user"))
   {
     this.isAuth=true;
     let user:UserModel=JSON.parse(localStorage.getItem("user"));
     this.userName=user.nameLastName;
   }
   else
   this.isAuth=false;
 }
 logOut(){
   localStorage.clear();
   this.toastr.warning("başarıyla çıkış yapıldı");
   this.router.navigateByUrl("/login");
 }
  ngOnInit(): void {}

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this._auth.login(loginForm.value);
    }
  }
}
