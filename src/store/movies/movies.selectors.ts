import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '~store';

export const selectMovies = (state: RootState) => state.movies;
export const moviesSelector = createSelector(selectMovies, state => state);
