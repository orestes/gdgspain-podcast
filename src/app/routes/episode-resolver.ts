import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

// Rx
import {Observable} from 'rxjs';

// models
import {Episode} from '../models/episode';
import {EpisodesService} from '../services/episodes.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<Episode> {

  constructor(private episodesService: EpisodesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Episode> {
    return this.episodesService.getById(route.params.episodeId);
  }
}
