import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '~store';

export const selectBanners = (state: RootState) => state.banners;
export const bannersSelector = createSelector(selectBanners, state => state);
