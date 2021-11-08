import { createReducer } from '@reduxjs/toolkit';
import { getMovies } from '~store/movies';

export type IMovies = {
  data: {
    page: number;
    results?: Array<any>
    total_pages: number;
    total_results: number;
  };
  loading: boolean;
  error: string | undefined;
};

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
