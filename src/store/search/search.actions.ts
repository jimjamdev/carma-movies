import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '~lib';
import { IParams } from '~types';

export const search = createAsyncThunk('BANNERS/GET', async ({ params = {} }: IParams) => {
  const response = await api.get(`search/movie`, {
    params,
  });
  return response?.data
});

export const setSearchQuery = createAction('SEARCH/QUERY', function prepare(query: string) {
  return {
    payload: query
  }
})