import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { DirectiveComponent } from './component/directive/directive.component';
import {DirectiveModule} from '../../directive/directive.module'

@NgModule({
  declarations: [ProductComponent, DirectiveComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    DirectiveModule
  ]
})
export class ProductModule { }
