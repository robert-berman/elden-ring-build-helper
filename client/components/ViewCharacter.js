import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../store';
import { fetchSingleCharacter } from '../store/characters';
import {
  Paper,
  TextField,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

const ViewCharacter = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const character = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchSingleCharacter(user.id));
  }, [user]);

  console.log(character.str);
  return (
    <div
      id="item-stuff"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <div
        id="stats"
        style={{
          alignItems: 'center',
        }}
      >
        <h3>Current Stats:</h3>
        <h4>Strength : {character.str} </h4>
        <h4>Dexterity : {character.dex}</h4>
        <h4>Faith : {character.fth}</h4>
        <h4>Intellect : {character.int}</h4>
      </div>
      <Button
        variant="contained"
        className="btn btn-default"
        onClick={handleSubmit}
      >
        Edit Character
      </Button>
    </div>
  );
};

export default ViewCharacter;
