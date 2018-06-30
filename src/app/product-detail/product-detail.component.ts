import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, ProductService,Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;

  comments:Comment[];

  constructor(
    private routeInfo:ActivatedRoute,
    private productService:ProductService
  ) { }

  ngOnInit() {
    //this.productTitle=this.routeInfo.snapshot.params["prodTitle"];  //参数拍照的形象传递
    let productId:number=this.routeInfo.snapshot.params["id"];
    this.product=this.productService.getProduct(productId);
    this.comments=this.productService.getCommentsForProductId(productId)
  }

}
