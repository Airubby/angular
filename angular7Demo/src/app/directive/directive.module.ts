import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight/highlight.directive';
import { ShowhideDirective } from './showhide/showhide.directive';

@NgModule({
  declarations: [HighlightDirective, ShowhideDirective],
  imports: [
    CommonModule
  ],
  exports:[HighlightDirective,ShowhideDirective]
})
export class DirectiveModule { }
