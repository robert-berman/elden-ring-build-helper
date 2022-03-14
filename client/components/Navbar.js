import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { useStyles } from './navBarStyles';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const character = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <h1>Elden Ring Build Helper</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link
              to="/home"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              Home
            </Link>
            <Link
              to="/weapons"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              All Weapons
            </Link>
            <Link
              to="/character/create"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              Create a Character
            </Link>
            <Link
              to="/character/"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              Character
            </Link>
            <a
              href="#"
              style={{ textDecoration: 'underline', color: 'white' }}
              onClick={() => dispatch(logout())}
            >
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link
              to="/login"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              Sign Up
            </Link>
            <Link
              to="/weapons"
              style={{ textDecoration: 'underline', color: 'white' }}
            >
              All Weapons
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
