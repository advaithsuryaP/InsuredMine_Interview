import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { GalleryComponent } from './gallery/gallery.component';
import { TileOneComponent } from './tile-one/tile-one.component';
import { TileTwoComponent } from './tile-two/tile-two.component';
import { AuthGuard } from '../auth/services/auth.guard';

@NgModule({
  declarations: [
    GalleryComponent,
    TileOneComponent,
    TileTwoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: GalleryComponent, canActivate: [AuthGuard]}
    ])
  ]
})
export class GalleryModule { }
