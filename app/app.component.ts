
import {Component} from 'angular2/core';

/* 
 Componet decorator
 Prefix for clarity
*/
@Component({
    selector: 'pm-app',
    template: '<div>{{pageTitle}}</div>'
})


//PascalCasing for class name

export class AppComponent {

  pageTitle: string = 'creative design product management';

  // camelCase with first letter lowercase - for data type
  
}

