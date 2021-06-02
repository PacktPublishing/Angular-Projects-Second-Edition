import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Viewer } from 'cesium';
import { CesiumService } from '../cesium.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, AfterViewInit {

  @ViewChild('mapContainer') content: ElementRef;

  constructor(private cesiumService: CesiumService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.cesiumService.register(new Viewer(this.content.nativeElement));
    this.cesiumService.addPhotos();
  }

}
