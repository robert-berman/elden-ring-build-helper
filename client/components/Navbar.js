import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { useStyles } from './navBarStyles';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <h1>Elden Ring Build Helper</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/weapons">All Weapons</Link>
            <Link to="/character/create">Create a Character</Link>
            <a href="#" onClick={() => dispatch(logout())}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/weapons">All Weapons</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
