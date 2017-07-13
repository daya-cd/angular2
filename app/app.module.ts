import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent }  from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductListComponent } from "./products/product-list.component";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";


const appRoutes:Routes=[
    { path:'products',component:ProductListComponent},
    { path:'product/:id',component:ProductDetailComponent},
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
	imports: [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes,{enableTracing:true})
    ],
	declarations: [ AppComponent,ProductListComponent,ProductFilterPipe,StarComponent,ProductDetailComponent,WelcomeComponent],
	bootstrap: [ AppComponent ]
})
export class AppModule { }


