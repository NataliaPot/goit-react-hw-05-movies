import { movieCredits } from 'Servises/Api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const data = await movieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      {cast?.length ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <div key={id}>
              <img
                width="100"
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <li>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            </div>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Cast;
