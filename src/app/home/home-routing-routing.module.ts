import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedroomComponent } from './bedroom/bedroom.component';
import { Bedroom1Component } from './bedroom1/bedroom1.component';
import { LivingRoomComponent } from './living-room/living-room.component';

const routes: Routes = [
  {
    path: 'bedroom', component: BedroomComponent
  },
  {
    path: 'living-room', component: LivingRoomComponent
  },
  {
    path: 'bedroom1', component: Bedroom1Component
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingRoutingModule { }
