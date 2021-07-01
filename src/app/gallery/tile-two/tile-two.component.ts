import { Component, OnInit } from '@angular/core';
import { Picsum } from '../models/picsum.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-tile-two',
  templateUrl: './tile-two.component.html',
  styleUrls: ['./tile-two.component.css']
})
export class TileTwoComponent implements OnInit {
  picsums!: Picsum[];
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.picsums = this.galleryService.getPicsumsForTileTwo();
  }

}
