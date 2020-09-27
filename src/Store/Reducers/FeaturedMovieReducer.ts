import { FeaturedMovieAction } from '../Actions/FeaturedMovieAction';
import { IMovie } from '../Types/Movie.interface';
import { GET_FEATURED_MOVIE, GET_FEATURED_MOVIE_SUCCESS } from '../Constants';

const initialState = {
  id: 0,
  title: '',
  description: '',
  image: '',
  loading: true,
};

export const FeaturedMovieReducer = (state: IMovie = initialState, action: FeaturedMovieAction) => {
  switch (action.type) {
    case GET_FEATURED_MOVIE_SUCCESS: {
      return {
        ...state,
        title: action.payload.data.name,
        id: action.payload.data.id,
        description: action.payload.data.overview,
        image: action.payload.data.backdrop_path,
        loading: false,
      };
    }
    default:
      return state;
  }
};
