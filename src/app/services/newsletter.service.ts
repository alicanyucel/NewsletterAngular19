import { Injectable } from '@angular/core';
import { NewsletterModel } from '../models/newslettermodel';
import { ResultModel } from '../models/resultmodel';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  api: string = environment.apiUrl +"News/";
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
    this._http.get<NewsletterModel[]>(this.api+"Get").subscribe({
      next: (res) => {
        callBack(res)
      }
    })
  }
}