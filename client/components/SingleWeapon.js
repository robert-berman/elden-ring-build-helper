import React, { useEffect, useState } from 'react';
import { fetchSingleWeapon } from '../store/weapons';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../store';
import { fetchSingleCharacter } from '../store/characters';

const SingleWeapon = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const weapon =
    useSelector((state) => {
      return state.weapons.singleWeapon;
    }) || [];

  const character = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchSingleWeapon(props.match.params.id));
    dispatch(fetchSingleCharacter(user.id));
  }, [user]);

  console.log(character.str);
  return (
    <div
      id="item-stuff"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
      }}
    >
      {console.log(weapon)}
      <img src={weapon.imageUrl} />
      <div
        id="stats"
        style={{
          alignItems: 'center',
        }}
      >
        <h3>Requirements:</h3>
        <h4>Strength : {weapon.str} </h4>
        <h4>Dexterity : {weapon.dex}</h4>
        <h4>Faith : {weapon.fth}</h4>
        <h4>Intellect : {weapon.int}</h4>
      </div>
    </div>
  );
};

export default SingleWeapon;
