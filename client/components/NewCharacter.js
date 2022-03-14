import React, { useEffect, useState } from 'react';
import { postCharacter } from '../store/characters';
import { useDispatch, useSelector } from 'react-redux';
import { me } from '../store';
import {
  Paper,
  TextField,
  Button,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { useStyles } from './newCharStyles';

const NewCharacter = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [name, setName] = React.useState();
  const [str, setStr] = React.useState();
  const [dex, setDex] = React.useState();
  const [int, setInt] = React.useState();
  const [fth, setFth] = React.useState();

  const classes = useStyles();

  const handleSubmit = () => {
    dispatch(
      postCharacter({
        userId: user.id,
        name: name,
        int: int,
        str: str,
        dex: dex,
        fth: fth,
      })
    );
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStrChange = (event) => {
    setStr(event.target.value.replace(/[^0-9]+/g, ''));
  };

  const handleDexChange = (event) => {
    setDex(event.target.value.replace(/[^0-9]+/g, ''));
  };

  const handleIntChange = (event) => {
    setInt(event.target.value.replace(/[^0-9]+/g, ''));
  };

  const handleFthChange = (event) => {
    setFth(event.target.value.replace(/[^0-9]+/g, ''));
  };
  return (
    <div style={{ height: '79vh' }}>
      <Paper elevation={3} className={classes.paperStyles}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div id="label" style={{ marginRight: '30px' }}>
              <h2>Name :</h2>
            </div>
            <TextField
              type="text"
              value={name}
              onChange={handleNameChange}
              className={classes.inputBox}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div id="label" style={{ marginRight: '30px' }}>
              <h3>Strength : </h3>
            </div>
            <TextField
              type="text"
              value={str}
              onChange={handleStrChange}
              className={classes.inputBox}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div id="label" style={{ marginRight: '30px' }}>
              <h3>Dexterity : </h3>
            </div>
            <TextField
              type="text"
              value={dex}
              onChange={handleDexChange}
              className={classes.inputBox}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div id="label" style={{ marginRight: '30px' }}>
              <h3>Intellect : </h3>
            </div>
            <TextField
              type="text"
              value={int}
              onChange={handleIntChange}
              className={classes.inputBox}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div id="label" style={{ marginRight: '30px' }}>
              <h3>Faith : </h3>
            </div>
            <TextField
              type="text"
              value={fth}
              onChange={handleFthChange}
              className={classes.inputBox}
            />
          </div>
        </div>
      </Paper>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
          margin: '10px',
        }}
      >
        <Button
          variant="contained"
          className="btn btn-default"
          onClick={handleSubmit}
          style={{ alignItems: 'center' }}
        >
          Submit Changes
        </Button>
      </div>
    </div>
  );
};

export default NewCharacter;
