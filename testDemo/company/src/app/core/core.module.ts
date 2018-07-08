import { NgModule,Optional,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule {
   constructor(@Optional() @SkipSelf() parent:CoreModule){
     if(parent){
       throw new Error('核心模块已存在，只能加载一次!');
     }
   }
 }
