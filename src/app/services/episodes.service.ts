import { Injectable } from '@angular/core';

// Rx
import {Observable, of} from 'rxjs';

// Models
import {Episode} from '../models/episode';

const fakeEpisode = {
  id: 's01e01',
  season: 1,
  episode: 1,
  title: 'First episode',
  description: 'Just a test',
  guests: [
    {
      id: 'john-doe',
      fullName: 'John Doe',
      links: {
        twitter: 'https://twitter.com/johndoe',
      },
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: 'jane-doe',
      fullName: 'Jane Doe',
      links: {
        twitter: 'https://twitter.com/janedoe',
      },
      profilePicture: 'https://randomuser.me/api/portraits/women/38.jpg',
    }
  ],
  notes: 'Hello world :)',
  released: new Date(2020, 1, 1, 20, 0),
};

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor() { }

  getAll(): Observable<Episode[]> {
    return of([fakeEpisode]);
  }

  getById(episodeId: string): Observable<Episode> {
    return of(fakeEpisode);
  }
}
