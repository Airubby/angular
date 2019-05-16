import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular';
  changeTheme(type){
      console.log(type)
      console.log(document.getElementById('app'))
      document.getElementById('app').className = type;
  }
}
