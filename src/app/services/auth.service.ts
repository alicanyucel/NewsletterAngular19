import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/usermodel';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http:HttpClient,
    private _router:Router) { }
    login(model:UserModel)
    {
      this._http.post<UserModel>(environment.apiUrl+"/Login",model).subscribe({
        next:(res)=>{
          localStorage.setItem("user",JSON.stringify(res));
          this._router.navigateByUrl("/");
        }
      })
    }
}