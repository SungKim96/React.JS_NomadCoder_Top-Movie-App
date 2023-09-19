import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieSearch from '../render/MovieSearch';
import styles from './Search.module.css';
import Load from '../components/Load';

function Search() {
  const { search } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    setLoading(true);
    setMovieArr([]);

    if (search) {
      fetch(
        `https://yts.mx/api/v2/list_movies.json?limit=10&sort_by=rating&query_term=${search}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((json) => {
          const movies = json.data.movies || []; // Ensure movies is an array or default to an empty array
          setMovieArr(movies);
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
          // Handle the error, e.g., display an error message to the user.
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Handle the case where the search term is empty or undefined.
      setLoading(false);
    }
  }, [search]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Load />
      ) : movieArr.length === 0 ? (
        <p>No movies found for the search term: {search}</p>
      ) : (
        <div className={styles.movies}>
          {movieArr.map((movie) => (
            <MovieSearch
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
