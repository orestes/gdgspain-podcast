import {Episode} from './models/episode';

import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

export const mapEpisode = (e: Episode) => {
  return {...e, released: (e.released as Timestamp).toDate()};
}

export const mapEpisodeList = (list: Episode[]) => {
  return list.map(mapEpisode);
};
