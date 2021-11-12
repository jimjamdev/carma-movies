import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '~store';

export const selectTopTen = (state: RootState) => state.topTen;
export const topTenSelector = createSelector(selectTopTen, state => state);
