import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

    public numberarr=[];
    public optionsNX: any;
    public optionsPUE: any;
    public optionsPUEx:any[]=[];
    public optionsAlarm:any;

  constructor() { }

  ngOnInit() {
    for(let i=0;i<12;i++){
      this.numberarr.push(i)
    }
    this.optionsNX={
      color:["#0077E9","#7B2DD8","#2BBBCE","#108912"],
      tooltip: {
          trigger: 'item',
          formatter: "{b}: {c} ({d}%)"
      },
      series: [
          {
              type:'pie',
              radius: ['80%', '85%'],
              silent:true,  //不触发鼠标事件，及鼠标放上去无效果
              // tooltip:{textStyle:{color:"transparent"},backgroundColor:"transparent"},
              data:[
                  {value:1, name:'one'},
                  {value:1, name:'two'},
                  {value:1, name:'three'},
                  {value:1, name:'four'},
                  {value:1, name:'five'},
                  {value:1, name:'six'}
              ],
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
              },
              itemStyle:{
                  normal:{
                      color: function(params){
                          var index_color = params.name;
                          if(index_color=="one"||index_color=='three'||index_color=='five'){
                              return '#021146';
                          }else if(index_color=='two'||index_color=='four'||index_color=='six') {
                              return '#1E4F79';
                          }
                      } 
                  }
              }
          },
          {
              type:'pie',
              radius: ['50%', '65%'],
              label: {
                  normal: {
                      formatter: '{b|{b}}{per|{d}%} ',
                      rich: {
                          b: {
                              fontSize: 12,
                              lineHeight: 33
                          },
                          per: {
                              color: '#fff',
                              fontSize: 14,
                              padding: [2, 4],
                              borderRadius: 2
                          }
                      }
                  }
              },
              data:[
                  {value:335, name:'配电'},
                  {value:310, name:'环境'},
                  {value:234, name:'IT'},
                  {value:135, name:'空调'}
              ]
          }
      ]
    }

    this.optionsPUEx=["03/08","03/09","03/10","03/11","03/12","03/13","03/14"];

    this.optionsPUE={
        color:["#0082FB"],
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '15px',
            right: '25px',
            top:'15%',
            bottom: '15%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    lineStyle:{
                        color:"#13254F",
                        width:1,
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#4B5880",
                    formatter: function (value, index) {
                        // 格式化成月/日，只在第一个刻度显示年份
                        return value;
                    }
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                data :this.optionsPUEx
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color:"#13254F",
                        width:1,
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#1c3042",
                        width:1,
                        type:"dashed",
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#4B5880",
                    formatter: '{value}'
                }
            }
        ],
        series : [
          {
              name:'PUE',
              type:'line',
              areaStyle: {
                color:{
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#033072' // 0% 处的颜色
                  }, {
                      offset: 1, color: '#021143' // 100% 处的颜色
                  }],
                }
              },
              smooth:"true", //平滑
              //symbol:"line", //不要圆圈
              symbolSize:4, //平滑的时候设置为0
              data:[1.5, 1.8, 1.3, 1.2, 2.0, 1.3, 1.9]
          },
      ]
    }

    this.optionsAlarm={
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            series: [
                {
                    type:'pie',
                    radius: ['70%', '82%'],
                    silent:true,  //不触发鼠标事件，及鼠标放上去无效果
                    clockwise:false,  //false 逆时针方向
                    data:[
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'three'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        
                    ],
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter:'{num|235}\r\n{text|连续使用天数}',
                            rich: {
                                num: {
                                    fontSize: 26,
                                    color:'#fff',
                                    fontFamily:'Arial'
                                },
                                text: {
                                    color: '#5B6A93',
                                    fontSize: 12,
                                    fontFamily:'Microsoft YaHei'
                                }
                            },
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold',
                                color:"#000"
                            },
                        },
                    },
                    itemStyle:{
                        normal:{
                            color: function(params){
                                var index_color = params.name;
                                if(index_color=="one"){
                                    return '#092B51';
                                }else if(index_color=='two') {
                                    return 'transparent';
                                }else if(index_color=='three'){
                                    return '#008BFF'
                                }
                            } 
                        }
                    }
                },
                {
                    type:'pie',
                    radius: ['61%', '62%'],
                    silent:true,  //不触发鼠标事件，及鼠标放上去无效果
                    data:[
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        
                    ],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                    },
                    itemStyle:{
                        normal:{
                            color: function(params){
                                var index_color = params.name;
                                if(index_color=="one"){
                                    return '#092A50';
                                }else if(index_color=='two') {
                                    return 'transparent';
                                }
                            } 
                        }
                    }
                },
                {
                    type:'pie',
                    radius: ['90%', '91%'],
                    silent:true,  //不触发鼠标事件，及鼠标放上去无效果
                    data:[
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        {value:1, name:'one'},
                        {value:1, name:'two'},
                        
                    ],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                    },
                    itemStyle:{
                        normal:{
                            color: function(params){
                                var index_color = params.name;
                                if(index_color=="one"){
                                    return '#092A50';
                                }else if(index_color=='two') {
                                    return 'transparent';
                                }
                            } 
                        }
                    }
                },
                {
                    type:'pie',
                    radius: ['97%', '98%'],
                    silent:true,  //不触发鼠标事件，及鼠标放上去无效果
                    data:[
                        {value:1, name:'one'},
                    ],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                    },
                    itemStyle:{
                        color:'#092A50',
                    }
                }
            ]
    }


  }

}
