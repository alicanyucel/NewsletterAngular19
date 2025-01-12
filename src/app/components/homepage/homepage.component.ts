import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink,CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomePageComponent implements OnInit {
  isAuth: boolean = false;
  title: string = "HomePage";

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.isAuth) {
      this.router.navigate(['/']);
    }
  }
}
