import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../service/moviesApi';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    Api.fetchMovieCredits(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  return (
    cast && (
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img src={BASE_IMAGE_URL + profile_path} alt="name" />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
