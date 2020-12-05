import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';
import { ContinueViewingComponent } from './core/components/home/continue-viewing/continue-viewing.component';
import { CardComponent } from './shared/cards/card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { CarouselComponent } from './core/components/home/carousel/carousel.component';
import { CarouselCardComponent } from './shared/cards/carousel-card/carousel-card.component';
import { EditorialBoxComponent } from './core/components/home/editorial-box/editorial-box.component';
import { EditorialsListComponent } from './core/components/home/editorials-list/editorials-list.component';
import { ConverternumberPipe } from './core/pipes/converternumber.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShopComponent } from './core/components/shop/shop.component';
import { DiscountvaluePipe } from './core/pipes/discountvalue.pipe';
import { EditorialComponent } from './core/components/editorial/editorial.component';
import { EditorialCardComponent } from './shared/cards/editorial-card/editorial-card.component';
import { CatalogComponent } from './core/components/catalog/catalog.component';
import {MovieService} from './core/services/movie.service';
import {ContinueMovieService} from './core/services/continue-movie.service';
import {EditorialBoxService} from './core/services/editorial-box.service';
import {EditorialListService} from './core/services/editorial-list.service';
import {EditorialListCardService} from './core/services/editorial-list-card.service';
import {LoggerService} from './core/services/logger.service';
import { MovieDetailsComponent } from './shared/movie-details/movie-details.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import {AuthService} from './core/services/auth.service';
import {AuthStatusGuard} from './core/guards/auth-status.guard';
import {MatChipsModule} from "@angular/material/chips";
import { LoginComponent } from './core/components/login/login.component';
import {UserService} from "./core/services/user.service";
import {NavbarService} from "./core/services/navbar.service";
import {NavBarGuard} from "./core/guards/nav-bar.guard";
import { ProfileContinueMoviesComponent } from './core/components/profile/profile-continue-movies/profile-continue-movies.component';
import { ProfileFavoriteMoviesComponent } from './core/components/profile/profile-favorite-movies/profile-favorite-movies.component';
import {LoginPageGuard} from './core/guards/login-page.guard';
import {ProfilePageChildCompAccessGuard} from './core/guards/profile-page-child-comp-access.guard';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import { ProfileMyMoviesComponent } from './core/components/profile/profile-my-movies/profile-my-movies.component';
import { FirstCharToUppercasePipe } from './core/pipes/first-char-to-uppercase.pipe';
import { EditorialsListCardComponent } from './shared/cards/editorials-list-card/editorials-list-card.component';
import { MoviesComponent } from './shared/movies/movies.component';

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
    ProfileFavoriteMoviesComponent,
    SignUpComponent,
    ProfileMyMoviesComponent,
    FirstCharToUppercasePipe,
    EditorialsListCardComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatChipsModule,
    ReactiveFormsModule,
    HttpClientModule
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
