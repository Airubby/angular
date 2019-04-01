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

  newRating:number=5;
  newComment:string="";
  isCommentHidden=true;
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

  addComment(){
    let comment=new Comment(0,this.product.id,new Date().toISOString(),"someone",this.newRating,this.newComment);
    this.comments.unshift(comment);

    //从新计算星级
    //reduce循环comments，第一次传入的sum为0，comment是comments数组中的第一个元素，
    //第二次循环时sum就为sum+comment.rating，最后的sum就是所有星级的和
    let sum=this.comments.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating=sum/this.comments.length;

    this.newComment=null;
    this.newRating=5;
    this.isCommentHidden=true;
  }

}
