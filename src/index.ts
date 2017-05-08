import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdIconModule, MdButtonModule, MdGridListModule, MdDialogModule, MdCoreModule} from '@angular/material';
import {PicturePreviewDialog} from './gallery/picture-preview.dialog';
import {GalleryContainerComponent} from './gallery/gallery-container.component';
import {GalleryItemComponent} from './gallery/gallery-item.component';
import {GalleryItemDescriptionComponent} from './gallery/gallery-item-description.component';
import {GalleryItemModalDescriptionComponent} from './gallery/gallery-item-modal-description.component';
import {GaleryItemDescriptionBodyComponent} from './gallery/gallery-item-description-body.component';

export * from './gallery/picture-preview.dialog';
export * from './gallery/gallery-container.component';
export * from './gallery/gallery-item.component';
export * from './gallery/gallery-item-description.component';
export * from './gallery/gallery-item-modal-description.component';
export * from './gallery/gallery-item-description-body.component';

@NgModule({
  imports: [
    CommonModule,
    MdGridListModule,
    MdDialogModule,
    MdButtonModule,
    MdIconModule,
    MdCoreModule
  ],
  declarations: [
    PicturePreviewDialog,
    GalleryContainerComponent,
    GalleryItemComponent,
    GalleryItemDescriptionComponent,
    GaleryItemDescriptionBodyComponent,
    GalleryItemModalDescriptionComponent
  ],
  exports: [GalleryItemComponent, GalleryContainerComponent, GalleryItemDescriptionComponent, GaleryItemDescriptionBodyComponent, GalleryItemModalDescriptionComponent],
  entryComponents: [PicturePreviewDialog]
})
export class NgGalleryModule {
  static forRoot(){
    return {
      ngModule: NgGalleryModule,
    };
  }
}
