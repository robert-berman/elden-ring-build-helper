import React from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from './homeStyles';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.username);
  const classes = useStyles();
  return (
    <>
      <div style={{ height: '79vh' }}>
        <div className={classes.square}>
          <div>
            <h1>Welcome, {username}</h1>
          </div>
          <div>
            <h2>To get started, please create a character.</h2>
          </div>
          <div>
            <h2>
              After you've done that, you can browse all weapons and compare
              your character's stats to any weapon in Elden Ring. Feel free to
              change your character's info at any time in the Character tab.{' '}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
