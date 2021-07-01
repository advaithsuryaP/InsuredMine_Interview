import { Component, OnInit } from '@angular/core';
import { Picsum } from '../models/picsum.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-tile-one',
  templateUrl: './tile-one.component.html',
  styleUrls: ['./tile-one.component.css']
})
export class TileOneComponent implements OnInit {
  picsums!: Picsum[];
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.picsums = this.galleryService.getPicsumForTileOne();
  }

}
