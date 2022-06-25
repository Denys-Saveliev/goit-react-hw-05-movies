import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../service/moviesApi';

export const Reviews = () => {
  const [review, setReview] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    Api.fetchMovieReviews(movieId).then(data => setReview(data.data.results));
  }, [movieId]);

  return review && review.length ? (
    <ul>
      {review.map(({ author, content }) => (
        <li key={author}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <>
      <p>There is no reviews on selected movie!</p>
      <hr />
    </>
  );
};
