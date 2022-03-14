import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    inputBox: {
      margin: '0px 5px',
    },
    square: {
      height: '30vh',
      backgroundColor: 'rgba(255,255,255,0.8)',
      textAlign: 'center',
      padding: '20px',
      color: 'black',
    },
  })
);
