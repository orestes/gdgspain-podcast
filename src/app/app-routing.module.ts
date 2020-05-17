import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Guards
import {EpisodeResolver} from './routes/episode-resolver';

// Pages
import {GuestsPageComponent} from './pages/guests-page/guests-page.component';
import {EpisodesPageComponent} from './pages/episodes-page/episodes-page.component';
import {EpisodeDetailsPageComponent} from './pages/episode-details-page/episode-details-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'episodes'
  },
  {
    path: 'episodes',
    pathMatch: 'full',
    component: EpisodesPageComponent
  },
  {
    path: 'episodes/:episodeId',
    pathMatch: 'full',
    resolve: {
      episode: EpisodeResolver,
    },
    component: EpisodeDetailsPageComponent
  },
  {
    path: 'guests',
    pathMatch: 'full',
    component: GuestsPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
