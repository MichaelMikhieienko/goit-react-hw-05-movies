// Reviews.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = '1a79fc301203f205161daf43db66b1ec';
    const reviewsEndpoint = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

    axios.get(reviewsEndpoint).then((response) => {
      setReviews(response.data.results);
    });
  }, [movieId]);

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
