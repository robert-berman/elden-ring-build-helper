import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    inputBox: {
      margin: '0px 5px',
    },
    background: {
      backgroundImage: `url(/background.png)`,
      backgroundSize: '100vw 100vh',
      backgroundRepeat: 'no-repeat',
      fontFamily: '"EB Garamond", serif',
      color: 'white',
      '& .a': {
        textDecoration: 'none',
      },
    },
    square: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      textAlign: 'center',
      paddingBottom: '2px',
    },
    weaponImg: {
      height: '200px',
      width: '200px',
    },
  })
);
