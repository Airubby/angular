import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ //只能声明指令，组件和管道
    AppComponent
  ],
  imports: [
    BrowserModule  //浏览器模块  FormsModule,HttpModule
  ],
  providers: [], //声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
