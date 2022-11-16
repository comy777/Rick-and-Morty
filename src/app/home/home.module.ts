import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from '../components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InformationComponent } from '../components/information/information.component';
import { EpisodesPipe } from '../pipes/episodes.pipe';
import { ChapterComponent } from './pages/chapter/chapter.component'
import { LocationComponent } from './pages/location/location.component';
import { BtnComponent } from '../components/btn/btn.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NgxLoadingModule } from 'ngx-loading';
import { LocationsComponent } from './pages/locations/locations.component';


@NgModule({
  declarations: [
    HomeComponent, CardComponent, DetailsComponent, InformationComponent, EpisodesPipe,
    ChapterComponent, LocationComponent, BtnComponent, FavoritesComponent, LocationsComponent, LocationsComponent
  ],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule,
    NgxLoadingModule.forRoot({})]
})
export class HomeModule { }
