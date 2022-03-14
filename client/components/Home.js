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
            <h2>
              To get started, click the Weapons tab to view information about
              every weapon in Elden Ring.
            </h2>
          </div>
          <div>
            <h2>
              If you'd like to compare the weapons stats to your character's
              stats, create an account using the Create a Character tab. After
              you do so, you can browse all weapons and compare your character's
              stats to any weapon in Elden Ring. Feel free to change your
              character's info at any time in the Character tab.{' '}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
