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






@NgModule({
  declarations: [
    AppComponent,
    CarrouselComponent,
    HeaderComponent,
    BannerComponent,
    PropbarComponent,
  
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
