import { createMuiTheme } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

const zIndexMax = 999999999999999;
const dataEmoji = [
  {
    native: '😃'
  },
  {
    native: "😀"
  },
  {
    native: "😁"
  },
  {
    native: '😂'
  },
  {
    native: '😃'
  },
  {
    native: "😄"
  },
  {
    native: "😅"
  },
  {
    native: '😆'
  },
  {
    native: '😃'
  },
  {
    native: "😇"
  },
  {
    native: "😈	"
  },
  {
    native: '🎅🏼'
  },
  {
    native: '😉'
  },
  {
    native: '😋'
  },
  {
    native: '😌'
  },
  {
    native: '😍'
  },
  {
    native: '😎'
  },
  {
    native: '😏'
  },
  {
    native: '😐'
  },
  {
    native: '😑'
  },
  {
    native: '😒'
  },
  {
    native: '😓	'
  },
  {
    native: '😔'
  },
  {
    native: '😕'
  },
  {
    native: '😖'
  },
  {
    native: '😗'
  },
  {
    native: '😘'
  },
  {
    native: '😙'
  },
  {
    native: '😚'
  },
  {
    native: '😛'
  },
  {
    native: '😜'
  },
  {
    native: '😝'
  },
  {
    native: '😞'
  },
  {
    native: '😟'
  },
  {
    native: '😠'
  },
  {
    native: '😡'
  },
  {
    native: '😢'
  },
  {
    native: '😣'
  },
  {
    native: '😤'
  },
  {
    native: '😥'
  },
  {
    native: '😦'
  },
  {
    native: '😧'
  },
  {
    native: '😨'
  },
  {
    native: '😩'
  },
  {
    native: '😪'
  },
  {
    native: '😫'
  },
  {
    native: '😬'
  },
  {
    native: '😭'
  },
  {
    native: '😮'
  },
  {
    native: '😯	'
  }, {
    native: '😰'
  },
  {
    native: '😱'
  },
  {
    native: '😲'
  },
  {
    native: '😳'
  },
  {
    native: '😴'
  },
  {
    native: '😵'
  },
  {
    native: '😶'
  },
  {
    native: '😷'
  },
  {
    native: '🙁'
  },
  {
    native: '🙂'
  },
  {
    native: '😱'
  },
  {
    native: '😲'
  },
  {
    native: '😳'
  },
  {
    native: '😴'
  },
  {
    native: '😵'
  },
  {
    native: '😶'
  },
  {
    native: '😷'
  },
  {
    native: '🙁'
  },
  {
    native: '🙂'
  },
  {
    native: '🙃'
  },
  {
    native: '🙄'
  },
  {
    native: '🤐'
  },
];

const arrChat = [
  {
    message: "Nội thất Dodo xin chào quý khách",
    date: "1570164019224",
    image:  {
      url: '',
      height: "",
      width: ''
    },
    type: "admin"
  }
];

const giphyDefault = [
  { 
    image: {
      url: 'https://media3.giphy.com/media/mlvseq9yvZhba/giphy.gif?cid=13984785c0b0951827d991e0244802c1aa7a37da3f7842a2&rid=giphy.gif',
      height: '220',
      width: "180"
    }
  },
  { 
    image: {
      url: "https://media0.giphy.com/media/WXB88TeARFVvi/giphy.gif?cid=13984785c0b0951827d991e0244802c1aa7a37da3f7842a2&rid=giphy.gif",
      height: '230',
      width: "150"
    }
  },
  { 
    image: {
      url: 'https://media3.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif',
      height: '250',
      width: "220"
    }
  },
  { 
    image: {
      url: "https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
      height: '210',
      width: "190"
    }
  },
  { 
    image: {
      url: "https://media2.giphy.com/media/33OrjzUFwkwEg/giphy.gif?cid=13984785c0b0951827d991e0244802c1aa7a37da3f7842a2&rid=giphy.gif",
      height: '250',
      width: "240"
    }
  },
  { 
    image: {
      url: "https://media3.giphy.com/media/mCRJDo24UvJMA/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
      height: '200',
      width: "150"
    }
  },
  { 
    image: {
      url: "https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
      height: '250',
      width: "200"
    }
  },
  { 
    image: {
      url: 'https://media3.giphy.com/media/kiBcwEXegBTACmVOnE/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif',
      height: '250',
      width: "200"
    }
  },
  { 
    image: {
      url: "https://media2.giphy.com/media/QvBoMEcQ7DQXK/giphy.gif?cid=139847857f30fe5e8c9c8f4a605b72af5a4d8c7216516a01&rid=giphy.gif",
      height: '250',
      width: "200"
    }
  }
];

