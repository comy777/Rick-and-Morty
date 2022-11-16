import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FavoritesComponent } from './favorites/favorites.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'character/:id',
        component: DetailsComponent
      },
      {
        path: 'chapter/:id',
        component: ChapterComponent
      },
      {
        path: 'location/:id',
        component: LocationComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      },
      {
        path: 'favorites',
        component: FavoritesComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
