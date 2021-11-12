import { createReducer } from '@reduxjs/toolkit';
import { search, setSearchQuery } from '~store/search';
import { IMovies } from '~types';

export interface ISearch extends IMovies {
  query: string | undefined;
}

const initialState: ISearch = {
  data: {
    page: 0,
    results: undefined,
    total_pages: 0,
    total_results: 0
  },
  query: undefined,
  loading: false,
  error: undefined,
};

export const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(search.pending, state => {
      state.loading = true;
    })
    .addCase(search.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(search.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error?.message
    })
    .addCase(setSearchQuery, (state, action) => {
      console.log('action', action)
      state.query = action?.payload
    })
});
