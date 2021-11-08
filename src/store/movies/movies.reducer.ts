import { createReducer } from '@reduxjs/toolkit';
import { getMovies } from '~store/movies';
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

export const moviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovies.pending, state => {
      state.loading = true;
    })
    .addCase(getMovies.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(getMovies.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error?.message
    });
});
