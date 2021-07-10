import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Picsum } from '../models/picsum.model';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Picsum ) { }

  ngOnInit(): void {
  }

}
