import { PoiEntity } from './poi.models';
import { poiAdapter, PoiPartialState, initialState } from './poi.reducer';
import * as PoiSelectors from './poi.selectors';

describe('Poi Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPoiId = (it: PoiEntity) => it.id;
  const createPoiEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PoiEntity);

  let state: PoiPartialState;

  beforeEach(() => {
    state = {
      poi: poiAdapter.setAll(
        [
          createPoiEntity('PRODUCT-AAA'),
          createPoiEntity('PRODUCT-BBB'),
          createPoiEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Poi Selectors', () => {
    it('getAllPoi() should return the list of Poi', () => {
      const results = PoiSelectors.getAllPoi(state);
      const selId = getPoiId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = PoiSelectors.getSelected(state) as PoiEntity;
      const selId = getPoiId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getPoiLoaded() should return the current 'loaded' status", () => {
      const result = PoiSelectors.getPoiLoaded(state);

      expect(result).toBe(true);
    });

    it("getPoiError() should return the current 'error' state", () => {
      const result = PoiSelectors.getPoiError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
