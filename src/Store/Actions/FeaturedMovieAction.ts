import { GET_FEATURED_MOVIE } from '../Constants';
import { IMoviePayload } from '../Types/Movie.interface';
import constants from '../../Utils/constants';

export type FeaturedMovieAction = { type: string; payload: IMoviePayload };

export const GetFeaturedMovie = (movieId: string): FeaturedMovieAction => ({
  type: GET_FEATURED_MOVIE,
  payload: {
    request: {
      url: `/tv/${movieId}?api_key=${constants.apiKey}`,
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
