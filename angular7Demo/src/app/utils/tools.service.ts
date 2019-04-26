import { Injectable } from '@angular/core';
// 1、ng g service utils/tools
// 2、app.module.ts 里面引入创建的服务 并且声明
// import { ToolsService } from '.utils/tools.service'
// providers: [ToolsService]
// 3、在用到的组件里面
//       //引入服务
//       import { ToolsService } from '@app/utils/tools.service';
//       //初始化
//       constructor(public tools:ToolsService) { 
//           let s=this.tools.Format("yyyy-MM-dd",new Date());
//       }
@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  Format(fmt:string,value:Date){
    let date=value?new Date(value):new Date();
    let o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

  Echart(xData,yData,timeType){
    let _this=this;
    let Type=timeType?timeType:'yyyy-MM-dd hh:dd:ss';
    return {
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
                        // 格式化成月/日，
                        return _this.Format(Type,value);
                    }
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                data :xData
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
            data:yData
        },
      ]
    }
  }





}
