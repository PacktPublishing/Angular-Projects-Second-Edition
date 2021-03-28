import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  poi$ = this.store.select(PoiSelectors.getSelected);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
