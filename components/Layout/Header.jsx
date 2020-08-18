import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'next/link'
import { I18n } from 'react-redux-i18n';
import {
  IconButton,
  Icon,
  Tooltip,
  Button,
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  Popover,
} from '@material-ui/core';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import HttpsIcon from '@material-ui/icons/Https';
import CloseIcon from '@material-ui/icons/Close';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { titles } from '../../constants/index';
import GamepadIcon from '@material-ui/icons/Gamepad';
import ModalLogin from '../Login/Modal';
import moment from 'moment';
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
  { name: 'Giường ngủ', link: 'giuong-ngu' },
  { name: 'Tủ quàn áo', link: 'tu-quan-ao' },
  { name: 'Bàn trà phòng khách', link: 'ban-tra-phong-khach' },
  { name: 'Kệ tủ tivi', link: 'ke-tivi' },
  { name: 'Bàn ăn', link: 'ban-an'},
  { name: 'Bàn trang điểm', link: 'ban-trang-diem'},
  { name: 'Tủ giày', link: 'tu-giay'},
  { name: 'Bàn trang điểm', link: 'ban-trang-diem' },
  { name: 'Sản phẩm', link: 'san-pham' },
  { name: 'Tin tức', link: 'tin-tuc' },
]
const Actions = (props) => {
  const classes = useStyles();
  const [countMenu, setCountMenu] = React.useState(null);
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
      <Grid item xs={2}>
        <Typography color='inherit'
          aria-owns={openMenu ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          style={{ color: 'white', fontWeight: 500, padding: '0 20px', display: 'flex', alignItems: 'center' }}
        >
          <GamepadIcon style={{ padding: '0 4px' }} />
            <Link href="/">
              <a style={{color: 'white'}}>
                Nội Thất Dodo
              </a>
            </Link>
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {menus.map((element, index) => {
          const {name, link} = element;
          return (
            <Typography key={index} className={classes.menus}>
              <Link href={`/${link}`}>
                <a style={{color: 'white'}}>{name}</a>
              </Link>
            </Typography>
          );
        })}
      </Grid>
      <Grid item xs={2}>
        <ModalLogin />
      </Grid>
    </Grid>
  )
};

export default Actions;
