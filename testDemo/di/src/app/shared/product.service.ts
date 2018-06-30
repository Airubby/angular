import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service'

//声明了Injectable服务，其它服务可以注册到ProductService中的constructor函数来，ProductService服务是否可以注册到其它服务是看其是否在app.modele中的providers: [ProductService],
//组件中有@Component也可以注册服务进来
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public logger:LoggerService) { }
  getProduct(): Product {
    this.logger.log("getProduct方法被调用");
    return new Product(0, "iPhone7", 5899, "最新款苹果手机");
  }

}

export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){}
}
