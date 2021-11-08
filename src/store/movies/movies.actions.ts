import { createAsyncThunk  } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk('MOVIES/GET', async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7b1559caeff60fd91fede1d1f63dabaf`)
  return response.data
});
