import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Components
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodeGuestComponent } from './components/episode-guest/episode-guest.component';

// Containers
import { EpisodeListComponent } from './containers/episode-list/episode-list.component';

// Pages
import { GuestsPageComponent } from './pages/guests-page/guests-page.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { EpisodeDetailsPageComponent } from './pages/episode-details-page/episode-details-page.component';
import { GuestListComponent } from './containers/guest-list/guest-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodeListComponent,
    EpisodeComponent,
    EpisodesPageComponent,
    EpisodeGuestComponent,
    EpisodeDetailsPageComponent,
    GuestsPageComponent,
    NotFoundPageComponent,
    GuestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
