import { makeStyles, Theme } from '@material-ui/core/styles';

const headerStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarItem: {
        marginRight: theme.spacing(1)
    },
    typography: {
        padding: theme.spacing(2),
    },
    inline: {
        display: "inline"
    }
}));


export {
    headerStyles,
}
