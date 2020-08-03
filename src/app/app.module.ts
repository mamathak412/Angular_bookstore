import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

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

import { DocumentComponent } from './document/document.component';
import { DevopsDocComponent } from './document/devopsdoc/devopsdoc.component';
import { JenkinsDocComponent } from './document/jenkinsdoc/jenkinsdoc.component';
import { AwsDocComponent } from './document/awsdoc/awsdoc.component';
import { AddDocumentComponent } from './document/adddocument/adddocument.component';
import { ScriptingDocComponent } from './document/scriptingdoc/scriptingdoc.component';
import { LinuxDocComponent } from './document/linuxdoc/linuxdoc.component';
import { JavaDocComponent } from './document/javadoc/javadoc.component';
import { MavenDocComponent } from './document/mavendoc/mavendoc.component';
import { OthersDocComponent } from './document/othersdoc/othersdoc.component';
import { VideosComponent } from './videos/videos.component';
import { QueriesComponent } from './queries/queries.component';
import { AddvideoComponent } from './videos/addvideo/addvideo.component';
import { AwsvideoComponent } from './videos/awsvideo/awsvideo.component';
import { DevopsvideoComponent } from './videos/devopsvideo/devopsvideo.component';
import { JavavideoComponent } from './videos/javavideo/javavideo.component';
import { JenkinsvideoComponent } from './videos/jenkinsvideo/jenkinsvideo.component';
import { LinuxvideoComponent } from './videos/linuxvideo/linuxvideo.component';
import { MavenvideoComponent } from './videos/mavenvideo/mavenvideo.component';
import { OthersvideoComponent } from './videos/othersvideo/othersvideo.component';
import { ScriptingvideoComponent } from './videos/scriptingvideo/scriptingvideo.component';
import { AddqueriesComponent } from './queries/addqueries/addqueries.component';
import { AwsqueriesComponent } from './queries/awsqueries/awsqueries.component';
import { DevopsqueriesComponent } from './queries/devopsqueries/devopsqueries.component';
import { JavaqueriesComponent } from './queries/javaqueries/javaqueries.component';
import { JenkinsqueriesComponent } from './queries/jenkinsqueries/jenkinsqueries.component';
import { LinuxqueriesComponent } from './queries/linuxqueries/linuxqueries.component';
import { MavenqueriesComponent } from './queries/mavenqueries/mavenqueries.component';
import { OthersqueriesComponent } from './queries/othersqueries/othersqueries.component';
import { ScriptingqueriesComponent } from './queries/scriptingqueries/scriptingqueries.component';
import { TwitterComponent } from './twitter/twitter.component';

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
    OthersComponent,
    DocumentComponent,
    DevopsDocComponent,
    JenkinsDocComponent,
    AwsDocComponent,
    AddDocumentComponent,
    ScriptingDocComponent,
    LinuxDocComponent,
    JavaDocComponent,
    MavenDocComponent,
    OthersDocComponent,
    VideosComponent,
    QueriesComponent,
    AddvideoComponent,
    AwsvideoComponent,
    DevopsvideoComponent,
    JavavideoComponent,
    JenkinsvideoComponent,
    LinuxvideoComponent,
    MavenvideoComponent,
    OthersvideoComponent,
    ScriptingvideoComponent,
    AddqueriesComponent,
    AwsqueriesComponent,
    DevopsqueriesComponent,
    JavaqueriesComponent,
    JenkinsqueriesComponent,
    LinuxqueriesComponent,
    MavenqueriesComponent,
    OthersqueriesComponent,
    ScriptingqueriesComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
