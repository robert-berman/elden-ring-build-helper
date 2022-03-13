import React, { useEffect, useState } from 'react';
import { getWeapons } from '../store/weapons';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
const AllWeapons = () => {
  const dispatch = useDispatch();

  const weapons = useSelector((state) => state.weapons.weapons);

  useEffect(() => {
    dispatch(getWeapons());
  }, []);
  console.log(weapons);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {weapons.map((weapon) => {
        return (
          <div class="allWeaponsContainer">
            <div class="square">
              <img src={weapon.imageUrl} class="mask" />
              <div class="weaponName">{weapon.name}</div>
              <p>{weapon.str}</p>
              <div>
                <Link to={`/weapons/${weapon.id}`} class="button">
                  View Weapon
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AllWeapons;
