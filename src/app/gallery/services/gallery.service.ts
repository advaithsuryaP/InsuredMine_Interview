import { Injectable } from '@angular/core';
import { Picsum } from '../models/picsum.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private picsums: Picsum[] = [
    {id: '1005', url: 'assets/images/persona_1.jpg', author: 'Matthew Weibe'},
    {id: '1006', url: 'assets/images/persona_2.jpg', author: 'Vladamir Kudinov'},
    {id: '1011', url: 'assets/images/persona_3.jpg', author: 'Roberto Nickson'},
    {id: '1012', url: 'assets/images/persona_4.jpg', author: 'Scott Webb'},
    {id: '1015', url: 'assets/images/nature_1.jpg', author: 'Alexey Topolyanskiy'},
    {id: '1036', url: 'assets/images/nature_2.jpg', author: 'Wolfgang Lutz'},
    {id: '1037', url: 'assets/images/nature_3.jpg', author: 'Jordan Mcqueen'},
    {id: '1039', url: 'assets/images/nature_4.jpg', author: 'Andrew Coelho'},
  ];
  constructor() { }

  getPicsumForTileOne() {
    return this.picsums.slice(0, 4);
  }

  getPicsumsForTileTwo() {
    return this.picsums.slice(4);
  }
}
