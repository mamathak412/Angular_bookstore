import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { DevopsComponent } from './book/devops/devops.component';
import { JenkinsComponent } from './book/jenkins/jenkins.component';
import { AwsComponent } from './book/aws/aws.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { ScriptingComponent } from './book/scripting/scripting.component';
import { LinuxComponent } from './book/linux/linux.component';
import { JavaComponent } from './book/java/java.component';
import { MavenComponent } from './book/maven/maven.component';
import { OthersComponent } from './book/others/others.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    UserComponent,
    SigninComponent,
    DevopsComponent,
    JenkinsComponent,
    AwsComponent,
    AddbookComponent,
    ScriptingComponent,
    LinuxComponent,
    JavaComponent,
    MavenComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
