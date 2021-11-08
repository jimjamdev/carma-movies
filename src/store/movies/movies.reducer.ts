import { createReducer } from '@reduxjs/toolkit';
import { getMovies } from '~store';

export type IMovies = {
  data: Array<any> | undefined;
  loading: boolean;
  error: string | undefined;
};

const initialState: IMovies = {
  data: undefined,
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
    .addCase(getMovies.rejected, state => {
      state.loading = false;
      state.error = 'There was an error';
    });
});
