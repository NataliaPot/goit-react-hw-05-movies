import { movieDetails } from 'Servises/Api';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  AdditionalInfoContainer,
  AdditionalTitle,
  GoBackBtn,
  ImageInfoContainer,
  InfoContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await movieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    navigate(goBack.current);
  };

  return (
    <>
      {movie && (
        <div>
          <GoBackBtn onClick={handleGoBack}>&#129136; Go back</GoBackBtn>
          <ImageInfoContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="200"
            />

            <InfoContainer>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {Math.ceil(movie.vote_average * 10)} %</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </InfoContainer>
          </ImageInfoContainer>
          <AdditionalInfoContainer>
            <AdditionalTitle>Additional information</AdditionalTitle>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </AdditionalInfoContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
