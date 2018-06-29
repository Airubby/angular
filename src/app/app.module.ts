import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [ //只能声明指令，组件和管道, NavbarComponent, FooterComponent, SearchComponent, CarouselComponent, ProductComponent, StarsComponent
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule  //浏览器模块  FormsModule,HttpModule
  ],
  providers: [], //声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
