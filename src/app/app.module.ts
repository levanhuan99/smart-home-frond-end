import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page-layout/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionComponent } from './section/section.component';
import { LivingRoomComponent } from './home/living-room/living-room.component';
import { Bedroom1Component } from './home/bedroom1/bedroom1.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    SectionComponent,
    LivingRoomComponent,
    Bedroom1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
