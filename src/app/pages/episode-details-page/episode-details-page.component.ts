import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// Rx
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

// Models
import {Episode} from '../../models/episode';

@Component({
  selector: 'app-episode-details-page',
  templateUrl: './episode-details-page.component.html',
  styleUrls: ['./episode-details-page.component.sass']
})
export class EpisodeDetailsPageComponent implements OnInit {

  public episode$: Observable<Episode>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.episode$ = this.route.data.pipe(pluck('episode'));
  }

}
