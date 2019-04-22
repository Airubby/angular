import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductComponent } from './product.component';
import {DirectiveComponent} from './component/directive/directive.component';

const routes: Routes = [
  {
    path:'',component:ProductComponent,
    children:[
      {path:'directive',component:DirectiveComponent},
      {path:'**',redirectTo:'directive'}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
