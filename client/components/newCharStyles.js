import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    inputBox: {
      margin: '0px 5px',
    },
    paperStyles: {
      display: 'flex',
      height: '45vh',
      flexDirection: 'column',
      alignItems: 'center',
      width: '45vw',
      opacity: '0.6',
      margin: '10px auto',
    },
  })
);
