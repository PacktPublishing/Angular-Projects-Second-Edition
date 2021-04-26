import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PoiActions from './poi.actions';
import { PoiEntity } from './poi.models';

export const POI_FEATURE_KEY = 'poi';

export interface State extends EntityState<PoiEntity> {
  selectedId?: string | number; // which Poi record has been selected
  loaded: boolean; // has the Poi list been loaded
  error?: string | null; // last known error (if any)
}

export interface PoiPartialState {
  readonly [POI_FEATURE_KEY]: State;
}

export const poiAdapter: EntityAdapter<PoiEntity> = createEntityAdapter<PoiEntity>();

export const initialState: State = poiAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const poiReducer = createReducer(
  initialState,
  on(PoiActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(PoiActions.loadPoiSuccess, (state, { poi }) =>
    poiAdapter.setAll(poi, { ...state, loaded: true })
  ),
  on(PoiActions.loadPoiFailure, (state, { error }) => ({ ...state, error })),
  on(PoiActions.selectPoi, (state, { poiId }) => ({ ...state, selectedId: poiId }))
);

export function reducer(state: State | undefined, action: Action) {
  return poiReducer(state, action);
}
