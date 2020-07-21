import * as React from 'react'
import {
    InputBase,
    IconButton,
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Popover,
    Typography,
    Hidden,
} from '@material-ui/core';
import Router from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import EcoIcon from "@material-ui/icons/Eco";
import ViewList from "@material-ui/icons/ViewList";
import Moment from 'react-moment';
import GamepadIcon from '@material-ui/icons/Gamepad';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    inputbase: {
        width: '500px',
        height: 40,
        float: 'left',
        marginLeft: 10,
    },
    searchHome: {
        width: '100%',
        minHeight: '400px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        opacity: '1',
        // position: 'relative',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1")'
    },
    searchHomeBody: {
        position: 'absolute',
        top: 100,
        backgroundColor: 'white',
        maxWidth: '100%',
    },
    viewSearch: {
        display: 'inline-block',
        backgroundColor: '#1976d2',
        textAlign: 'center',
        height: 40,
        color: 'white',
        width: 60,
    },
    iconSearch: {
        fontSize: 25,
        marginTop: 8,
    },
    iconButton: {
        padding: '4px 16px',
        marginTop: 4,
        fontSize: 20,
    },
    listItem: {
        backgroundColor: '#e3f2fd',
        "&:hover": {
            // backgroundColor: '#90caf9',
        }
    },
    textItem: {
        color: '#1976d2',
    },
    popover: {
        pointerEvents: 'auto', // none
    },
}));

const SearchHomepage = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const onChangeWards = () => {
        if (event.key == "Enter" || event.keyCode == 13) {
            // onClickSearch();
        }
    };

    const imageBackground = [
        'https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1',
        'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
        'https://vatlieuxaydung.org.vn/Upload/48/Nam_2018/Thang_12/Ngay_19/vlxd.org_nguyentac2.jpg',
        'https://www.noithathoanmy.com.vn/blog/wp-content/uploads/2018/11/noi-that-go-phong-khach-dep.jpg',
    ];

    const suggestions = [
        { title: 'Giường ngủ hiện đại', link: '/bad' },
        { title: 'Giường ngủ cổ điển', link: '/bad' },
        { title: 'Bàn ăn 4 ghế', link: '/bad' },
        { title: 'Bàn ăn 6 ghế', link: '/bad' },
        { title: 'Bàn ăn hiện đại', link: '/bad' },
    ]

    const history = [
        { title: 'Giường ngủ', link: '/history' },
        { title: 'bàn ăn', link: '/history' },
        { title: 'tủ quần áo', link: '/history' },
        { title: 'tủ giày', link: '/history' },
        { title: 'tủ ghế nhà hàng', link: '/history' },
    ]

    const renderSuggestion = () => {
        return (
            <div style={{ width: '570px', pointerEvents: 'auto' }}>
                <Typography
                    align='left' variant='subtitle2'
                    style={{ padding: '4px 8px', cursor: 'default', display: 'inline', color: '#1976d2', fontSize: 14 }}>
                    TỪ KHÓA HOT
                </Typography>
                <IconButton style={{ padding: 4, cursor: 'default', display: 'inline', float: 'right', }}>
                    <CloseIcon onClick={() => setOpen(false)} />
                </IconButton>
                {
                    suggestions.map((item, count) => {
                        return (
                            <ListItem button key={count} style={{ fontSize: 14, padding: '4px 10px' }}>
                                {item.title}
                            </ListItem >
                        );
                    })
                }
            </div>
        );
    }

    const renderHistory = () => {
        return (
            <div style={{ width: '570px', pointerEvents: 'auto' }}>
                <Typography
                    align='left' variant='subtitle2'
                    style={{ padding: '4px 8px', cursor: 'default', display: 'inline', color: '#1976d2', fontSize: 14 }}>
                    LỊCH SỬ TÌM KIỂM
                </Typography>
                <Typography
                    align='right' variant='subtitle2'
                    style={{ padding: 4, color: 'red', cursor: 'default', display: 'inline', float: 'right', }}
                >
                    Xóa
                </Typography>
                {history.length ? (
                    history.map((item, count) => {
                        return (
                            <ListItem button key={count} style={{ fontSize: 14, padding: '4px 10px' }}>
                                {item.title}
                            </ListItem >
                        );
                    })
                ) : (
                        <ListItem button key={count}>
                            Không có lịch sử tìm kiếm
                        </ListItem >
                    )}
            </div>
        );
    }

    const handlePopoverOpen = (event, index) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    return (
        <div>
            <Grid container spacing={0} alignItems="center" justify='center' className={classes.searchHome} >
                <Grid item xs={12} className={classes.searchHomeBody} onClick={handlePopoverOpen}>
                    <InputBase
                        className={classes.inputbase}
                        placeholder={'Tìm sản phẩm mong muốn ...'}
                        inputProps={{ 'aria-label': 'Tìm sản phẩm mong muốn ...' }}
                        onKeyUp={e => onChangeWards(e)}
                    />
                    <div className={classes.viewSearch}>
                        <SearchIcon className={classes.iconSearch} />
                        {/* </IconButton> */}
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0} alignItems="center" justify='center'>
                <Grid item xs={12}>
                    <Popover
                        style={{ borderRadius: 0 }}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Ghim
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }} // Vi tri hien thi
                    // onMouseLeave={handlePopoverClose}
                    >
                        {renderSuggestion()}
                        <Divider />
                        {renderHistory()}
                    </Popover>
                </Grid>
            </Grid>
        </div>

    );
};

export default SearchHomepage;
