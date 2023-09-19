import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieSlide.module.css';

function MovieSlide({ id, coverImg, title, rating, runtime, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <div>{rating ? ` ⭐️ Rating: ${rating} of 10` : null}</div>
      <div>{runtime ? ` ⏱ ${runtime} min` : null}</div>
    </div>
  );
}

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
};

export default MovieSlide;
