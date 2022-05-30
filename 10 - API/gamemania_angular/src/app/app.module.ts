import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { PropbarComponent } from './components/propbar/propbar.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    HeaderComponent,
    BannerComponent,
    PropbarComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
