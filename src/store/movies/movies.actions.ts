import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~lib';

export const getMovies = createAsyncThunk('MOVIES/GET', async () => {
  const response = await api.get(
    `movie/popular`,
  );
  return response.data;
});
