import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { FeaturedMovieReducer } from './Reducers/FeaturedMovieReducer';
import httpMiddleware from '../Utils/http';
import { IMovie } from './Types/Movie.interface';

export type AppState = {
  featuredMovie: IMovie;
};

const rootReducer = combineReducers({
  featuredMovie: FeaturedMovieReducer,
});

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger, httpMiddleware));
}

export const store = configureStore();
