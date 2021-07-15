import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page-layout/home-page.component";
const routes: Routes = [
  {path:'home',component:HomePageComponent,
   children:[
      {path:'',loadChildren: () =>import('./home/home-routing.module').then(m=>m.HomeRoutingModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
