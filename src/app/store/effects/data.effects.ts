import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, mergeMap, switchMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import * as  DataActions from '../actions/data.actions';
import { Data, Post } from '../models/data.model';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  fetchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.fetchData),
      switchMap(() =>
        this.dataService.fetchData().pipe(delay(100),
          map((data) => DataActions.fetchDataSuccess({ data })),
          catchError((error) => of(DataActions.fetchDataFailure({ error: error.message })))
        )
      )
    )
  );

  // Fetch data by ID

  fetchDataById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DataActions.fetchDataById),
      mergeMap(action =>
        this.dataService.fetchDataById(action.id).pipe(map((response) => DataActions.fetchDataByIdSuccess({ data: response })),
          catchError(error => of(DataActions.fetchDataByIdFailure({ error: error.message })))
        )
      )
    )
  );

 
}
