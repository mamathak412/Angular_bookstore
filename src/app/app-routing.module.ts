import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/signin/signin.component';
import { DevopsComponent } from './book/devops/devops.component';
import { JenkinsComponent } from './book/jenkins/jenkins.component';
import { AwsComponent } from './book/aws/aws.component';

const routes: Routes = [
  {path : 'books', component: BookComponent},
  {path : 'user', component: UserComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'devops', component: DevopsComponent},
  {path : 'jenkins', component: JenkinsComponent},
  {path : 'aws', component: AwsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }