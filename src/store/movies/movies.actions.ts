import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~lib';
import { IParams } from '~types';

export const getMovies = createAsyncThunk('MOVIES/GET', async ({ params }: IParams) => {
  const response = await api.get(`discover/movie`, {
    params,
  });
  return response?.data;
});
