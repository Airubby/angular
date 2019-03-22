import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'; 

//引入并且配置服务
import { StorageService } from './services/storage.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { SearchComponent } from './component/search/search.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { NewsComponent } from './component/news/news.component';
import { TransitionComponent } from './component/transition/transition.component';
import { FooterComponent } from './component/footer/footer.component';
import { IndexComponent } from './component/index/index.component';
import { LifecycleComponent } from './component/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    TransitionComponent,
    FooterComponent,
    IndexComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
