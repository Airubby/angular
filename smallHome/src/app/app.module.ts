import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoncomProgressComponent } from './component/loncom-progress/loncom-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoncomProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
