import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/landing/landing.component';



const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'databinding', component: DatabindingComponent },
  // { path: '**', component: PagenotfoundComponent },
  { path: 'homeModule-home', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
  //lazy loading concept 
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
