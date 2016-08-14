import {Component} from 'angular2/core';

@Component({
    selector: 'pm-app',
    template: '<div>{{pageTitle}}</div>'
})

export class AppComponent {

  pageTitle: string = 'creative design product management';
  
  
}

