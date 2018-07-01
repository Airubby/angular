import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  name:string
  birthday:Date=new Date();
  pi:number=3.1415926
  size:number=345
  searchInput:FormControl=new FormControl();

  constructor() {
    setInterval(()=>{
      this.name="稻草"
    },3000)
    //响应式编程Observable
    //订阅input事件
    this.searchInput.valueChanges
    .subscribe(stockCode => this.getStockInfo(stockCode))
   }

  ngOnInit() {
  }
  doOnClick(event:any){
    console.log(event)
  }
  onInput(event:any){
    console.log(event.target.value);  //dom属性会改变的
    console.log(event.target.getAttribute('value'))  //html属性不变的
  }

  getStockInfo(value:string){
    console.log(value);
  }

}
