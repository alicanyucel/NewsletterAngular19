import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsletterModel } from '../../models/newslettermodel';
import { SwalService } from '../../services/swall.service';

@Component({
  selector: 'app-newslatter',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './newslatter.component.html',
  styleUrl: './newslatter.component.css'
})
export class NewsletterComponent  {
  
  
}