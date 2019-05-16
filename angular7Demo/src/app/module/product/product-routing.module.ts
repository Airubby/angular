import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './product.component';
import {DirectiveComponent} from './component/directive/directive.component';
import {PipeComponent} from './component/pipe/pipe.component';
import {UtilComponent} from './component/util/util.component';
import {WebsocketComponent} from './component/websocket/websocket.component';

const routes: Routes = [
  {
    path:'',component:ProductComponent,
    children:[
      {path:'directive',component:DirectiveComponent},
      {path:'pipe',component:PipeComponent},
      {path:'util',component:UtilComponent},
      {path:'ws',component:WebsocketComponent},
      {path:'**',redirectTo:'directive'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
