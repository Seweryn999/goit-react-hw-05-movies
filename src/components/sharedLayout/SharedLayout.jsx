import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';
export const internalBtmBorder = {
  borderBottom: '1px solid grey',
  paddingBottom: 10,
};

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.active : css.header__link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css.active : css.header__link
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<h2>Lazy loading in action</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
