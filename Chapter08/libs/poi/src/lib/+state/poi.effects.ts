import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PoiFeature from './poi.reducer';
import * as PoiActions from './poi.actions';
import { map } from 'rxjs/operators';
import { PoiService } from '../poi.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class PoiEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.init),
      fetch({
        run: (action) => {
          return this.poiService.getAll().pipe(
            map(pois => PoiActions.loadPoiSuccess({ poi: pois }))
          )
        },

        onError: (action, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );

  visit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.visitPoi),
      fetch({
        run: action => {
          const stat = localStorage.getItem('tour-' + action.poiId);
          const total = stat ? Number(stat) + 1 : 1;
          localStorage.setItem('tour-' + action.poiId, total.toString());
          return EMPTY;
        }
      })
    )
  );

  constructor(private actions$: Actions, private poiService: PoiService) {}
}
