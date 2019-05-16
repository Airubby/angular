import { Injectable } from '@angular/core';
import { ToolsService } from '@app/utils/tools.service';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

	constructor(public tools:ToolsService) { }

	//info: 发送给 服务端的数据，data需要改变的数据源
	send(info,data){
		console.log(data)
		this.tools.WebSocket(info,function(v){
			let result=data;
			let val=eval(v.data);
			if(result instanceof Array){ //数组的时候
				if(val&&val.length>0){
					for(let i=0;i<val.length;i++){
						for(let j=0;j<result.length;j++){
							if(val[i].matchID===result[j].matchID){
								result[j].value=val[i].value;
							}
						}
					}
				}
			}else{ //obj的时候,如果obj中有多个值需要动态改变时，上面的数组中也可用下面的方式
				//给每个需改变的值比如value新增key_value
				if(val&&val.length>0){
					for(let i=0;i<val.length;i++){
						for(let item in result){
							if(result[item]===val[i].matchID){  //这个key与需要改变的（key_value）匹配
								let vitem=item.split("_")[1];
								result[vitem]=val[i].value;
							}
						}
					}
					
				}
				
			}
			return result;
		})
	}

}
