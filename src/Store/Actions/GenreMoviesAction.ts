import { IMoviesPayLoad } from '../Types/Movie.interface';

export type FeaturedMovieAction = { type: string; payload: IMoviesPayLoad };

export const GetMoviesByGenre = (genre: string, genreId: string): FeaturedMovieAction => ({
  type: `GET_${genre.toUpperCase()}_MOVIES`,
  payload: {
    request: {
      url: `/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=${genreId}`,
      method: 'get',
    },
    data: {
      results: [
        {
          id: 0,
          name: '',
          backdrop_path: '',
          overview: '',
        },
      ],
    },
  },
});
