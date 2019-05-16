import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'; 

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { PipeComponent } from './component/pipe/pipe.component';

import {DirectiveModule} from '../../directive/directive.module';
import { PipeModule } from '../../pipe/pipe.module';
import { UtilComponent } from './component/util/util.component'

import {NgxEchartsModule} from 'ngx-echarts';
import { WebsocketComponent } from './component/websocket/websocket.component'

@NgModule({
  declarations: [ProductComponent, DirectiveComponent, PipeComponent, UtilComponent, WebsocketComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    DirectiveModule,
    NgxEchartsModule,
    PipeModule
  ]
})
export class ProductModule { }
