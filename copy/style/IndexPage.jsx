import { createMuiTheme } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

const indexPageStyle = createMuiTheme({
    button: {
        width: '300px',
        float: 'left',
        textAlign: 'center',
        padding: '0 30px',
        // @include breakpoint(mdDown) {
        //   padding: '0 20px',
        // }
        button: {
            fontFamily: '$fontFamily',
            fontSize: '14px',
            fontWeight: '900',
            margin: '-15px 0 30px 0',
            color: '#aaa',
            padding: '10px 15px!important',
            cursor: 'pointer',
            background: '#fff',
            width: '100%',
            borderRadius: '4px',
            border: '2px solid #e6e6e6',
            //   &:hover {
            //     background: '#f0f0f0',
            //   }
        },
    }
})

export {
    indexPageStyle,
}