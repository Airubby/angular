import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {
  stockCode:string="IBM";
  price:number;


  @Output()  //<PriceQuote>:往外发射的数据是什么类型的,父组件会捕捉lastPrice
  lastPrice:EventEmitter<PriceQuote>=new EventEmitter();

  @Output()  //@Output('buygp')这样写了，外面绑定事件就是(buygp)="shijianmingchen($event)"
  buy:EventEmitter<PriceQuote>=new EventEmitter();

  constructor() { 
    setInterval(()=>{
        let priceQuote:PriceQuote=new PriceQuote(this.stockCode,100*Math.random());
        this.price=priceQuote.lastPrice;
        this.lastPrice.emit(priceQuote); //用emit方法往外发射数据
    },1000)
  }

  buyStock(event){
    this.buy.emit(new PriceQuote(this.stockCode,this.price))
  }

  ngOnInit() {
  }

}


export class PriceQuote{
  constructor(
    public stockCode:string,
    public lastPrice:number
  ){}
}
