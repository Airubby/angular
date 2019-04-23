import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'; 

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { PipeComponent } from './component/pipe/pipe.component';

import {DirectiveModule} from '../../directive/directive.module';
import { PipeModule } from '../../pipe/pipe.module'

@NgModule({
  declarations: [ProductComponent, DirectiveComponent, PipeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    DirectiveModule,
    PipeModule
  ]
})
export class ProductModule { }
