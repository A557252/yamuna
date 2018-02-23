import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpModule } from '@angular/http';
import { InquiryService } from './services/InquiryService';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/main/search/search.component';
import { PackagesComponent } from './components/main/packages/packages.component';
import { PackageComponent } from './components/main/packages/package/package.component';
import { PackageDetailsComponent } from './components/main/packages/package/package-details/package-details.component';
import { OtherPackageComponent } from './components/main/other-package/other-package.component';
import { Broadcaster } from './utils/brodcaster';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MainComponent,
    SearchComponent,
    PackagesComponent,
    PackageComponent,
    PackageDetailsComponent,
    OtherPackageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ InquiryService, Broadcaster ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
