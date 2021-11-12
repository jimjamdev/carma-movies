import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~lib';
import { IParams } from '~types';

export const getBanners = createAsyncThunk('BANNERS/GET', async ({ params = {} }: IParams) => {
  const response = await api.get(`movie/popular`, {
    params,
  });
  const data = response?.data
  return {
    ...data,
    results: data?.results?.slice(0, 3)
  }
});
