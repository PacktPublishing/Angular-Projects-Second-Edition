import { createAction, props } from '@ngrx/store';
import { PoiEntity } from './poi.models';

export const init = createAction('[Poi Page] Init');

export const loadPoiSuccess = createAction(
  '[Poi/API] Load Poi Success',
  props<{ poi: PoiEntity[] }>()
);

export const loadPoiFailure = createAction(
  '[Poi/API] Load Poi Failure',
  props<{ error: any }>()
);
