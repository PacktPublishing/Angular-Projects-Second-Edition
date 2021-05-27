import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@packt/poi';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  poi$ = this.store.select(PoiSelectors.getSelected);
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  showInfo(marker: MapMarker, poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({ poiId }));
    this.info?.open(marker);
  }

}
