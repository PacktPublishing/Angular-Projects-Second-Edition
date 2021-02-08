import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Viewer } from 'cesium';
import { CesiumService } from '../cesium.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements AfterViewInit {

  @ViewChild('mapContainer') content: ElementRef;

  constructor(private cesiumService: CesiumService) { }

  ngAfterViewInit() {
    this.cesiumService.register(new Viewer(this.content.nativeElement));
    this.cesiumService.addPhotos();
  }

}
