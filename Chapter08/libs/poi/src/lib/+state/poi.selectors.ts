import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  POI_FEATURE_KEY,
  State,
  PoiPartialState,
  poiAdapter,
} from './poi.reducer';

// Lookup the 'Poi' feature state managed by NgRx
export const getPoiState = createFeatureSelector<PoiPartialState, State>(
  POI_FEATURE_KEY
);

const { selectAll, selectEntities } = poiAdapter.getSelectors();

export const getPoiLoaded = createSelector(
  getPoiState,
  (state: State) => state.loaded
);

export const getPoiError = createSelector(
  getPoiState,
  (state: State) => state.error
);

export const getAllPoi = createSelector(getPoiState, (state: State) =>
  selectAll(state)
);

export const getPoiEntities = createSelector(getPoiState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getPoiState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPoiEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
