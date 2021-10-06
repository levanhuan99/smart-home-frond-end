import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from '../dashboard/dashboard.component';
import { BedroomDetailComponent } from './dashboard/bedroom-detail/bedroom-detail.component';

import { BedroomComponent } from './dashboard/bedroom.component';

const routes: Routes = [
  { path: '', component: BedroomComponent},
  {path:'bedroom',component:BedroomDetailComponent},
  // {path:'dasboard',component:DashboardComponent}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
