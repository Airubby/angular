import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit {

  public keyword:string;

  public todolist:any[]=[];


  constructor() { }

  ngOnInit() {
  }

  doAdd(e){

    
    if(e.keyCode==13){
        if(!this.todolistHasKeyword(this.todolist,this.keyword)){
          this.todolist.push({
            title:this.keyword,
            status:false                   //false表示代办事项  true表示已完成事项
          });
          this.keyword='';
        }else{
          alert('数据已经存在');
          this.keyword='';
        }
     }
    
  }

  deleteData(key){

    this.todolist.splice(key,1);
  }

  //如果数组里面有keyword返回true  否则返回false
  todolistHasKeyword(todolist:any,keyword:any){

   

    //异步  会存在问题
    // todolist.forEach(value => {

    //   if(value.title==keyword){

    //       return true;
    //   } 
    // });

    

    if(!keyword) return false;

    for(var i=0;i<todolist.length;i++){
      if(todolist[i].title==keyword){

          return true;
      } 
    }
    return false;

  }

}
