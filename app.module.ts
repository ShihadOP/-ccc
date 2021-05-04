import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';

const myPath:Routes=[
  {
    path:"home", component:HomeComponent,
  },
  {
    path:"about", component:AboutComponent
  },  {
    path:"", component:HomeComponent
  },  {
    path:"client/:id", component:ClientComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myPath)
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
