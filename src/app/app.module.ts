import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DecorationComponent } from './decoration/decoration.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { MarketComponent } from './market/market.component';
import { AccountAppComponent } from './account-app/account-app.component';
import { MessagesAppComponent } from './messages-app/messages-app.component';

import { FormsModule } from '@angular/forms';
import { customInterceptor } from './Services/custom.interceptor';
import { FilterPipe } from './filter.pipe';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { StudentUpdateComponent } from './student-update/student-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    HomePageComponent,
    DecorationComponent,
    ConfirmEmailComponent,
    NewPasswordComponent,
    MarketComponent,
    AccountAppComponent,
    MessagesAppComponent,
    FilterPipe,
    AddproductComponent,
    CategoryComponent,
    CartComponent,
    StudentUpdateComponent,
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([customInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
