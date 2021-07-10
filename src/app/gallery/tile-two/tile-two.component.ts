import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDetailComponent } from '../gallery-detail/gallery-detail.component';
import { Picsum } from '../models/picsum.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-tile-two',
  templateUrl: './tile-two.component.html',
  styleUrls: ['./tile-two.component.css']
})
export class TileTwoComponent implements OnInit {
  picsums!: Picsum[];
  constructor(
    private galleryService: GalleryService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.picsums = this.galleryService.getPicsumsForTileTwo();
  }

  openDetail(picsum: Picsum) {
    this.dialog.open(GalleryDetailComponent, {
      data: picsum,
      height: '500px',
      width: '450px'
    });
  }

}
