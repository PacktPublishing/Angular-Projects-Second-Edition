import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
})
export class CapturePage implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
  }

  openCamera() {
    this.photoService.takePhoto();
  }

}
