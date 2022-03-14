import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeapons } from './store/weapons';
import { fetchSingleCharacter } from './store/characters';
import { useStyles } from './components/AllWeaponStyles';

import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  const weapons = useSelector((state) => state.weapons.weapons);
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (weapons.length === 0) {
      dispatch(getWeapons());
    }
    if (user.id) {
      dispatch(fetchSingleCharacter(user.id));
    }
  }, [user]);
  return (
    <div className={classes.background}>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
