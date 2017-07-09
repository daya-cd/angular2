import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import {ProductService} from "./product.service";

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage:string;

    //type of variables that we do not know when we are writing an application
    products: IProduct[];

    constructor(private _productService:ProductService)
    {
       // this._productService
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    /* using onInit - life cycle hooks*/
    ngOnInit(): void {
        console.log('In OnInit- life cycle hooks');
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void
    {
        this.pageTitle='Product List:'+message;
    }


}