import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  public title:string="首页组件的标题";
  public msg:string='我是父组件的msg';
  constructor() { }

  ngOnInit() {
  }
  run(){
    alert('我是父组件的run方法');
  }

}
