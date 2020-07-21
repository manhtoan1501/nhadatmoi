import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { IconButton, Icon, Tooltip, Button, Card, CardActions, CardContent, Hidden } from '@material-ui/core'
import bad from '../../public/Image/bad.jpg';
import _ from 'lodash'

const styles = theme => ({
    button: {
        marginRight: '5px'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
                [theme.breakpoints.down('xs')]: {
                    border: '2px solid currentColor',
                },
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `3px 4px 5px 5px`,
        [theme.breakpoints.down('xs')]: {
            padding: `1px 1px 1px 1px`,
        },
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
})


class ButtonViews extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const images = [
            {
                url: 'http://noithatgiadinhbinhduong.com/wp-content/uploads/2017/09/gi%C6%B0%E1%BB%9Dng-g%C3%B5-%C4%91%E1%BB%8F.jpg',
                title: 'Giảm 10% Từ Đơn Hàng Thứ 2',
                width: '30%',
            },
            {
                url: 'https://i2.wp.com/dogoquoccuong.com/wp-content/uploads/2014/08/DSC09545.jpg?fit=3008%2C2000&ssl=1',
                title: 'Thiết Kế Theo Yêu Cầu',
                width: '40%',
            },
            {
                url: 'http://thicongdogohanoi.com/wp-content/uploads/2016/03/nhu-y-tay-hop-6mon.jpg',
                title: 'Đặt Hàng Không Giới Hạn',
                width: '30%',
            }
        ]
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <Hidden xsDown>
                    {
                        images.map(image => {
                            return (
                                <ButtonBase
                                    focusRipple
                                    key={image.title}
                                    className={classes.image}
                                    focusVisibleClassName={classes.focusVisible}
                                    style={{ width: image.width, fontSize: 30 }}
                                >
                                    <span
                                        className={classes.imageSrc}
                                        style={{ backgroundImage: `url(${image.url})` }}
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Typography color="inherit" className={classes.imageTitle}>
                                            {image.title}
                                            <span className={classes.imageMarked} />
                                        </Typography>
                                    </span>
                                </ButtonBase>
                            )
                        })
                    }
                </Hidden>
            </div>
        )
    }
}


ButtonViews.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonViews)
