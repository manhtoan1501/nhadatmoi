import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { Grid, Typography } from '@material-ui/core';
import GamepadIcon from '@material-ui/icons/Gamepad';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  rootPopover: {
    pointerEvents: 'none',
    position: 'absolute',
    marginTop: 10,
    overflow: 'auto',
  },
  menus: {
    display: 'inline-block',
    color: 'white',
    padding: 8,
    // fontWeight: 500,
    cursor: 'pointer',
    // fontFamily: 'Sans-serif',
    "&:hover": {
      // color: '#33eaff',
      textDecoration: 'underline',
    }
  },
  listItem: {
    display: 'block',
    backgroundColor: '#e3f2fd',
    pointerEvents: 'auto',
    fontSize: 14,
    padding: 0,
    overflowX: 'hidden',
    "&:hover": {
      backgroundColor: '#90caf9',
    }
  },
  title: {
    display: 'inline',
    cursor: 'default',
    color: 'white',
    fontWeight: 400,
    fontSize: 14,
    padding: '0 12px',
    // borderLeft: '2px solid white',
  },
  header: {
    height: 40,
    width: '100%',
    backgroundColor: '#1976d2'
  },
  divider: {
    height: 28,
    margin: 4,
    color: 'white',
    backgroundColor: 'white',
    display: 'inline',
  },
  textItem: {
    color: '#1976d2',
    fontSize: 14,
    paddingRight: 20,
  },
  root: {
    display: 'inline-block',
    zIndex: 99999988888888888,
  },
  paper: {
    marginRight: theme.spacing(2)
  },
}));

const menus = [
  { name: 'Tin tức', link: 'tin-tuc' },
]
const Actions = (props) => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);
  const anchorRef = React.useRef(null);
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(openMenu);
  React.useEffect(() => {
    if (prevOpen.current === true && openMenu === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = openMenu;
  }, [openMenu]);

  return (
    <Grid container spacing={0} className={classes.header} alignItems='center' justify='center' direction='row' >
      <Grid item xs={8}>
        {menus.map((element, index) => {
          const { name, link } = element;
          return (
            <Typography key={index} className={classes.menus}>
              <Link href={`/${link}`}>
                <a style={{ color: 'white' }}>{name}</a>
              </Link>
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  )
};

export default Actions;
