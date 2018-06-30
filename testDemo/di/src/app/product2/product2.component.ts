import { Component, OnInit, Injector } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import { OtherPproductService } from '../shared/other-pproduct.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // //局部注册只有本组件及子组件可以用
  // providers:[{
  //   provide:ProductService,useClass:OtherPproductService
  // }]
  //如果不这样写，那app.module中注册服务就应该改写


})
export class Product2Component implements OnInit {

  product: Product;

  constructor(private productService:ProductService) { }
  //一般不用下面的方法注册,
  // private productService:ProductService
  // constructor(private injector:Injector) {
  //   this.productService=injector.get(ProductService)
  // }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
