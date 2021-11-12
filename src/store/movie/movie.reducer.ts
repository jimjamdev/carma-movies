import { createReducer } from '@reduxjs/toolkit';
import { getMovie } from '~store/movie';
import { IMovie } from '~types';

export interface ISingleMovie {
  data: IMovie | undefined;
  loading: boolean;
  error: string | undefined;
}

const initialState: ISingleMovie = {
  data: undefined,
  loading: false,
  error: undefined,
};

export const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovie.pending, state => {
      state.loading = true;
    })
    .addCase(getMovie.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    })
    .addCase(getMovie.rejected, (state, { error }) => {
      state.loading = false;
      state.error = error?.message
    });
});
