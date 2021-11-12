import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '~store';

export const selectSearch = (state: RootState) => state.search;
export const searchSelector = createSelector(selectSearch, state => state);
