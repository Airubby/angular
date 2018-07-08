import { Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked,AfterViewInit {
  
  @ViewChild('child1')  //这个child1是<app-child #child1></app-child>的#child1
  child1:ChildComponent

  greeting:string="Hello";
  user:{name:string}={name:"Airubby"};
  
  title="Airubby";
  stock="";
  divContent="<div>html投影</div>"
  ngOnInit():void{
    this.child1.greetingFn("Airubby");
  }
  //先是子组件ngAfterViewInit，ngAfterViewChecked然后是父组件ngAfterViewInit，ngAfterViewChecked
  //在ngAfterViewInit，ngAfterViewChecked中想修改属性比如title，angular会报错，只有写在setTimeout()中才可以
  //setTimeout(()=>{this.title="稻草"},0)
  ngAfterViewChecked():void{
    //console.log("父组件的视图变更检测完毕");
  }
  ngAfterViewInit():void{
    //console.log("父组件的视图初始化完毕");
  }
  //要接受子组件发射来的数据，就得声明一个相同的数据类型PriceQuote
  priceQuote:PriceQuote=new PriceQuote("",0);
  priceQuoteHandler(event:PriceQuote){ //event的类型PriceQuote就是子组件this.lastPrice.emit(priceQuote); 发射出来的(priceQuote)
    this.priceQuote=event;
  }
  buyHandler(event:PriceQuote){ 
    this.priceQuote=event;
  }

}
