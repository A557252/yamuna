import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InquiryService } from './services/inquiryService';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/main/search/search.component';
import { PackagesComponent } from './components/main/packages/packages.component';
import { PackageComponent } from './components/main/packages/package/package.component';
import { PackageDetailsComponent } from './components/main/packages/package/package-details/package-details.component';
import { OtherPackageComponent } from './components/main/packages/other-package/other-package.component';
import { Broadcaster } from './utils/brodcaster';
import { UserService } from './services/UserService';
import { InquiriesComponent } from './components/main/inquiries/inquiries.component';
import { InquiryComponent } from './components/main/inquiries/inquiry/inquiry.component';
import { AuthGuardService } from './utils/authGuardService';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: MainComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }
];

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
    OtherPackageComponent,
    InquiriesComponent,
    InquiryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ InquiryService, Broadcaster, UserService, AuthGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
