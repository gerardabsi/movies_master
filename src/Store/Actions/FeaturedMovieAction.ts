import { GET_FEATURED_MOVIE } from '../Constants';
import { IMoviePayload } from '../Types/Movie.interface';

// eslint-disable-next-line @typescript-eslint/ban-types
export type FeaturedMovieAction = { type: string; payload: IMoviePayload };

export const GetFeaturedMovie = (movieId: string): FeaturedMovieAction => ({
  type: GET_FEATURED_MOVIE,
  payload: {
    request: {
      url: `/tv/${movieId}?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0`,
      method: 'get',
    },
    data: {
      id: 0,
      name: '',
      backdrop_path: '',
      overview: '',
    },
  },
});
