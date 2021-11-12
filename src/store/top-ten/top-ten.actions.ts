import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~lib';
import { IParams } from '~types';

export const getTopTen = createAsyncThunk('BANNERS/GET', async ({ params = {} }: IParams) => {
  const response = await api.get(`movie/top_rated`, {
    params,
  });
  const data = response?.data
  return {
    ...data,
    results: data?.results?.slice(0, 10)
  }
});
