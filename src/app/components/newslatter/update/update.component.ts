import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NewsletterModel } from '../../../models/newslettermodel';
import { NewsletterService } from '../../../services/newsletter.service';
import { ActivatedRoute } from '@angular/router';
import { CheckInputValidDirective } from '../../../directives/check-input-valid.directive';

@Component({
  selector: 'app-update',
  imports: [CommonModule,FormsModule,BrowserModule,CheckInputValidDirective],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  updatemodel: NewsletterModel = new NewsletterModel();
description: HTMLInputElement;
  constructor(
    private _activated: ActivatedRoute,
    private _news:NewsletterService
  ) { }
  ngOnInit(): void {
    this._activated.params.subscribe({
      next: (res: any) =>this._news.getbyid(res.value,(res)=> this.updatemodel=res)
    })

  }
  update(){

  }
}
