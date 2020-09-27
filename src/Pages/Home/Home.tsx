import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FeaturedMovie } from '../../Components/Organisms/FeaturedMovie/FeaturedMovie';
import { GetFeaturedMovie } from '../../Store/Actions/FeaturedMovieAction';
import { IMovie } from '../../Store/Types/Movie.interface';
import { AppState } from '../../Store/configureStore';
import { Loader } from '../../Components/Atoms/Loading/Loading';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const movie: IMovie = useSelector((state: AppState) => state.featuredMovie);

  useEffect(() => {
    dispatch(GetFeaturedMovie('63351'));
  }, [dispatch]);

  return (
    <Container fluid style={{ padding: 0 }}>
      {movie.loading ? (
        <Loader />
      ) : (
        <FeaturedMovie title={movie.title} description={movie.description} image={movie.image} />
      )}
    </Container>
  );
};
