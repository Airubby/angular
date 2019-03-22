import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  //接受父组件传来的数据
  @Input() title:any; 

  @Input() msg:any; 

  @Input() run:any; 

  @Input() home:any; 

  constructor() { }

  ngOnInit() {
  }
  getParentMsg(){
    //获取父组件的数据
    alert(this.msg);
    alert(this.home.msg);
  }

  getParentRun(){
    //执行父组件的run 方法
    this.run();
    this.home.run();
  }

}
