import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPoi from './+state/poi.reducer';
import { PoiEffects } from './+state/poi.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPoi.POI_FEATURE_KEY, fromPoi.reducer),
    EffectsModule.forFeature([PoiEffects]),
  ],
})
export class PoiModule {}
