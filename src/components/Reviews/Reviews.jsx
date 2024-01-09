import { useParams } from 'react-router-dom';
import { fetchReviews } from '../Services/ApiMovies';
import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      try {
        const data = await fetchReviews(movieId);
        setReviews([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {!reviews.length && <p>No reviews for this movie...yet</p>}
      <ul className={styles.List}>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
