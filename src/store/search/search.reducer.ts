import { createReducer } from '@reduxjs/toolkit';
import { search } from '~store/search';
import { IMovies } from '~types';

const initialState: IMovies = {
  data: {
    page: 0,
    results: undefined,
    total_pages: 0,
    total_results: 0
  },
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
    });
});
