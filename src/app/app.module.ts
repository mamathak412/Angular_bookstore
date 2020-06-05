import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { DevopsComponent } from './book/devops/devops.component';
import { JenkinsComponent } from './book/jenkins/jenkins.component';
import { AwsComponent } from './book/aws/aws.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    UserComponent,
    SigninComponent,
    DevopsComponent,
    JenkinsComponent,
    AwsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
