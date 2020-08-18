import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
}));

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
                            onMouseEnter={(event) => handlePopoverOpen(event, index)}
                            style={{
                                backgroundColor: countMenu === index ? '#90caf9' : '#e3f2fd',
                                height: 35,
                                padding: '0 4px',
                                pointerEvents: 'auto'
                            }}
                        >
                            <GamepadIcon style={{ fontSize: 25, color: '#1976d2', padding: 4 }} />
                            <Typography className={classes.textItem}>
                                {item.title}
                            </Typography>
                        </ListItem>
                        <Divider />
                        {indexMenu === index &&
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
                        }
                    </div>
                );
            })}
        </List >
    );
}

export default NestedList;
