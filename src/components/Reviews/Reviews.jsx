import { movieReviews } from 'Servises/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await movieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {reviews?.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
