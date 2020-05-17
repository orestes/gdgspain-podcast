import { Component, OnInit } from '@angular/core';

// Rx
import {Observable} from 'rxjs';

// Models
import {Episode} from '../../models/episode';

// Services
import {EpisodesService} from '../../services/episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.sass']
})
export class EpisodeListComponent implements OnInit {

  public episodes$: Observable<Episode[]>;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodes$ = this.episodesService.getAll();
  }

}
