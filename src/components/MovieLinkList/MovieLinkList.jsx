import { Link } from 'react-router-dom';

export const MovieLinkList = ({ data }) => {
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
