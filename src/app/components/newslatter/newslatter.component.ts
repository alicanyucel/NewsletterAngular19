import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsletterModel } from '../../models/newslettermodel';
import { SwalService } from '../../services/swall.service';
import { NewsletterService } from '../../services/newsletter.service';
import { NewsletterPipe } from "../../pipes/newsletter.pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newslatter',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NewsletterPipe,RouterLink],
  templateUrl: './newslatter.component.html',
  styleUrl: './newslatter.component.css'
})
  export class NewsletterComponent implements OnInit {
    newsletters: NewsletterModel[] = [];
    filtertext: string = "";
    constructor(
      private _news: NewsletterService,
      private _swall: SwalService
    ) { }
    ngOnInit(): void {
      this.getList();
    }
    getList() {
      this._news.getList((res) => this.newsletters = res)
    }
  
    delete(id: number) {
      this._swall.callSwal("Sil", "silmek istediğinizden emin misiniz?").then
        ((next) => {
          if (next.isConfirmed) {
            this._news.delete(id, () => this.getList())}
          }
        )
    }
  }