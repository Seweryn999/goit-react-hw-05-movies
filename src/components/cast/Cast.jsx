import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [castData, setCastData] = useState([]);
  const creditsData = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_CREDITS(movieId));
      setCastData(answer.data.cast);
    } catch (err) {
      console.log(err);
    }
  }, [movieId]);

  useEffect(() => {
    creditsData();
  }, [creditsData]);

  return (
    <ul className={css.cast}>
      {castData.map(({ character, id, name, profile_path }) => (
        <li key={id} className={css.cast__item}>
          {' '}
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={`of ${name}`}
            className={css.cast__img}
          />
          <p className={css.cast__dot}>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
