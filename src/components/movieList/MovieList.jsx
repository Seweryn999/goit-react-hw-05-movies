import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

const MovieList = ({ movieList }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movieList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title !== null ? title : name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  trendingList: PropTypes.array(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default MovieList;
