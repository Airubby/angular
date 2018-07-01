import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { OtherPproductService } from './shared/other-pproduct.service';
import { BindComponent } from './bind/bind.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { OrderComponent } from './order/order.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { BrotherComponent } from './brother/brother.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { TouyingComponent } from './touying/touying.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    BindComponent,
    MultiplePipe,
    OrderComponent,
    PriceQuoteComponent,
    BrotherComponent,
    LifeComponent,
    ChildComponent,
    TouyingComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, //响应式编程模块
    AppRoutingModule
  ],
  //全局注册都可以用到
  //providers: [ProductService,LoggerService],
  //改写 product2.component中的@Component没有写服务
  providers: [{
    provide:ProductService,
    useFactory:(logger:LoggerService,appConfig)=>{ //传入LoggerService类型的logger参数,及appConfig参数(可以是对象，字符串等)
      if(appConfig.isDev){
        return new ProductService(logger);
      }else{
        return new OtherPproductService(logger);
      }
    },
    deps:[LoggerService,"IS_DEV_ENV"]  //依赖LoggerService服务
  },LoggerService,{
    provide:"IS_DEV_ENV",useValue:{isDev:false}  
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
