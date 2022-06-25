import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieLinkList = ({ data }) => {
  return (
    data && (
      <ul>
        {data.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    )
  );
};

MovieLinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
  ),
};

export default MovieLinkList;
