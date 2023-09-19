import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../render/MovieDetail';
import styles from './Detail.module.css';
import Load from '../components/Load';

function Detail() {
  const { id } = useParams(); // url에 있는 값을 반환해주는 함수
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setMovies(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching movie:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <MovieDetail
          title={movies.title}
          coverImg={movies.medium_cover_image}
          rating={movies.rating}
          // year={movies.year}
          genres={movies.genres.join(', ')}
          summary={movies.summary}
          description_full={movies.description_full}
          runtime={movies.runtime}
          backgroundImgOg={movies.background_image_original}
        />
      )}
    </div>
  );
}

export default Detail;
