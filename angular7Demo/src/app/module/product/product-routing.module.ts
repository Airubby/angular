import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './product.component';
import {DirectiveComponent} from './component/directive/directive.component';
import {PipeComponent} from './component/pipe/pipe.component';

const routes: Routes = [
  {
    path:'',component:ProductComponent,
    children:[
      {path:'directive',component:DirectiveComponent},
      {path:'pipe',component:PipeComponent},
      {path:'**',redirectTo:'directive'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
