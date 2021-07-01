import { Injectable } from '@angular/core';
import { Picsum } from '../models/picsum.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private picsums: Picsum[] = [
    {id: '1005', url: 'https://picsum.photos/id/1005/300/300', author: 'Matthew Weibe'},
    {id: '1006', url: 'https://picsum.photos/id/1006/300/300', author: 'Vladamir Kudinov'},
    {id: '1011', url: 'https://picsum.photos/id/1011/300/300', author: 'Roberto Nickson'},
    {id: '1012', url: 'https://picsum.photos/id/1012/300/300', author: 'Scott Webb'},
    {id: '1015', url: 'https://picsum.photos/id/1015/300/300', author: 'Alexey Topolyanskiy'},
    {id: '1036', url: 'https://picsum.photos/id/1036/300/300', author: 'Wolfgang Lutz'},
    {id: '1037', url: 'https://picsum.photos/id/1037/300/300', author: 'Jordan Mcqueen'},
    {id: '1039', url: 'https://picsum.photos/id/1039/300/300', author: 'Andrew Coelho'},
  ];
  constructor() { }

  getPicsumForTileOne() {
    return this.picsums.slice(0, 4);
  }

  getPicsumsForTileTwo() {
    return this.picsums.slice(4);
  }
}
