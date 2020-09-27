import { IMovies, IMovieResponse } from '../Types/Movie.interface';

const initialState: IMovies = {
  movies: [{ id: 0, title: '', description: '', image: '' }],
  loading: true,
};

export const createMoviesReducer = (type: string) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (state: IMovies = initialState, action: any) => {
    switch (action.type) {
      case `GET_${type.toUpperCase()}_MOVIES_SUCCESS`: {
        return {
          ...state,
          movies: action.payload.data.results.map((result: IMovieResponse) => ({
            id: result.id,
            title: result.name,
            description: result.overview,
            image: result.backdrop_path,
          })),
          loading: false,
        };
      }
      default:
        return state;
    }
  };
};
