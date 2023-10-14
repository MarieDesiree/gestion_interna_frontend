import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindasboardComponent } from './admindasboard/admindasboard.component';
import { ClientdasboardComponent } from './clientdasboard/clientdasboard.component';
import { DoorComponent } from './door/door.component';
import { AdminGuard } from './guard/admin.guard';
import { ClientGuard } from './guard/client.guard';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './login/login.component'; 
import { SigneComponent } from './signe/signe.component';
import { UsageComponent } from './usage/usage.component';
import { UnleashComponent } from './unleash/unleash.component';




const routes: Routes = [
  //, canActivate: [LoginGuard]
  { path: '', component: DoorComponent},
  { path: 'signeup', component: SigneComponent, canActivate: [LoginGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'clientdasboard', component: AdmindasboardComponent, canActivate: [ClientGuard]},
  { path: 'admindasboard', component: ClientdasboardComponent, canActivate: [AdminGuard]},
  {path: 'utilisation', component: UsageComponent, canActivate: [ClientGuard]},
  {path: 'unleash', component: UnleashComponent, canActivate: [ClientGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
