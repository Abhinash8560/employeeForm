import{Routes,RouterModule} from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import{EditemployeeComponent} from './todos/editemployee/editemployee.component';
import{EditproductComponent} from './todos/editproduct/editproduct.component';
import{ForDemosComponent} from './for-demos/for-demos.component';
import { ParentComponent } from './parent/parent.component';
import {EmployeeComponent}  from './employee/employee.component';
//import { LoginComponent } from './login/Login.component';
import { SignupComponent } from   './signup/signup.component';
import {TaskDisplayComponent } from './task-display/task-display.component';
import {AddtaskComponent } from './task-display/addtask/addtask.component';
import {ProductDisplayComponent } from './product-display/product-display.component';
import {AddproductComponent } from './product-display/addproduct/addproduct.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserguardService } from "./userguard.service";
import { AngularMaterialDemoComponent } from "./angular-material-demo/angular-material-demo.component";

import{HeaderComponent} from "./header/header.component";
const arr: Routes=[
{path: 'demo', component: DemoComponent},
 // {  path: 'login', component: LoginComponent },
  {  path: 'signup', component: SignupComponent},
  {  path:'editemployee/:Id1', component:EditemployeeComponent },
  {  path:'editproduct/:Id2', component:EditproductComponent},
  { path: 'fordemo',canActivate:[UserguardService], component: ForDemosComponent},
  { path: 'product1', component: ParentComponent},
  {path:'empadd',component:EmployeeComponent },
   {path: 'task',component: TaskDisplayComponent },
   {path: 'addtask',component: AddtaskComponent },
   {path: 'product',component: ProductDisplayComponent },
   {path: 'addproduct',component: AddproductComponent },
   {path:'ngdemo',component:AngularMaterialDemoComponent},
   {
     path: 'user',
     canActivate:[UserguardService],
   loadChildren: () =>
      import('./user-display/user.module').then((x) => x.UserModule),
  },
  {
    path: 'todos',
    canLoad: [UserguardService],
  loadChildren: () =>
  import('./todos/todos.module').then((x) => x.TodosModule),
 },

  { path: 'pagenotfound',component: PagenotfoundComponent },
  {  path: '**', redirectTo:'pagenotfound' },
];

      export const arrRouting = RouterModule.forRoot(arr);



