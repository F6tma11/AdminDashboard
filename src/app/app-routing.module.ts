import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { MarketComponent } from './market/market.component';
import { AccountAppComponent } from './account-app/account-app.component';
import { MessagesAppComponent } from './messages-app/messages-app.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { StudentUpdateComponent } from './student-update/student-update.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'confirmEmail',component:ConfirmEmailComponent},
  {path:'newPassword',component:NewPasswordComponent},
  {path:'home',component:HomePageComponent},
  {path:'market',component:MarketComponent},
  {path:'account',component:AccountAppComponent},
  {path:'message',component:MessagesAppComponent},
  {path:'carts',component:CartComponent},
  {path:'category',component:CategoryComponent},
  {path:'product/:id/update',component:StudentUpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
