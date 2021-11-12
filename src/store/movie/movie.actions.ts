import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~lib';

export const getMovie = createAsyncThunk('MOVIES/GET', async (id:any) => {
  if (!id) return undefined
  const response = await api.get(`movie/${id}`);
  return response?.data;
});
