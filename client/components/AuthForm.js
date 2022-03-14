import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store';
import { TextField, Button, Typography } from '@material-ui/core';

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, formName));
  };

  return (
    <div
      style={{
        height: '79vh',
        width: '40vw',
        justifyContent: 'center',
        marginLeft: '20px',
      }}
    >
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <TextField
            style={{ backgroundColor: 'white' }}
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <TextField
            style={{ backgroundColor: 'white' }}
            name="password"
            type="password"
          />
        </div>
        <div>
          <Button variant="contained" type="submit">
            {displayName}
          </Button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export const Login = <AuthForm name="login" displayName="Login" />;
export const Signup = <AuthForm name="signup" displayName="Sign Up" />;
