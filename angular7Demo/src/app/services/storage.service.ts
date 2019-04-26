import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  serverConfig:any;

  constructor() { }
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key:string){
    // return 'this is a service';
    return JSON.parse(localStorage.getItem(key))
  }
  remove(key:string){
    localStorage.removeItem(key);
  }
  setServerConfig(data:any){
    this.serverConfig=data;
  }
  getServerConfig(){
    return this.serverConfig;
  }
  
}
