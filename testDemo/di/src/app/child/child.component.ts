import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterViewChecked,AfterViewInit {
  //给了Input()的父组件改变才会改变
  //下面父组件改变greeting会触发ngOnChanges,改变user的name不会
  //（改变对象属性不会触发，因为user的引用没有改变,用ngDoCheck检测）
  //ngDoCheck要写得高效，轻量级，因为就在页面随便点击都会触发这个
  @Input()
  greeting:string;

  @Input()
  user:{name:string}
  message:string="初始化消息";

  oldUsername:string;
  changeDetected:boolean = false;
  noChangeCount:number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges):void{
    //console.log(JSON.stringify(changes,null,2));
  }
  ngDoCheck():void{
    if(this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      //console.log("DoCheck:user.name从"+this.oldUsername+"变为"+this.user.name);
      this.oldUsername = this.user.name;
    }

    if(this.changeDetected) {
      this.noChangeCount = 0;
    }else{
      this.noChangeCount = this.noChangeCount + 1;
      //console.log("DoCheck:user.name没变化时ngDoCheck方法已经被调用"+this.noChangeCount+"次")
    }

    this.changeDetected = false;
  }

  ngAfterViewChecked():void{
    //console.log("子组件的视图变更检测完毕");
  }
  ngAfterViewInit():void{
    //console.log("子组件的视图初始化完毕");
  }


  greetingFn(name:string){
    console.log("hello"+name)
  }


}
