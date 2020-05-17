import {Component, Input, OnInit} from '@angular/core';

//
import {Person} from '../../models/person';

@Component({
  selector: 'app-episode-guest',
  templateUrl: './episode-guest.component.html',
  styleUrls: ['./episode-guest.component.sass']
})
export class EpisodeGuestComponent implements OnInit {

  @Input() guest: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
