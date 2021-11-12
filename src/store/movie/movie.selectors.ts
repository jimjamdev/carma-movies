import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '~store';

export const selectMovie = (state: RootState) => state.movies;
export const movieSelector = createSelector(selectMovie, state => state);
