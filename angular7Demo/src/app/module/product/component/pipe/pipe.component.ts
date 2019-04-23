import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.less']
})
export class PipeComponent implements OnInit {

  public power = 5;
  public factor = 1;
  constructor() { }

  ngOnInit() {
  }

}
