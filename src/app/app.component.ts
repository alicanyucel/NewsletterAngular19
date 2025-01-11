import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NewsletterAngular';
  isAuth:boolean=false;
}
