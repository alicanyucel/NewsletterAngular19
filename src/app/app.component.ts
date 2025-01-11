import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isAuth:boolean= false;
  title:string="HomePage"
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (this.isAuth) {
      // Giriş yaptıysa ana sayfaya yönlendir
      this.router.navigate(['/']);
    }
  }
}
  
