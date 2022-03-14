import React, { useEffect, useState } from 'react';
import { getWeapons } from '../store/weapons';
import { useHistory } from 'react-router-dom';
import { fetchSingleWeapon } from '../store/weapons';
import { Link } from 'react-router-dom';
import { useStyles } from './AllWeaponStyles';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const AllWeapons = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const weapons = useSelector((state) => state.weapons.weapons);
  const history = useHistory();

  const handleClick = (id) => {
    dispatch(fetchSingleWeapon(id));
    history.push(`/weapons/${id}`);
  };
  console.log(weapons);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        overflowY: 'scroll',
        maxHeight: '78vh',
      }}
    >
      {weapons.map((weapon) => {
        return (
          <div className="allWeaponsContainer" style={{ margin: '8px 4px' }}>
            <div className={classes.square}>
              <img src={weapon.imageUrl} className={classes.weaponImg} />
              <div className="weaponName">{weapon.name}</div>
              <div>
                <Button
                  style={{
                    color: 'black',
                    textAlign: 'center',
                  }}
                  onClick={() => handleClick(weapon.id)}
                  class="button"
                >
                  View Weapon
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AllWeapons;
