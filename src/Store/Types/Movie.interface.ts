export interface IMovie {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface IFeatureMovie extends IMovie {
  loading: boolean;
}

export interface IMovieRequest {
  url: string;
  method: string;
}

export interface IMovieResponse {
  id: number;
  name: string;
  backdrop_path: string;
  overview: string;
}

export interface IMoviePayload {
  request: IMovieRequest;
  data: IMovieResponse;
}

export interface IMoviesDataPayload {
  results: IMovieResponse[];
}

export interface IMoviesPayLoad {
  request: IMovieRequest;
  data: IMoviesDataPayload;
}

export interface IMovies {
  movies: IMovie[];
  loading: boolean;
}
