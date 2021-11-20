import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from '../dashboard/dashboard.component';
import { BedroomDetailComponent } from './dashboard/bedroom-detail/bedroom-detail.component';

import { BedroomComponent } from './dashboard/bedroom.component';
import { Bedroom1Component } from './dashboard/bedroom1/bedroom1.component';
import { KitchenComponent } from './dashboard/kitchen/kitchen.component';
import { LivingRoomComponent } from './dashboard/living-room/living-room.component';

const routes: Routes = [
  { path: '', component: BedroomComponent},
  {path:'bedroom',component:BedroomDetailComponent},
  {path:'living-room',component:LivingRoomComponent},
  {path: 'kitchen', component: KitchenComponent},
  {path: 'bedroom1', component: Bedroom1Component}
  // {path:'dasboard',component:DashboardComponent}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
