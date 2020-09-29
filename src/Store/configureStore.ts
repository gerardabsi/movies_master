import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { FeaturedMovieReducer } from './Reducers/FeaturedMovieReducer';
import httpMiddleware from '../Utils/httpMiddleware';
import { IFeatureMovie, IMovies } from './Types/Movie.interface';
import { createMoviesReducer } from './Reducers/MoviesReducer';

export type AppState = {
  featuredMovie: IFeatureMovie;
  actionMovies: IMovies;
  comedyMovies: IMovies;
  crimeMovies: IMovies;
  horrorMovies: IMovies;
};

const rootReducer = combineReducers({
  featuredMovie: FeaturedMovieReducer,
  actionMovies: createMoviesReducer('action'),
  comedyMovies: createMoviesReducer('comedy'),
  crimeMovies: createMoviesReducer('crime'),
  horrorMovies: createMoviesReducer('romance'),
});

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger, httpMiddleware));
}

export const store = configureStore();
