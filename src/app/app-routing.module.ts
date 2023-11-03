import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {redirectTo:'',path:'menu',pathMatch:'full'}, 
  {path:'',component:PageComponent},
  {path:'menu',component:MenuComponent}, 
  {path:'login',component:LoginComponent},
 {path:'signup',component:SignupComponent},
 {path:'home',component:HomeComponent},
 {path:'update/:id',component:UpdateComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
