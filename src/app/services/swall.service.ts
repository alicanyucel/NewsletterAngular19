import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callSwal(title:string="",text:string="",btnName:string="Sil")
  {
    const swal=Swal.fire({
      cancelButtonText:"Vazgeç",showCancelButton:true,
      confirmButtonText:btnName,
      showConfirmButton:true,
      title:title,
      text:text

    });
    return swal;
  }
}