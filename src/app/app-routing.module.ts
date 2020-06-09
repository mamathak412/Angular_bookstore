import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { DevopsComponent } from './book/devops/devops.component';
import { JenkinsComponent } from './book/jenkins/jenkins.component';
import { AwsComponent } from './book/aws/aws.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { JavaComponent } from './book/java/java.component';
import { LinuxComponent } from './book/linux/linux.component';
import { MavenComponent } from './book/maven/maven.component';
import { OthersComponent } from './book/others/others.component';
import { ScriptingComponent } from './book/scripting/scripting.component';

import { DocumentComponent } from './document/document.component';
import { DevopsDocComponent } from './document/devopsdoc/devopsdoc.component';
import { JenkinsDocComponent } from './document/jenkinsdoc/jenkinsdoc.component';
import { AwsDocComponent } from './document/awsdoc/awsdoc.component';
import { AddDocumentComponent } from './document/adddocument/adddocument.component';
import { JavaDocComponent } from './document/javadoc/javadoc.component';
import { LinuxDocComponent } from './document/linuxdoc/linuxdoc.component';
import { MavenDocComponent } from './document/mavendoc/mavendoc.component';
import { OthersDocComponent } from './document/othersdoc/othersdoc.component';
import { ScriptingDocComponent } from './document/scriptingdoc/scriptingdoc.component';

const routes: Routes = [
  {path : 'books', component: BookComponent},
  {path : 'user', component: UserComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'devops', component: DevopsComponent},
  {path : 'jenkins', component: JenkinsComponent},
  {path : 'aws', component: AwsComponent},
  {path : 'addbook', component: AddbookComponent},
  {path : 'java', component: JavaComponent},
  {path : 'linux', component: LinuxComponent},
  {path : 'maven', component:MavenComponent},
  {path : 'others', component:OthersComponent},
  {path : 'scripting', component:ScriptingComponent},

  {path : 'document', component:DocumentComponent},
  {path : 'devopsdoc', component: DevopsDocComponent},
  {path : 'jenkinsdoc', component: JenkinsDocComponent},
  {path : 'awsdoc', component: AwsDocComponent},
  {path : 'adddoc', component: AddDocumentComponent},
  {path : 'javadoc', component: JavaDocComponent},
  {path : 'linuxdoc', component: LinuxDocComponent},
  {path : 'mavendoc', component:MavenDocComponent},
  {path : 'othersdoc', component:OthersDocComponent},
  {path : 'scriptingdoc', component:ScriptingDocComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
