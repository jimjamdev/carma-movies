import { createReducer } from '@reduxjs/toolkit';
import { getBanners } from '~store/banners';
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

export const bannersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBanners.pending, state => {
      state.loading = true;
    })
    .addCase(getBanners.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(getBanners.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error?.message
    });
});
