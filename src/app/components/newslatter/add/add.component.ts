import { CommonModule } from '@angular/common';
import { Component, Directive, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NewsletterService } from '../../../services/newsletter.service';
import { CheckInputValidDirective } from '../../../directives/check-input-valid.directive';

@Component({
  selector: 'app-add',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,CheckInputValidDirective],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
description: HTMLInputElement;
 
  constructor(
    private _news:NewsletterService
  ){}
  ngOnInit(): void {
    
  }
add(addform:NgForm){
this._news.post(addform.value,()=>addform.reset())
}
}