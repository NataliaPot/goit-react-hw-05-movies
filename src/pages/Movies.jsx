import { searchMovie } from 'Servises/Api';
import Search from 'components/Search/Search';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie') ?? '';
  const getFilm = query => {
    query ? setSearchParams({ movie: query }) : setSearchParams({});
  };

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await searchMovie(movie);
        setMovies(data);
        if (data === 0) {
          return;
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    getMovies();
  }, [movie]);

  return (
    <>
      <Search searchQuery={getFilm} />

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id.toString()}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
