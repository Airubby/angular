import { Component, OnInit } from '@angular/core';
import { ToolsService } from '@app/utils/tools.service';


@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.less']
})
export class UtilComponent implements OnInit {

  public time:any;
  public optionsPUE: any;
  public optionsPUEx=["2018-03-24","2018-03-25","2018-03-26","2018-03-27","2018-03-28","2018-03-29","2018-03-30"];
  public optionsPUEy=[1.5, 1.8, 1.3, 1.2, 2.0, 1.3, 1.9];
  public optionsPUE1: any;
  constructor(public tools:ToolsService) { }

  
  ngOnInit() {
    this.time=new Date();
    this.time=this.tools.Format('yyyy-MM-dd hh:mm',this.time);
    this.optionsPUE=this.tools.Echart(this.optionsPUEx,this.optionsPUEy,"MM/dd");
    this.optionsPUE1=this.tools.Echart(this.optionsPUEx,this.optionsPUEy,"MM-dd");
  

  }
  ngAfterViewInit() {
    
  }

}
