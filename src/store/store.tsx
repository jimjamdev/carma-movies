import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import { moviesReducer } from '~store/movies';

export function makeStore() {
  return configureStore({
    reducer: { movies: moviesReducer },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

const store = makeStore()

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