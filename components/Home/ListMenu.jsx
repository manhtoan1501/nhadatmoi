import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import {
    List,
    Divider,
    ListItemIcon,
    ListItem,
    ListItemText,
    Collapse,
    Button,
    ListSubheader,
    Popover,
    Typography,
    MenuItem,
    Tooltip,


} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import GamepadIcon from '@material-ui/icons/Gamepad';
import { listMenu } from '../../constants/index';

const useStyles = makeStyles((theme) => ({
    listItem: {
        backgroundColor: '#e3f2fd',
        "&:hover": {
            // backgroundColor: '#90caf9',
        }
    },
    textItem: {
        color: '#1976d2',
        fontSize: 14,
        paddingRight: 20,
    },
    arrow: {
        color: 'orange',
    },
    tooltip: {
        backgroundColor: 'orange',
        color: '#1976d2',
        cursor: 'pointer'
    },
}));

const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
    },
}));

function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
    return <Tooltip enterNextDelay={0} enterTouchDelay={0} placement='right-start' interactive arrow classes={classes} {...props} />;
}

const RenderXX = (props) => {
    const { rooms } = props;
    const classes = useStyles();
    return (
        <List
            component="nav"
            className={classes.popover}
            aria-labelledby="nested-list-subheader"
            style={{ padding: 0, pointerEvents: 'auto', corsor: 'pointer' }}
        >
            {
                rooms.map((element, count) => {
                    const { room } = element;
                    return <div key={count}>
                        <ListItem
                            autoFocus={true}
                            button={true}
                            onClick={(count) => setHoverMenu(count)}
                            style={{ backgroundColor: '#90caf9', height: 35, padding: '0 4px' }}
                        >
                            <GamepadIcon style={{ fontSize: 25, color: '#1976d2', padding: 4 }} />
                            <Typography className={classes.textItem}>
                                {room}
                            </Typography>
                        </ListItem >
                        <Divider />
                    </div>
                })
            }
        </List>
    );
}

function CustomizedTooltips(props) {
    const { item } = props;
    const { rooms } = item;
    const classes = useStyles();
    return (
        <div>
            <BootstrapTooltip title={<RenderXX rooms={rooms} />}>
                <Typography className={classes.textItem}>
                    {props.title}
                </Typography>
            </BootstrapTooltip>
        </div>
    );
}

const NestedList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [indexMenu, setIndex] = React.useState(null);
    const [countMenu, setCount] = React.useState(null);
    const [indexItem, setIndexItem] = React.useState(0);
    const handlePopoverOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
        setCount(index);
        setIndex(index);
        setIndexItem(0)
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setOpen(false);
        setIndex(null);
    };

    const setHoverMenu = (count) => {
        setIndexItem(count)
    }

    const onWheel = () => {
        setAnchorEl(null);
        setOpen(false);
        setIndex(null);
    }

    const id = open ? indexMenu : undefined;
    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            // className={classes.root}
            style={{ padding: 0 }}
        >
            {listMenu.map((item, index) => {
                const { rooms } = item
                return (
                    <div key={index} onWheel={onWheel} >
                        <ListItem
                            className={classes.listItem}
                            button
                            id={id}
                            style={{
                                backgroundColor: countMenu === index ? '#90caf9' : '#e3f2fd',
                                height: 35,
                                padding: '0 4px',
                                pointerEvents: 'auto'
                            }}
                        >
                            <GamepadIcon style={{ fontSize: 25, color: '#1976d2', padding: 4 }} />
                            {/* <Typography className={classes.textItem}>
                                {item.title}
                            </Typography> */}
                            <CustomizedTooltips title={item.title} item={item} className={classes.textItem} />
                        </ListItem>
                        <Divider />
                        {/* {indexMenu === index &&
                            <Popover
                                id={id}
                                className={classes.popover}
                                style={{ pointerEvents: 'none' }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{ vertical: 'right', horizontal: 'right' }} // Ghim
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }} // Vi tri hien thi
                                onMouseLeave={handlePopoverClose}
                            >
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    style={{ padding: 0, pointerEvents: 'auto', corsor: 'pointer' }}
                                >
                                    {
                                        rooms.map((element, count) => {
                                            return <div key={count}>
                                                <ListItem
                                                    autoFocus={true}
                                                    button={true}
                                                    onClick={(count) => setHoverMenu(count)}
                                                    style={{ backgroundColor: indexItem === count ? '#90caf9' : '#e3f2fd', height: 35, padding: '0 4px' }}
                                                    onMouseEnter={() => setHoverMenu(count)}
                                                >
                                                    <GamepadIcon style={{ fontSize: 25, color: '#1976d2', padding: 4 }} />
                                                    <Typography className={classes.textItem}>
                                                        {element.room}
                                                    </Typography>
                                                </ListItem >
                                                <Divider />
                                            </div>
                                        })
                                    }
                                </List>
                            </Popover>
                        } */}
                    </div>
                );
            })}
        </List >
    );
}

export default NestedList;
