import { DataState } from '../reducers/data.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Data, Post } from '../models/data.model';

export const selectDataState = createFeatureSelector<DataState>('postsMasterData');

export const selectData = createSelector(
  selectDataState,
  (state: DataState) => state.data
);

export const selectPosts = createSelector(
  selectData,
  (data: Data | null) => (data ? data.posts : [])
);

export const selectLoading = createSelector(
  selectDataState,
  (state: DataState) => state.loading
);

export const selectError = createSelector(
  selectDataState,
  (state: DataState) => state.error
);


// fetch data by ID
// export const selectSinglePostId = createSelector(
//   selectDataState,
//   (state: DataState) => state.selectedData
// );


export const selectSinglePost = createSelector(
  selectDataState,
  (state: DataState) => state.selectedData
);

