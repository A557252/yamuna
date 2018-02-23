import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookingInquiryComponent } from './booking-inquiry/booking-inquiry.component';

import { HttpModule } from '@angular/http';
import { InquiryService } from './Services/InquiryService';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookingInquiryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ InquiryService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
