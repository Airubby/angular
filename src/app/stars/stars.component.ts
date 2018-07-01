import { Component, OnInit,Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {
  @Input()
  private rating: number = 0;  //默认值为0，这是从product中的public rating:number,传入的
  private stars: boolean[];

  @Output() //输入属性为rating，输出属性必须为ratingChange，这样才能双向绑定[(rating)],就是输出属性为输入属性加Change，不然要自己写(属性事件实现双向绑定)
  private ratingChange:EventEmitter<number>=new EventEmitter();

  @Input()
  private readonly:boolean=true;
  constructor() { }

  ngOnInit() {
    // this.stars = []
    // for (let i = 1; i <= 5; i++) {
    //   this.stars.push(i > this.rating)
    // }
    // this.stars = [false, false, true, true, true]
  }
  ngOnChanges(changes:SimpleChanges):void{
    this.stars = []
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating)
    }
  }

  clickStar(index:number){
    if(!this.readonly){  //已评论的不能点击
      this.rating=index+1;  //下标是从0开始的
      //this.ngOnInit(); //再次点击发表评论时的星级不是5星是上次评论的星级，这样要写在ngOnChanges中改变
      this.ratingChange.emit(this.rating)
    }
    
  }

}
