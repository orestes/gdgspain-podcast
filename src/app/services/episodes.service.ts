import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

// Rx
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

// Models
import {Episode} from '../models/episode';
import {mapEpisode, mapEpisodeList} from '../utils';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private db: AngularFirestore) { }

  getAll(): Observable<Episode[]> {
    return this.db.collection<Episode>('episodes').valueChanges()
      .pipe(
        map(mapEpisodeList),
        take(1)
      );
  }

  getById(episodeId: string): Observable<Episode> {
    return this.db.collection<Episode>('episodes').doc<Episode>(episodeId).valueChanges()
      .pipe(
        map(mapEpisode),
        take(1)
      );
  }
}
