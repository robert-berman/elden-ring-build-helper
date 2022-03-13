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
    setStr(event.target.value);
  };

  const handleDexChange = (event) => {
    setDex(event.target.value);
  };

  const handleIntChange = (event) => {
    setInt(event.target.value);
  };

  const handleFthChange = (event) => {
    setFth(event.target.value);
  };
  return (
    <Paper
      elevation={3}
      style={{
        display: 'flex',
        justifyContent: 'flexStart',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form id="new-character-form" onSubmit={handleSubmit}>
        <div>
          <TextField
            type="text"
            name="content"
            label="name"
            value={name}
            onChange={handleNameChange}
            className={classes.inputBox}
          />
          <TextField
            type="text"
            name="content"
            label="strength"
            value={str}
            onChange={handleStrChange}
            className={classes.inputBox}
          />
          <TextField
            type="text"
            name="content"
            label="dexterity"
            value={dex}
            onChange={handleDexChange}
            className={classes.inputBox}
          />
          <TextField
            type="text"
            name="content"
            label="intellect"
            value={int}
            onChange={handleIntChange}
            className={classes.inputBox}
          />
          <TextField
            type="text"
            name="content"
            label="faith"
            value={fth}
            onChange={handleFthChange}
            className={classes.inputBox}
          />
          <span>
            <Button
              variant="contained"
              className="btn btn-default"
              onClick={handleSubmit}
            >
              add your character!
            </Button>
          </span>
        </div>
      </form>
    </Paper>
  );
};

export default NewCharacter;
