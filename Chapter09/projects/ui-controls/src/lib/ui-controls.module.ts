import { NgModule } from '@angular/core';
import { UiControlsComponent } from './ui-controls.component';
import { CardListComponent } from './card-list/card-list.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CopyButtonComponent } from './copy-button/copy-button.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    UiControlsComponent,
    CardListComponent,
    CopyButtonComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ClipboardModule
  ],
  exports: [
    UiControlsComponent,
    CardListComponent,
    CopyButtonComponent
  ]
})
export class UiControlsModule { }
