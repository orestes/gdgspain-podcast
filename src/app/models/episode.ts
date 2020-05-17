import {Person} from './person';

import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

export interface Episode {
  id: string; // s01e01
  season: number;
  episode: number;
  title: string;
  released: Date|Timestamp;
  description: string; // Short text
  notes: string; // HTML/Markdown
  guests: Person[];
}
