import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { bannersReducer } from '~store/banners';
import { movieReducer } from '~store/movie';
import { moviesReducer } from '~store/movies';
import { searchReducer } from '~store/search';

export function makeStore() {
  return configureStore({
    reducer: {
      movie: movieReducer,
      movies: moviesReducer,
      banners: bannersReducer,
      search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
