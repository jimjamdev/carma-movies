import { createReducer } from '@reduxjs/toolkit';
import { getTopTen } from '~store/top-ten';
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

export const topTenReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTopTen.pending, state => {
      state.loading = true;
    })
    .addCase(getTopTen.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(getTopTen.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error?.message
    });
});
