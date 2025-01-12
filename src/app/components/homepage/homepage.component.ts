import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/usermodel';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomePageComponent implements AfterContentChecked {
  isAuth=false
  userName:string=""
  constructor(
    private _router:Router,private _toastr:ToastrService
  ){}
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
    this._toastr.warning("başarıyla çıkış yapıldı");
    this._router.navigateByUrl("/login");
  }
}