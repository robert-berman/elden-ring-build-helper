import React, { useEffect, useState } from 'react';
import { fetchSingleWeapon } from '../store/weapons';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../store';
import { fetchSingleCharacter } from '../store/characters';
import clsx from 'clsx';
import { useStyles } from './singleWeaponStyles';
const SingleWeapon = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user);
  const weapon = useSelector((state) => state.weapons.singleWeapon);
  console.log(weapon);

  const character = useSelector((state) => state.characters);
  console.log(character);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchSingleWeapon(props.match.params.id));
    if (user.id) {
      dispatch(fetchSingleCharacter(user.id));
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '79vh',
      }}
    >
      <h2>Weapon : {weapon.name} </h2>
      <div className={classes.itemStuff}>
        {user.id && character && (
          <div id="your-stats">
            <h2>Your stats:</h2>
            <h4 className={classes.label}>
              Strength :{' '}
              <div
                className={clsx({ [classes.red]: character.str < weapon.str })}
              >
                {character.str}
              </div>
            </h4>
            <h4 className={classes.label}>
              Dexterity :{' '}
              <div
                className={clsx({ [classes.red]: character.dex < weapon.dex })}
              >
                {' '}
                {character.dex}
              </div>
            </h4>
            <h4 className={classes.label}>
              Faith :{' '}
              <div
                className={clsx({ [classes.red]: character.fth < weapon.fth })}
              >
                {' '}
                {character.fth}
              </div>
            </h4>
            <h4 className={classes.label}>
              Intellect :{' '}
              <div
                className={clsx({ [classes.red]: character.int < weapon.int })}
              >
                {' '}
                {character.int}
              </div>
            </h4>
          </div>
        )}
        <img src={weapon.imageUrl} className={classes.square} />
        <div
          id="stats"
          style={{
            alignItems: 'center',
          }}
        >
          <h2>Requirements:</h2>
          <h4>Strength : {weapon.str || 'None'} </h4>
          <h4>Dexterity : {weapon.dex || 'None'}</h4>
          <h4>Faith : {weapon.fth || 'None'}</h4>
          <h4>Intellect : {weapon.int || 'None'}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleWeapon;
