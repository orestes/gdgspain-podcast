import {Person} from './person';

export interface Episode {
  id: string; // s01e01
  season: number;
  episode: number;
  title: string;
  released: Date;
  description: string; // Short text
  notes: string; // HTML/Markdown
  guests: Person[];
}
