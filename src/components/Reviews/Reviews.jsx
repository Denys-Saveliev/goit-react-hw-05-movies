import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../service/moviesApi';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    Api.fetchMovieReviews(movieId).then(data => setReview(data.data.results));
  }, [movieId]);

  return review && review.length ? (
    <ReviewsList>
      {review.map(({ author, content }) => (
        <li key={author}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ReviewsList>
  ) : (
    <>
      <p>There is no reviews on selected movie!</p>
      <hr />
    </>
  );
};

export default Reviews;
