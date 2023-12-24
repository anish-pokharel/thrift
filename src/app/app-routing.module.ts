import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PractiseComponent } from './practise/practise.component';
import { ChildComponent } from './child/child.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ 
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'signup', component:SignupPageComponent
  },
  {
    path:'login', component:LoginPageComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'dashboard', component:DashboardComponent,
    // canActivate:[authGuard]
  },
  {
    path:'work', component:PractiseComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'child', component:ChildComponent
  },
  {
    path:'product/:productId', component:ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
