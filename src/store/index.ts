// == Export main store
export { store } from './store';
export type { RootState, AppThunk } from './store';


// == Export app dispatch and selector
export { useAppDispatch, useAppSelector } from './hooks';

// == Export store modules
// - Movies
export {
  getMovies,
  moviesReducer,
  moviesSelector,
  selectMovies,
} from './movies';
