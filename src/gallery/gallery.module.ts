import {CommonModule} from '@angular/common';
import {MdDialogModule, MdIconModule, MdButtonModule, MdCoreModule} from '@angular/material';
import {PicturePreviewDialog} from './picture-preview.dialog';
import {GalleryItemComponent} from './gallery-item.component';
import {GalleryContainerComponent} from './gallery-container.component';
import {GalleryItemDescriptionComponent} from './gallery-item-description.component';
import {GaleryItemDescriptionBodyComponent} from './gallery-item-description-body.component';
import {GalleryItemModalDescriptionComponent} from './gallery-item-modal-description.component';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
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
})
export class NgGalleryModule {
}