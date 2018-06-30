import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  //只能声明指令，组件和管道, 
  declarations: [ 
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent,
    StarsComponent,
  ],
  //浏览器模块  FormsModule,HttpModule
  imports: [
    BrowserModule,
    AppRoutingModule  
  ],
  //声明服务
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
