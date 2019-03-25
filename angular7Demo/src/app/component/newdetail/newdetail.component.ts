import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../../services/httpservice.service';
@Component({
  selector: 'app-newdetail',
  templateUrl: './newdetail.component.html',
  styleUrls: ['./newdetail.component.less']
})
export class NewdetailComponent implements OnInit {

  public info:any;
  public obj:any;
  public url:string='';
  constructor(public route:ActivatedRoute,public httpService:HttpserviceService) { 
    this.url=httpService.url;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((data)=>{
      this.info=data;
      this.requestContent(data.aid)
    })
    
  }
  requestContent(id){

    //请求数据  http://a.itying.com/api/productcontent?id=5ac1a22011f48140d0002955
    var api='api/productcontent?id='+id;

    this.httpService.Get(api).then((r:any)=>{
      console.log(r)
      this.obj=r.data.result[0];

    })

  }

}
