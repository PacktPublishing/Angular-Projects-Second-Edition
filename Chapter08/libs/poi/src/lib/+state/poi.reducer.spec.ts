import { PoiEntity } from './poi.models';
import * as PoiActions from './poi.actions';
import { State, initialState, reducer } from './poi.reducer';

describe('Poi Reducer', () => {
  const createPoiEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PoiEntity);

  beforeEach(() => {});

  describe('valid Poi actions', () => {
    it('loadPoiSuccess should return set the list of known Poi', () => {
      const poi = [
        createPoiEntity('PRODUCT-AAA'),
        createPoiEntity('PRODUCT-zzz'),
      ];
      const action = PoiActions.loadPoiSuccess({ poi });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
