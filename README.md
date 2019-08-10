# Angularapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Summary
The objective of this project is apply some of the best practices of architecture and features with angular framework for my own projects.
It will be my sandbox to provide my knowledge with Angular.

## Libraries

### Angular material
Don`t reinvent the wheel, use material to provide a good UI

https://material.angular.io/guide/getting-started
```
ng add @angular/material

### 
We're using Json Placeholder for mock rest api

https://jsonplaceholder.typicode.com/
```

## The practices

### Architecture
Provide your features inside de features folder creating modules. Each module has its own components, services and routing.

### Paths in tsconfig.json
It's important to have a good and cleanup code. For the imports use the tsconfig.json paths

tsconfig.json
```
"paths": {
  "@app/*": ["./src/app/*"]
  ,"@env/*": ["./src/environments/*"]
},
```

Some component import
```
import { MainLayoutComponent } from "@app/shared/layout/main-layout/main-layout.component";
```

### Angular cli
Use angular cli to generate your components, services, etc.
```
ng generate component features/account/account-list
```

### Lazy load modules
Separe modules and import them in the main routing module to use only when needed.

## References
* 6 Best Practices & Pro Tips when using Angular CLI by Tomas Trajan

https://medium.com/@tomastrajan/6-best-practices-pro-tips-for-angular-cli-better-developer-experience-7b328bc9db81