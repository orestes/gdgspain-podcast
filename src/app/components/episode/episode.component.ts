import {Component, Input, OnInit} from '@angular/core';
import {Episode} from '../../models/episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.sass']
})
export class EpisodeComponent implements OnInit {

  @Input() episode: Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
