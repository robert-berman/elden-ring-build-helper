import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    inputBox: {
      margin: '0px 5px',
    },
    red: {
      color: 'red',
    },
    label: {
      display: 'flex',
    },
    itemStuff: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    square: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      textAlign: 'center',
      height: '300px',
      width: '300px',
    },
    weaponImg: {
      height: '300px',
      width: '300px',
    },
  })
);
