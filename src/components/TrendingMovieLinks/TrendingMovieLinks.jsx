import { Link } from 'react-router-dom';

export const TrendingMovieLinks = data => {
  return (
    data && (
      <ul>
        {data.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movie${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    )
  );
};
