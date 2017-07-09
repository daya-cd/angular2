
import { Component } from '@angular/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from "./products/product.service";

/*
 Componet decorator
 Prefix for clarity
*/
@Component({
    selector: 'pm-app',
    template:
    `<div>
    <h1>{{pageTitle}}</h1> 
    <pm-products></pm-products>
    </div>`,
    providers:[ProductService]
})


//PascalCasing f or class name

export class AppComponent {

  pageTitle: string = 'creative design product management';

  // camelCase with   letter lowercase - for data type

}

