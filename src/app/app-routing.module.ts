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
  {path : 'scripting', component:ScriptingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
