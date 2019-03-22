/**
 * 
1、ng g service services/storage
2、app.module.ts 里面引入创建的服务 并且声明
import { StorageService } from './services/storage.service'
providers: [StorageService]
3、在用到的组件里面
      //引入服务
      import { StorageService } from '../../services/storage.service';
      //初始化
      constructor(public storage:StorageService) { 
          let s=this.storage.get();
      }
 * 
 */
import { Component, OnInit } from '@angular/core';
//引入服务
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  public keyword:string;
  public historyList:any[]=[];

  constructor(public storage:StorageService) { }

  ngOnInit() {
    console.log('页面刷新会触发这个生命周期函数');
    let searchlist:any=this.storage.get('searchlist');

    if(searchlist){
      this.historyList=searchlist;        
    }

  }

  doSearch(){

    if(this.historyList.indexOf(this.keyword)==-1){
      this.historyList.push(this.keyword);
      this.storage.set('searchlist',this.historyList);
    }    
    this.keyword='';    
  }

  deleteHistroy(key){
      this.historyList.splice(key,1);
      this.storage.set('searchlist',this.historyList);
  }

}
