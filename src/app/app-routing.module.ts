import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';
import {ShopComponent} from './core/components/shop/shop.component';
import {EditorialComponent} from './core/components/editorial/editorial.component';
import {CatalogComponent} from './core/components/catalog/catalog.component';
import {MovieDetailsComponent} from './shared/movie-details/movie-details.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {ProfileComponent} from './core/components/profile/profile.component';
import {AuthStatusGuard} from './core/guards/auth-status.guard';
import {LoginComponent} from './core/components/login/login.component';
import {NavBarGuard} from './core/guards/nav-bar.guard';
import {ProfileContinueMoviesComponent} from './core/components/profile/profile-continue-movies/profile-continue-movies.component';
import {ProfileFavoriteMoviesComponent} from './core/components/profile/profile-favorite-movies/profile-favorite-movies.component';
import {LoginPageGuard} from './core/guards/login-page.guard';
import {ProfilePageChildCompAccessGuard} from './core/guards/profile-page-child-comp-access.guard';
import {SignUpComponent} from './core/components/sign-up/sign-up.component';
import {ProfileMyMoviesComponent} from './core/components/profile/profile-my-movies/profile-my-movies.component';
import {MoviesComponent} from './shared/movies/movies.component';
import {EditorialDetailsComponent} from './core/components/editorial/editorial-details/editorial-details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'selection/:genre', component: MoviesComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'editorial/:id', component: EditorialDetailsComponent },
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
        path: 'my-movies',
        component: ProfileMyMoviesComponent
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
  {
    path: 'sign-up',
    component: SignUpComponent,
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
