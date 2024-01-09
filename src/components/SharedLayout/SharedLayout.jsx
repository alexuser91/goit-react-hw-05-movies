import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: 5,
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
      <header className={css.Header}>
        <nav className={css.Navigation}>
          <NavLink className={css.StyledNavLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.StyledNavLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
