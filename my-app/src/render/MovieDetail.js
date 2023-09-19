import PropTypes from 'prop-types';
import styles from './MovieDetail.module.css';

function MovieDetail({
  backgroundImgOg,
  coverImg,
  rating,
  runtime,
  description_full,
  title,
  genres,
}) {
  return (
    <div className={styles.movie}>
      {/* Background img */}
      <div className={styles.background}>
        <img className={styles.Detail_bg} src={backgroundImgOg} alt="" />
      </div>
      {/* ShortView (Img, Title, rating, runtime...) */}
      <div className={styles.show}>
        <div className={styles.shortView}>
          {/* Img */}
          <div className={styles.shortView_Img}>
            <img src={coverImg} alt={title} />
          </div>
          {/* title, rating, runtime, genre */}
          <div className={styles.shortView_letters}>
            <h3>{title}</h3>
            <p>{rating ? `⭐️ Rating: ${rating} / 10` : null}</p>
            <p>{runtime ? `⏱ ${runtime} min` : null}</p>
            {Array.isArray(genres) && genres.length > 0 ? (
              <div>
                <b>Genres</b>
                <ul>
                  {genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Description */}
        {description_full ? (
          <div className={styles.descript}>
            <p>{description_full}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  backgroundImgOg: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
