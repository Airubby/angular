import { Component, OnInit } from '@angular/core';
import {WebsocketService} from '@app/services/websocket.service';
@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.less']
})
export class WebsocketComponent implements OnInit {

	public info:any[]=[
		{"matchID":"1","value":23},
		{"matchID":"2","value":33},
		{"matchID":"3","value":456},
		{"matchID":"4","value":567},
	];
	public obj={
		"matchID_value":"3","value":456
	}
	constructor(public ws:WebsocketService) { 
		console.log(this.ws)
	}

	ngOnInit() {
		this.ws.send("",this.info);
		this.ws.send("",this.obj);
	}

}
