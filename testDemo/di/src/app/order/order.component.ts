import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  //要写Input装饰器，如果不写，在父组件中就不能绑定[stockCode]="",这个属性绑定是单向的，是父到子
  @Input()
  stockCode:string;

  @Input()
  amount:number;


  constructor() { }

  ngOnInit() {
  }

}
