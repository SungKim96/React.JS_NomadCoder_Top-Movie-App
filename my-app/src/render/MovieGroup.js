import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieGroup.module.css';

function MovieGroup({ id, coverImg, title, summary, rating, year, runtime }) {
  return (
    <div className={styles.movie}>
      {/* shortview (img, title, rating, runtime...) */}
      <div className={styles.show}>
        {/* img */}
        <div className={styles.Img}>
          <img src={coverImg} alt={`${title} cover`} />
        </div>
        <div className={styles.letters}>
          <div className={styles.title}>
            <div>
              <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
              </h2>
            </div>
          </div>
          <p>{year ? `Year: ${year}` : null}</p>
          <p>{rating ? `Rating: ${rating} of 10` : null}</p>
          <p>{runtime ? `Runtime: ${runtime} min` : null}</p>
          <p>
            {summary
              ? summary.length > 220
                ? `${summary.slice(0, 220)}...`
                : summary
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}

MovieGroup.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number.isRequired,
};

export default MovieGroup;
