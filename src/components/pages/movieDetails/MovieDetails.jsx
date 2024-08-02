import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import css from './MovieDetails.module.css';

import AdditionalInfo from 'components/additionalInfo/AdditionalInfo';
//import PropTypes from 'prop-types' //TODO uncoment if ready

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationRef = useRef(location);
  const { movieId } = useParams();
  const [movieIdData, setMovieIdData] = useState('');
  const [movieIdDataDetails, setMovieIdDataDetails] = useState({});

  const dataMovieDetails = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_ID(movieId));
      setMovieIdData(answer.data.id);
      setMovieIdDataDetails(answer.data);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  const goBackHandler = () => {
    console.log(locationRef);
    if (locationRef.current.state?.from.pathname === '/') {
      console.log('home');
      return navigate('/');
    } else {
      console.log('movies');
      return navigate(`/movies${locationRef.current.state.from?.search}`);
    }
  };

  useEffect(() => {
    if (movieId !== movieIdData) dataMovieDetails();
  }, [dataMovieDetails, movieId, movieIdData]);

  return (
    <div className={css.movie}>
      {movieIdData !== '' ? (
        <>
          <button type="button" onClick={() => goBackHandler()}>
            Go back
          </button>
          <div className={css.movie__item}>
            <img
              className={css.movie__img}
              src={`https://image.tmdb.org/t/p/w500/${movieIdDataDetails.poster_path}`}
              alt={`${movieIdDataDetails.tagline}`}
            />
            <div>
              <h2>{movieIdDataDetails.original_title}</h2>
              <p>User score: {movieIdDataDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieIdDataDetails.overview}</p>
              <h3>Genres</h3>
              <p>
                {movieIdDataDetails.genres.map(({ _, name }) => `${name} `)}
              </p>
            </div>
          </div>
          <AdditionalInfo />
        </>
      ) : (
        <p>Loding</p>
      )}
    </div>
  );
};

export default MovieDetails;
