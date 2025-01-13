import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { provideToastr, ToastrModule, ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/usermodel';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink,CommonModule],
  templateUrl: './homepage.component.html',
 
})
export class HomePageComponent implements OnInit  {
  isAuth=false

  userName:string=""
  constructor(
    private _router:Router,private toastr:ToastrService
  ){}
  ngOnInit(): void {
    this.checkUser();
  }
  showsuccess(){
    this.toastr.success('Cıkıs Yapıldı.','Success');
  }
  showwarning(){
    this.toastr.warning('Not matched.','Warning');
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
    this.showwarning();
    this._router.navigateByUrl("/login");
    this.showsuccess();
  }
}