import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const defaultMovieImg = 'https://i.ibb.co/Vq9rRZk/no-image-meme-2.png';

  return (
    <ul className={styles.Ul}>
      {movies.map(movie => (
        <li className={styles.Li} key={movie.id}>
          <Link
            className={styles.StyledLink}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              className={styles.Poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultMovieImg
              }
              alt={movie.title}
            />
            <p className={styles.MovieTitle}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
