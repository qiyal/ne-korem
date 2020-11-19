import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {EditorialComponent} from './editorial/editorial.component';
import {CatalogComponent} from './catalog/catalog.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthStatusGuard} from './guards/auth-status.guard';
import {LoginComponent} from "./login/login.component";
import {NavBarGuard} from "./guards/nav-bar.guard";
import {ProfileContinueMoviesComponent} from './profile/profile-continue-movies/profile-continue-movies.component';
import {ProfileFavoriteMoviesComponent} from './profile/profile-favorite-movies/profile-favorite-movies.component';
import {LoginPageGuard} from './guards/login-page.guard';
import {ProfilePageChildCompAccessGuard} from './guards/profile-page-child-comp-access.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'catalog', component: CatalogComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthStatusGuard],
    canActivateChild: [ProfilePageChildCompAccessGuard],
    children: [
      {
        path: '',
        component: ProfileContinueMoviesComponent,
      },
      {
        path: 'my-favorite-movies',
        component: ProfileFavoriteMoviesComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginPageGuard],
    canDeactivate: [NavBarGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
