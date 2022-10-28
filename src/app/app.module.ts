import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HomeModule,
    CartModule,
    LoginModule,
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
