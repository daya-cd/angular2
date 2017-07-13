import {Component} from '@angular/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from "./products/product.service";

/*
 Componet decorator
 Prefix for clarity
 */
@Component({
    selector: 'pm-app',
    template: ` <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div> 
     </div>`,
    providers: [ProductService]
})


//PascalCasing f or class name

export class AppComponent {

    pageTitle: string = 'creative design product management';

    // camelCase with   letter lowercase - for data type

}