const themeInput = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        position: "initial",
      },
      fullWidth: {
        minHeight: "50px",
        paddingLeft: "10px",
        fontSize: "15px",
      }
    },
    MuiInputBase: {
      inputMultiline: {
        padding: '4px'
      },
    }
  },
});

const themeTextFieldAdmin = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        borderRadius: "20px!important",
      },
    },
    MuiOutlinedInput: {
      multiline: {
        borderRadius: "20px!important",
      },
      inputMultiline: {
        fontSize: "13px"
      }
    }
  }
});

const themeTextHeader = createMuiTheme({
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: "white",
        fontSize: "30px",

      },
      root: {
        color: "white",
      }
    },
  }
});

const themeInputBase = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        fontSize: "13px",
      },
    }
  }
});

const themeTextFieldUser = createMuiTheme({
  direction: 'rtl',
  overrides: {
    MuiInput: {
      root: {
        borderRadius: "20px!important",
      },
    },
    MuiOutlinedInput: {
      multiline: {
        borderRadius: "20px!important",
      },
      inputMultiline: {
        fontSize: "13px"
      }
    }
  },
  
});

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: "#444",
  },
  tooltip: {
    backgroundColor: "#444",
  },
}));

const StyledBadge = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 550,
      zIndex: 900,
    },
    inputWrapper: {
      height: "32px",
      width: "32px",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      marginTop: "5px",
    },
    fileInput: {
      cursor: "pointer",
      position: "absolute",
      top: "0",
      right: "0",
      zIndex: 99,
      fontSize: "20px",
      opacity: "0", 
    },
    textAdmin: {
      backgroundColor: "#DBF4FD",
      color: "white"
    },
    textFieldUserChatContent: {
      marginLeft: "36px", 
      textAlign: "right"
    },
    textUser: {
      backgroundColor: "white",
      color: "black",
    },
    textFieldChatContent: {
      marginLeft: "36px"
    },
    timeWork: {
      color: "white"
    },
    itemEmoji: { 
      display: 'inline-block', 
      fontSize: '25px', 
      cursor: "pointer",
      padding: '2px',
      border: "1px solid white",
    },
    overflowHeightEG: {
      overflowY: "auto", 
      padding: "8px 16px",
      [theme.breakpoints.down('xs')]: {
        height: 'calc(100vh - 126px)!important'
      },
    },
    openEG: {
      overflowY: "auto", 
      padding: "8px 16px",
      [theme.breakpoints.down('xs')]: {
        height: 'calc(100vh - 320px)!important'
      },
    },
    overflowHeightEmoji: {
      overflowX: 'auto',
      height: '155px',
      padding: "4px",
      width: "350px"
    },
    viewSizeGiphy: {
      overflowX: 'auto',
      height: '125px'
    },
    viewWidthGiphy: {
      width: "350px"
    },
    searchGiphy: {
      display: 'flex',
      margin: "0px 0px 4px 12px",
      borderRadius: '4px',
      backgroundColor: "#f0f0f0",
      height: "28px",
      width: "308px",
      [theme.breakpoints.down('xl')]: {
        margin: "0px 0px 4px 16px",
        width: "308px",
      },
      [theme.breakpoints.down('lg')]: {
        margin: "0px 0px 4px 12px",
        width: "308px",
      },
      [theme.breakpoints.down('md')]: {
        margin: "0px 0px 4px 20px",
        width: "308px",
      },
      [theme.breakpoints.down('sm')]: {
        margin: "0px 0px 4px 22px",
        width: "306px",
      },
    },
    inputBaseGiphy: {
      marginleft: theme.spacing(1),
      flex: 1
    },
    itemGiphy: {
      width: "78px", 
      height: "55px", 
      display: 'inline-block', 
      padding: '2px'
    },
    imgListGiphy: {
      width:"100%", 
      height: "100%", 
      borderRadius: '4px',
    },
    viewContentImageTake: {
      maxWidth: "250px", 
      height: `auto`, 
      padding: "5px 0px 5px 0px",
      float: "left"
      
    },
    viewContentImageSend: {
      maxWidth: "250px", 
      height: `auto`, 
      float: "right",
      padding: "5px 0px 5px 0px",
    },
    imgGiphy: {
      width:"100%", 
      height: "100%", 
    },
    errInternet: {
      padding: "20px",
      color: "red",
      fontSize: '13px',
    },
    texting: {
      fontSize: '13px',
      color: '#aaa',
      padding: "5px",
      textAlign: 'right'
    },
    iconWaring: {
      fontSize:"20px",
    },

    sizeSearchIcon: { 
      fontSize: "20px",
      margin: "4px",
      color: "#aaa"
    },
    viewConversation: { 
      display: "block" 
    },
    buttonEmojiGiphy: {
      border: '1px solid white', 
      backgroundColor: "#045EA8",
      color: 'white', 
      padding: "5px 10px",
      borderRadius: "5px", 
      marginLeft: "5px"
    },
    marinButtonEmojiGiphy: {
      marginBottom: "5px",
      marginTop: "5px"
    },
    iconSearch: {
      padding: 2,
    },
    inputBase: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "100%",
      position: "absolute",
      borderTopLeftRadius: "0px",
      borderTopRightRadius: "0px",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      boxShadow: "0px -1px 3px #e8e8e8",
      outline: 'none',
      bottom: "0px",
      ':before': {
        border: '0px!important'
      }
    },
    input: {
      marginLeft: theme.spacing(1),
      height: 50 ,
      flex: 1,
    },
    divider: {
      height: 28,
      margin: 4,
    },
    inputText: {
      width: "300px",
    },
    typography: {
      padding: theme.spacing(2),
    },
    viewChatImpostant: {
      zIndex: 9999999999999,
    },
    viewChat: {
      borderRadius: "4px 4px",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
      backgroundColor: "white",
      zIndex: 900,
      height:"550px", 
      width: "350px",
      position: "fixed",
      right: '80px',
      bottom: "15px",
      boxShadow: "0px -1px 3px #444",
      [theme.breakpoints.down('sm')]: {
        position: "fixed",
        right: '14px',
        bottom: "80px",
      },
      [theme.breakpoints.down('xs')]: {
        position: "fixed",
        right: '0',
        bottom: "0",
        width: '100%',
        height: '100vh'
      },
    },
    emojiGiphy: {
      height:"210px", 
      width: "350px",
      textAlign: 'center',
      display: "block",
      borderTop: '1px solid gray',
    },

    textField: {
      position: "absolute",
      bottom: "0px"
    },
    exampleWrapper: {
      position: 'fixed',
      right: "60px", 
      bottom: "2px",
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    avatarAdminText: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    sizeAvatarSmall: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    positionAvatar: {
      position: 'fixed',
      right: "15px", 
      bottom: "80px",
      zIndex: 999999999999999,
    },
    viewAvatarChatContent: {
      float: "left",
      margin: "10px 0px 0px 0"
    },
    radioGroup: {
      margin: theme.spacing(1, 0),
    },
    avatar: {
      backgroundColor: "blue",
    },
    media: {
      height: 100,
      backgroundColor: "blue"
    },
    header: {
      backgroundColor: "#1a75ff",
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
      color: "white"
    },
    speedDial: {
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
      },
    },
    sizeIcon: {
      fontSize: '27px'
    },
    textSizeNewDate: {
      fontSize: "13px",
      color: 'black',
      padding: "4px 0px"
    },
    renderAvatar: {
      position: 'fixed',
      right: "15px",
      zIndex: zIndexMax,
    },
    renderAvatarBorderRadius: {
      boxSizing: "content-box",
      position: 'fixed',
      right: "15px",
      zIndex: zIndexMax,
      borderRadius: "50%",
      border: "2px solid #59a832" 
    },
    clearFloat: { 
      clear: "both" 
    },
    viewTextTake: {
      maxWidth: 'calc(100% - 20px)', 
      height: 'auto', 
      background: "rgb(242, 246, 249)",
      borderRadius: '20px', 
      padding: '10px 15px', 
      margin: '5px 0 5px 0', 
      fontSize: '15px', 
      wordWrap: 'break-word', 
      wordBreak: 'break-word', 
      float: "left"
    },
    viewTextSend: {
      maxWidth: 'calc(100% - 20px)', 
      height: 'auto', 
      background: 'rgb(219, 244, 253)',
      borderRadius: '20px', 
      padding: '10px 15px', 
      margin: '5px 0 5px 0', 
      fontSize: '15px', 
      wordWrap: 'break-word', 
      wordBreak: 'break-word', 
      float: 'right'
    }
  }),
);

export {
  dataEmoji,
  arrChat,
  giphyDefault,
  themeTextFieldAdmin,
  themeTextFieldUser,
  themeTextHeader,
  themeInput,
  StyledBadge,
  themeInputBase,
  zIndexMax,
  useStylesBootstrap,
  useStyles
};
