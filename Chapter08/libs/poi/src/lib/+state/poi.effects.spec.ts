import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { PoiEffects } from './poi.effects';
import * as PoiActions from './poi.actions';

describe('PoiEffects', () => {
  let actions: Observable<any>;
  let effects: PoiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PoiEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PoiEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PoiActions.init() });

      const expected = hot('-a-|', {
        a: PoiActions.loadPoiSuccess({ poi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
