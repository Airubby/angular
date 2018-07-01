import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touying',
  templateUrl: './touying.component.html',
  styleUrls: ['./touying.component.css']
})
export class TouyingComponent implements OnInit {
  //父组件投影内容-》父组件投影内容变更检测-》子组件投影内容-》子组件内容变更检测-》父组件视图内容
  //这样的顺序，在投影内容中可改变属性，视图内容中不行，但能用setTimeout()时间为0
  constructor() { }

  ngOnInit() {
  }

}
