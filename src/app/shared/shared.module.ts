import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlImagePipe } from './pipes/url-image.pipe';
import { NicknamePipe } from './pipes/nickname.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { MatDialogModule } from '@angular/material/dialog';

import { ImageCropperModule } from 'ngx-image-cropper';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [UrlImagePipe, NicknamePipe],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    MatDialogModule,
    NzButtonModule,
  ],
  exports: [ReactiveFormsModule, FormsModule, UrlImagePipe, NicknamePipe],
})
export class SharedModule {}
