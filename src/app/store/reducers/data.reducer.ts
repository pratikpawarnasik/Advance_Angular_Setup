import { createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/data.actions';
import { Data, Post } from '../models/data.model';

export interface DataState {
  data: Data | null;
  selectedData: Post | null ; // Single record
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  selectedData: null, // Single record
  loading: false,
  error: null
};

export const dataReducer = createReducer(
  initialState,
  on(DataActions.fetchData, (state) => ({ ...state, loading: true })),
  on(DataActions.fetchDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null
  })),
  on(DataActions.fetchDataFailure, (state, { error }) => ({
    ...state,
    data: null,
    loading: false,
    error
  })),
  // fetch by id
  on(DataActions.fetchDataById, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(DataActions.fetchDataByIdSuccess, (state, { data }) => ({
    ...state,
    selectedData: data,
    loading: false,
  })),

  
  on(DataActions.fetchDataByIdFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))

);
