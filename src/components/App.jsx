import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { RotatingLines } from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('../pages/HomePage' /*webpackChunkName: "homePage-view"*/)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /*webpackChunkName: "moviesPage-view"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movieDetailsPage-view"*/
  )
);

export const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <RotatingLines strokeColor="#eee56b" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route
            path="movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
