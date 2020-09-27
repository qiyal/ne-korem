import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContinueViewingComponent } from './home/continue-viewing/continue-viewing.component';
import { CardComponent } from './card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { EditorialBoxComponent } from './home/editorial-box/editorial-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContinueViewingComponent,
    CardComponent,
    CarouselComponent,
    CarouselCardComponent,
    EditorialBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
