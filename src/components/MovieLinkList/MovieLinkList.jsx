import PropTypes from 'prop-types';
import {
  MoviesList,
  MovieItem,
  MovieLink,
  LinkText,
} from './MovieLinkList.styled';
import comingSoonImg from '../../images/soon.png';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieLinkList = ({ data }) => {
  return (
    data && (
      <MoviesList>
        {data.map(({ id, title, poster_path }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`}>
                <img
                  style={{ height: '450px' }}
                  src={
                    poster_path ? BASE_IMAGE_URL + poster_path : comingSoonImg
                  }
                  alt={title}
                />
                <LinkText> {title}</LinkText>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MoviesList>
    )
  );
};

MovieLinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
  ),
};

export default MovieLinkList;
