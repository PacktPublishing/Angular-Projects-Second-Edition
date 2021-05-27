import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@packt/poi';
import { PoiListComponent } from './poi-list/poi-list.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    RouterModule.forChild([
      { path: '', component: VisitorComponent }
    ]),
    PoiModule,
    GoogleMapsModule,
    MatCardModule
  ],
  declarations: [VisitorComponent, PoiListComponent, MapComponent],
})
export class VisitorModule {}
