import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Api from '../../service/moviesApi';
import { Wrapper, Title, Text, Container } from './MovieDetailsPage.styled';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Link } from 'components/Navigation/Navigation.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    Api.fetchMovieDetails(movieId).then(data => setMovie(data.data));
  }, [movieId]);

  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>

      <hr />

      {movie && (
        <>
          <Wrapper>
            <div>
              <img src={BASE_IMAGE_URL + movie.poster_path} alt={movie.title} />
            </div>
            <Container>
              <h2>{movie.title}</h2>
              <Wrapper>
                <Title>Genres:</Title>

                <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
              </Wrapper>

              <Wrapper>
                <Title>Rate:</Title>
                <p>{movie.popularity}</p>
              </Wrapper>

              <Wrapper>
                <Title>Release date:</Title>
                <p>{movie.release_date}</p>
              </Wrapper>

              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </Container>
          </Wrapper>

          <hr />

          <h2>Additional information</h2>

          <Link to={`/movies/${movieId}/cast`} replace={true}>
            Cast
          </Link>
          <Link to={`/movies/${movieId}/reviews`} replace={true}>
            Reviews
          </Link>

          <hr />

          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </>
      )}
    </>
  );
};
