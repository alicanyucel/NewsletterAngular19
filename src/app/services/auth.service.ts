import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../models/usermodel';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string = "https://localhost:7272/api" + "/Auths";
  constructor(private _http: HttpClient,
    private _router: Router) { }
  login(model: UserModel) {
                   //DÖNEN DEĞER
    this._http.post<UserModel>(this.api + "/Login", model).subscribe({
      next: (res) => {
        localStorage.setItem("user", JSON.stringify(res)); 
        this._router.navigateByUrl("/");
      },
      error: (err) => {
        console.error("Login failed", err); 
        alert("Login failed. Please try again."); 
      }
    });

  }
}