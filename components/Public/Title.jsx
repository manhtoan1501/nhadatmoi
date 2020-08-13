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
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import HttpsIcon from '@material-ui/icons/Https';
import _ from 'lodash';


const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 25,
        fontWeight: 600,
        cursor: 'default',
        color: '#1976d2'
    },
}));


const Actions = (props) => {
    const classes = useStyles();
    const { title } = props;
    return (
        <Typography className={classes.title}>
            {title}
        </Typography>
    )
};

export default Actions;
