import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NewsletterModel } from '../../models/newslettermodel';
import { ResultModel } from '../../models/resultmodel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newslatter',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './newslatter.component.html',
  styleUrl: './newslatter.component.css'
})
export class NewsletterService {
  api: string = "https://localhost:7056/api" + "/NewsLetter";
  constructor(
    private _http: HttpClient,
    private _toastr: ToastrService,
  ) { }
  post(model: NewsletterModel, callBack: () => void) {
    this._http.post<ResultModel>(this.api, model).subscribe({
      next: (res) => {
        this._toastr.success(res.message)
        callBack();
      }
    })
  }
  put(model: NewsletterModel, callBack: () => void) {
    this._http.put<ResultModel>(this.api, model).subscribe({
      next: (res) => {
        this._toastr.success(res.message)
        callBack();
      }
    })
  }
  delete(id:number, callBack: () => void) {
    this._http.delete<ResultModel>(this.api+ "/" + id).subscribe({
      next: (res) => {
        this._toastr.info(res.message)
        callBack();
      }
    })
  }
  getbyid(id:number,callBack: (res: NewsletterModel) => void) {
    this._http.get<NewsletterModel>(this.api + "/" + id).subscribe({
      next: (res) => {
        callBack(res)
      }
    })
  }
  getList(callBack: (res: NewsletterModel[]) => void) {
    this._http.get<NewsletterModel[]>(this.api).subscribe({
      next: (res) => {
        callBack(res)
      }
    })
  }
}
