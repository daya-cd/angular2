# Angular2 tutorial from pluralsight
_______________________________________

> Angular 2 application is set of components.

Angular 2 comes in three language.
 1. Type script.
 2. Javascript.
 3. Dart.
 
> We use type script. Due to more resources and performance.

Angular is modular = angular core + angular animate + angular http + angular router

we can import in loader of the application like eg)

``` import { Component }  from 'angular2/core' ```



## Component

 Component = ** Template + Class + Meta data **

 
  ### Template

     * view layout
     * created with html
     * including binding and directives

  ### Class (Properites+Methods)

    * Code supprting the view(logic)
    * Created with type script
    * Propertie: data
    * Methods: logic

  ### Metadata

    * Extra data for angular
    * Defined with decorator.


## Notes:

What is Typings ?

> AFAIK this allows you to use JS libraries like they had type annotations like fully typed TypeScript code. If they are provided for a JS library you get proper autocompletion support and lint checks.

What is decorator ?

> A function that adds metadata to a class its memebers, or its method arguments.
> prefixed with ** @. **
> Angular provide built in decoratores. eg) @Component() 


