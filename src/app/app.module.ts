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
import { EditorialsListComponent } from './home/editorials-list/editorials-list.component';
import { ConverternumberPipe } from './pipes/converternumber.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { DiscountvaluePipe } from './pipes/discountvalue.pipe';
import { EditorialComponent } from './editorial/editorial.component';
import { EditorialCardComponent } from './editorial/editorial-card/editorial-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import {MovieService} from './services/movie.service';
import {ContinueMovieService} from './services/continue-movie.service';
import {EditorialBoxService} from './services/editorial-box.service';
import {EditorialListService} from './services/editorial-list.service';
import {EditorialListCardService} from './services/editorial-list-card.service';
import {LoggerService} from './services/logger.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthService} from './services/auth.service';
import {AuthStatusGuard} from './guards/auth-status.guard';
import {MatChipsModule} from "@angular/material/chips";
import { LoginComponent } from './login/login.component';
import {UserService} from "./services/user.service";
import {NavbarService} from "./services/navbar.service";
import {NavBarGuard} from "./guards/nav-bar.guard";
import { ProfileContinueMoviesComponent } from './profile/profile-continue-movies/profile-continue-movies.component';
import { ProfileFavoriteMoviesComponent } from './profile/profile-favorite-movies/profile-favorite-movies.component';
import {LoginPageGuard} from './guards/login-page.guard';
import {ProfilePageChildCompAccessGuard} from './guards/profile-page-child-comp-access.guard';

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
    EditorialsListComponent,
    ConverternumberPipe,
    ShopComponent,
    DiscountvaluePipe,
    EditorialComponent,
    EditorialCardComponent,
    CatalogComponent,
    MovieDetailsComponent,
    ErrorPageComponent,
    ProfileComponent,
    LoginComponent,
    ProfileContinueMoviesComponent,
    ProfileFavoriteMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieService,
    ContinueMovieService,
    EditorialBoxService,
    EditorialListService,
    EditorialListCardService,
    LoggerService,
    AuthService,
    UserService,
    NavbarService,
    AuthStatusGuard,
    NavBarGuard,
    LoginPageGuard,
    ProfilePageChildCompAccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
