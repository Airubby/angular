import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output()  private  outer=new EventEmitter();

  public msg="我是子组件header的一个msg";

  constructor() { }

  ngOnInit() {
  }
  run(){
    console.log('我是header里面的run方法');
  }
  sendParent(){
    this.outer.emit('我是子组件的数据');
  }


}
