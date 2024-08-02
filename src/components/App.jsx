import { Routes, Route } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import { movieApiLuncher } from 'service/movieApiLuncher';
import apiUtils from 'service/apiUtils';
import React, { useEffect, useState, useCallback, lazy } from 'react';

const Home = lazy(() => import('./pages/home/Home'));
const Movies = lazy(() => import('./pages/movies/Movies'));
const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

const App = () => {
  const [trendList, setTrendList] = useState([]);
  const trendForSave = useCallback(async () => {
    try {
      const answer = await movieApiLuncher(apiUtils.API_TRENDING());
      setTrendList(answer.data.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    trendForSave();
  }, [trendForSave]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home trendingList={trendList} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home trendingList={trendList} />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
