import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page-layout/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionComponent } from './section/section.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { LivingRoomComponent } from './home/dashboard/living-room/living-room.component';
import { KitchenComponent } from './home/dashboard/kitchen/kitchen.component';
import { Bedroom1Component } from './home/dashboard/bedroom1/bedroom1.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SectionComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    LivingRoomComponent,
    KitchenComponent,
    Bedroom1Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
