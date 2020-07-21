import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
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

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
    rootPopover: {
        pointerEvents: 'none',
        position: 'absolute',
        marginTop: 10,
        overflow: 'auto',
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
    }
}));


const Actions = (props) => {
    const classes = useStyles();
    const [countMenu, setCountMenu] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = (index) => {
        setOpenMenu(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpenMenu(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpenMenu(false);
        }
    }

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
                    <GamepadIcon style={{ padding: '0 4px' }} /> Nội Thất Dodo
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <div className={classes.root}>
                    <Typography
                        ref={anchorRef}
                        aria-controls={openMenu ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handleToggle}
                        className={classes.title}
                    // style={{ textDecoration: indexOpen === index ? 'underline ' : 'none' }}
                    // onMouseLeave={popoverClose}
                    >
                        Button
                    </Typography>
                    <Popper
                        open={openMenu}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                        style={{ zIndex: 9999 }}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={openMenu}
                                            id="menu-list-grow"
                                            onKeyDown={handleListKeyDown}
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Grid>
            <Grid item xs={2}>
                <ModalLogin />
            </Grid>
        </Grid>
    )
};

export default Actions;
