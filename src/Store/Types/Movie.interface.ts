export interface IMovie {
  id: number;
  title: string;
  description: string;
  image: string;
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
