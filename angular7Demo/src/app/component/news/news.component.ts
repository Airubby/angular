/*
ViewChild获取dom节点
    1、模板中给dom起一个名字
      <div #myBox>
        我是一个dom节点
      </div>
    2、在业务逻辑里面引入ViewChild
    import { Component, OnInit,ViewChild} from '@angular/core';
    3、 写在类里面    @ViewChild('myBox') myBox:any;
         @ViewChild('myBox')中的myBox和dom起的名字一致； myBox:any;的myBox为自定义名字，随意，用于下面获取nativeElement用
    4、ngAfterViewInit生命周期函数里面获取dom
    this.myBox.nativeElement
*/
/*
get传值
1、跳转
  <li *ngFor="let item of list;let key=index;">
      <!-- <a href="/newscontent?aid=123">{{key}}--{{item}}</a> -->
      <a [routerLink]="['/newscontent']" [queryParams]="{aid:key}">{{key}}--{{item}}</a>
    </li>
  2、接收
    import { ActivatedRoute } from '@angular/router';
    constructor(public route:ActivatedRoute) { }
   this.route.queryParams.subscribe((data)=>{
        console.log(data);
   })
 动态路由
      1、引入声明模块
          import { Router} from '@angular/router';
          constructor(public router:Router) { }
       2、跳转
         this.router.navigate(['/home']);
         this.router.navigate(['/newscontent/','1243'])
*/

import { Component, OnInit ,ViewChild} from '@angular/core';
//当做一个服务,app.module中import { HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
//使用服务里面的axios获取数据
import { HttpserviceService } from '../../services/httpservice.service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  //获取dom节点
  @ViewChild('myBox') myBox:any;
  //获取一个组件
  @ViewChild('header') header:any;
  public list:any[]=[];
  public obj:object={};

  public news:any[]=[];
  public url:string='';

  public info:any[]=[];
  
  constructor(public http:HttpClient,public httpService:HttpserviceService,public router:Router) {
    this.url=httpService.url;
  }

  ngOnInit() {
    for(var i=0;i<10;i++){
      this.news.push('这是第'+i+'条数据');
    }
    this.getInfo()
  }

  ngAfterViewInit(): void {
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.width='100px';
    this.myBox.nativeElement.style.height='100px';
    this.myBox.nativeElement.style.background='red';
    console.log(this.myBox.nativeElement.innerHTML);
  }
  getChildRun(){
    //调用子组件里面的方法
     this.header.run();
  }
  getChildMsg(){
    //获取footer子组件的数据
    alert(this.header.msg);
  }
  run(e){
    console.log(e);   //子组件给父组件广播的数据
    alert('我是父组件的run方法，接受子组件广播的数据');
  }
  routego(key){
    console.log(key)
    this.router.navigate(['/news/newdetail'],{queryParams:{key:key,value:0}})
  }
  getData(){
    //服务器必须允许跨域  
    let api="http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
        console.log(response);
        this.list=response.result;
    })
  }
  // postData(){
  //     //手动设置请求的类型
  //     const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  //     //存在跨域   
  //     let api='http://127.0.0.1:3000/dologin';
  //     this.http.post(api,{"username":"张三",'age':20},httpOptions).subscribe((response)=>{
  //       console.log(response);
  //     })
  // }
    getInfo(){
      this.httpService.Get("api/productlist").then((r:any)=>{
          console.log(r)
          this.info=r.data.result;
      })
    }



}
