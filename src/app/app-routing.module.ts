import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {EditorialComponent} from './editorial/editorial.component';
import {CatalogComponent} from './catalog/catalog.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
