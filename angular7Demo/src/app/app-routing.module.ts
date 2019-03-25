import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './component/form/form.component';
import { SearchComponent } from './component/search/search.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { HomeComponent } from './component/home/home.component';
import { WelcomeComponent } from './component/home/welcome/welcome.component';
import { SettingComponent } from './component/home/setting/setting.component';

import { NewsComponent } from './component/news/news.component';
import { TransitionComponent } from './component/transition/transition.component';
import { IndexComponent } from './component/index/index.component';
import { LifecycleComponent } from './component/lifecycle/lifecycle.component';
import { NewdetailComponent } from './component/newdetail/newdetail.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'setting',component:SettingComponent},
      {path:'**',redirectTo:'welcome'}
    ]
  },
  {
    path:'form',component:FormComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'todelist',component:TodolistComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'news/newdetail',component:NewdetailComponent
  },
  {
    path:'transition',component:TransitionComponent
  },
  {
    path:'index',component:IndexComponent
  },
  {
    path:'lifecycle',component:LifecycleComponent
  },
  
  //匹配不到路由的时候加载的组件 或者跳转的路由
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
