import {Component, OnInit, QueryList, ContentChildren, Input} from '@angular/core';
import {GalleryItemComponent} from './gallery-item.component';
import {MdDialog, MdDialogRef} from '@angular/material';
import {PicturePreviewDialog} from './picture-preview.dialog';


@Component({
  selector: 'gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css'],
  host: {'(window:keydown)': 'hotkeys($event)'},
})
export class GalleryContainerComponent implements OnInit {
  @Input('colHeight') colHeight;
  @Input('colWidth') colWidth;
  @ContentChildren(GalleryItemComponent) _pictureItems: QueryList<GalleryItemComponent>;

  dialogRef: MdDialogRef<PicturePreviewDialog>;
  currpic;
  currIndex;

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {
    if(!this.colHeight) {
      this.colHeight = '200px';
    }

    if(!this.colWidth) {
      this.colWidth = 'l2 m4 s6';
    }
  }

  openDialog(picItem: GalleryItemComponent) {
    this.currpic = picItem;
    this.currIndex = this.findPicIndex();
    this.dialogRef = this.dialog.open(PicturePreviewDialog);
    this.dialogRef.componentInstance.imgUrl = picItem.src;
    this.dialogRef.componentInstance.descriptionComponent = picItem.descriptionModalItem;


    this.dialogRef.componentInstance.navigateLeft.subscribe(() => {
      this.navigateLeft();
    });
    this.dialogRef.componentInstance.navigateRight.subscribe(() => {
      this.navigateRight();
    });

    this.dialogRef.afterClosed().subscribe(() => {
      this.currpic = undefined;
      this.currIndex = undefined;
    });
  }

  private navigateRight() {
    if (this.currIndex < this._pictureItems.length - 1) {
      this.currIndex = this.currIndex + 1;
    }
    let result = this.findPicture();
    if (result) {
      this.currpic = result;
      this.dialogRef.componentInstance.imgUrl = result.src;
      this.dialogRef.componentInstance.descriptionComponent = this.currpic.descriptionModalItem;
    }
  }

  private navigateLeft() {
    if (this.currIndex > 0) {
      this.currIndex = this.currIndex - 1;
    }
    let result = this.findPicture();
    if (result) {
      this.currpic = result;
      this.dialogRef.componentInstance.imgUrl = result.src;
      this.dialogRef.componentInstance.descriptionComponent = this.currpic.descriptionModalItem;
    }
  }

  hotkeys(event) {
    if (event.keyCode == 37) {
      this.navigateLeft();
    } else if (event.keyCode == 39) {
      this.navigateRight();
    }
  }

  private findPicIndex() {
    let i;
    this._pictureItems.some((pic, index) => {
      if (pic == this.currpic) {
        i = index;
        return true;
      }
      return false;
    });
    return i;
  }

  private findPicture() {
    let result;
    this._pictureItems.find((pic, index) => {
      if (index == this.currIndex) {
        result = pic;
        return true;
      }
    });
    return result;
  }

}
