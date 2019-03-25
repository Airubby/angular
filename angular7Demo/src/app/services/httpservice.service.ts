import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  public url:string="http://a.itying.com/";
  constructor() { }

  Get(api){
    return new Promise((resolve,reject)=>{
       axios.get(this.url+api).then(function (response) {
           // handle success     
           resolve(response)
         });
   })

 }


}
