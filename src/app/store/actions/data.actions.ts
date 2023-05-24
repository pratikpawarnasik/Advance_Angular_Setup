import { createAction, props } from '@ngrx/store';
import { Data, DataById, Post } from '../models/data.model';


// Fetch all posts data
export const fetchData = createAction('[Data] Fetch Data');

export const fetchDataSuccess = createAction(
  '[Data] Fetch Data Success',
  props<{ data: Data }>()
);

export const fetchDataFailure = createAction(
  '[Data] Fetch Data Failure',
  props<{ error: string }>()
);

// Fetch data by ID

export const fetchDataById = createAction('[Data] Fetch Data By ID', props<{ id: number }>());
export const fetchDataByIdSuccess = createAction('[Data] Fetch Data By ID Success', props<{ data: any  }>());
export const fetchDataByIdFailure = createAction('[Data] Fetch Data By ID Failure', props<{ error: string }>());



