import React from 'react';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import { ThemeProvider } from '@material-ui/core/styles';
import { Element , animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import _ from 'lodash';
import { 
  Grid, 
  InputBase, 
  Fade,
  Typography, 
  Paper, 
  CardHeader,
  Avatar, 
  Divider, 
  Input, 
  IconButton,
  Hidden,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import { 
  dataEmoji, 
  giphyDefault, 
  useStyles,
  themeTextFieldAdmin, 
  themeTextFieldUser, 
  StyledBadge,
  themeInput,
  themeInputBase,
  useStylesBootstrap, 
} from "./constant";
import { create } from 'jss';
import rtl from 'jss-rtl';
import axios, {Method} from "axios";
import {apiBaseURL} from "../../constants";
import "cross-fetch/polyfill";
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import ApolloClient from "apollo-boost";
import {apolloClient} from "../../utils";
import { CREATE_MESSAGE } from "../../graphql/chat/mutation";
import { GET_LIST_MESSAGE, GET_MESSAGE_BY_ID } from "../../graphql/chat/queries";
const client = axios.create({ baseURL: apiBaseURL, timeout: 30000 });
import {FunctionComponent} from "react";
import moment from "moment";
import 'moment/locale/es';
moment.locale('vi');
// @ts-ignore
import { jssPreset } from '@material-ui/core/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function BootstrapTooltip(props: TooltipProps) {
  const classes = useStyles()
  return <Tooltip arrow classes={classes} {...props} />;
};

interface ChatProps {
  userLogin: string
};
interface Conversation {
  id: string
  target: {
    id: string
    avatar: string
    first_name: string
    last_name: string
    status: string
    last_activity: string
  }
  chat: Chat[],
  created_at: string
  updated_at: string
};

interface Chat {
  id: string
  send_user_id: string
  message: {
    text: string
    attachment: {
      type: string
      payload:{
        url: string
      }
    }
  }
  status_check: number
  send_at: string
  read_at: string
};

interface Conversations {
  conversations: Edges[]
};
interface Edges {
  node: {
    id: string
    target: {
      id: string
      avatar: string
      first_name: string
      last_name: string
      status: string
      last_activity: string
    }
  }
}[];

const Chat: FunctionComponent<ChatProps> = (props: ChatProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const [internet, setInternet] = React.useState<boolean>(true);
  const [texting, setTexting] = React.useState<boolean>(false);
  const [giphyData, setGiphyData] = React.useState<any>();
  const [openEmojiGiphy, setOpenEmojiGiphy] = React.useState<boolean>(false);
  const [valueSearchGiphy, setValueSearchGiphy] = React.useState("");
  const [avatarImage, setAvatarImage] = React.useState("https://image.crisp.chat/avatar/operator/da8d4459-5ea3-4119-bca1-9170f49ee69c/240/?1585999578742&quot");
  let   [valueInput, setValueInput] = React.useState("");
  const [viewEmoji, setViewEmoji] = React.useState(false);
  const [reload, setReload] = React.useState(true);
  const [checkLogin, setCheckLogin] = React.useState<boolean>(true);
  const [userId, setUserId] = React.useState("");
  const [conversations, setConversations] = React.useState<Conversations>();
  const [conversation, setConversation] = React.useState<Conversation>();
  const [chat, setChat] = React.useState<Chat[]>([]);
  const [name, setName] = React.useState("");
  const [last_activity, setLastActivity] = React.useState("");
  const [chatId, setChatId] = React.useState("");

  const onCloseChat = () => {
    setOpenEmojiGiphy(false)
    setOpen(false)
  };

  const checkUserLogin = () => {
    if (props.userLogin) {
      setCheckLogin(true)
    } else {
      setCheckLogin(false)
    }
  };

  const sendMessageChat = async (value: string, url: string)=> { 
    chat.push({
      id: chatId,
      send_user_id: props.userLogin,
      message: {
        text: value,
        attachment: {
          type: "",
          payload: {
            url: url
          },
        },
      },
      status_check: 0,
      send_at: String(new Date().getTime()),
      read_at: String(new Date().getTime()),
    })

    setChat(chat)

    apolloClient.mutate({mutation: CREATE_MESSAGE, variables: {
      "input": {
        "target": userId,
        "message": {
          "text": `${value}`,
          "attachment": {
            "type": "",
            "payload": {
              "url" : `${url}`
            }
          }
        }
      }
    }})
      .then((response: any) => {
    })
    setReload(!reload)
    setValueInput("")
    setScrollTo()
  };

  const renderHeader = () => {
    return (
      <div >
          <CardHeader
            className={classes.header} 
            avatar={
              <StyledBadge
                overlap="circle"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="standard"
              >
                <Avatar src={avatarImage} className={classes.sizeAvatarSmall} alt="nhadatmoi.net" />
              </StyledBadge>
            }
            title={name}
            subheader={ 
              <Typography variant="caption" align="center" className={classes.timeWork}>
                Hoạt động: {moment(Number(last_activity)).format('DD/MM/YYYY')}
              </Typography>
            }
            action={
              <IconButton color='inherit' aria-label="settings" onClick={() => onCloseChat()} >
                <CloseIcon/>
              </IconButton>
            }
          />
      </div>
    )
  };

  const searchGiphy = async (event: any)=>  { 
    setValueSearchGiphy(event.target.value)
    let url = `https://api.giphy.com/v1/gifs/search?api_key=UgTMyvovmg74m8fPN6qYiB623nwS1IPc&q=${event.target.value}&limit=20&offset=0&rating=G&lang=vi`
    .then(function (response) {
      setGiphyData(response.data.data)
    })
  };

  let dataSearch: any = [];
  if(Array.isArray(giphyData)){
    giphyData.map((item: any, index: number) => {
      dataSearch.push({ 
        image: {
          url: item.images.fixed_width.url,
          height: item.images.fixed_width.height,
          width: item.images.fixed_width.width,
        }})
    })
  };
  
  // Gửi ảnh emoji giphy 
  const setItemGiphy = (index: number, name: string) => {
    setOpenEmojiGiphy(!openEmojiGiphy)
    if(name == "giphyDefault") {
      sendMessageChat("", giphyDefault[index].image.url)
    } else if ( name == "dataSearch") {
      sendMessageChat("", dataSearch[index].image.url)
    }
  };

  const onClickEmoji = (index: number) => {
    valueInput = valueInput +  dataEmoji[index].native
    setValueInput(valueInput)
  };

  const renderEmoji = () => {
    return ( 
      <div className={classes.overflowHeightEmoji}>
        {dataEmoji.map((item: any, index: number) => {
          return (
            <div 
              onClick={() => onClickEmoji(index)} 
              key={index} 
              className={classes.itemEmoji}
            >{item.native}</div>
          )
        })}
      </div>
    )  
  };

  const renderGiphy = () => {
    return (
      <div className={classes.viewWidthGiphy} >
        <div className={classes.searchGiphy}>
          <SearchIcon className={classes.sizeSearchIcon} />
          <ThemeProvider theme={themeInputBase}>
            <InputBase
              onChange={(e) => searchGiphy(e)}
              className={classes.inputBaseGiphy}
              placeholder="Tìm kiếm ..."
            />
          </ThemeProvider>
        </div>
        <div className={classes.viewSizeGiphy}>
          {valueSearchGiphy 
            ? dataSearch.map((item: any, index: number) => {
                return (
                  <div className={classes.itemGiphy} >
                    <img 
                      className={classes.imgListGiphy} 
                      alt="giphy" 
                      src={item.image.url} 
                      onClick={() => setItemGiphy(index, "dataSearch")} 
                    />
                  </div>
                )
              })
            : giphyDefault.map((item: any, index: number) => { // view giphy default
                return (
                  <div className={classes.itemGiphy} >
                    <img 
                      className={classes.imgListGiphy} 
                      alt="giphy" 
                      src={item.image.url} 
                      onClick={() => setItemGiphy(index, "giphyDefault")} 
                    />
                  </div>
              )})
          }
        </div>
      </div>
    )
  };

  const renderEmojiGiphy = () => {
    return (
      <div className={classes.emojiGiphy}>
        <div className={classes.marinButtonEmojiGiphy}>
          <button 
            className={classes.buttonEmojiGiphy} 
            onClick={() => setViewEmoji(true)} 
            style={{ backgroundColor: !viewEmoji ? "#aaa" : "" }}
            
          > Biểu tượng</button>
          <button 
            className={classes.buttonEmojiGiphy} 
            onClick={() => setViewEmoji(false)} 
            style={{ backgroundColor: viewEmoji ? "#aaa" : "" }}
          > Ảnh động</button>
        </div>
        { viewEmoji ? renderEmoji() : renderGiphy()  }
      </div>
    )
  };

  const getConversations = async () => {
    let response = await apolloClient.query({ query: GET_LIST_MESSAGE, variables: {
        "page": 1,
        "limit": 5
      }})
      .then((response: any) => {
        let conversations = _.get(response, "data.conversations", {})
        if(conversations){
          setConversations(conversations)
        }
    })
  };

  React.useEffect(() => {
    checkUserLogin()
    getConversations()
  }, []);
  
  const renderImage = (send_at: string, url: string, role: string) => {
    return (
      <div className={role === 'take' ? classes.viewContentImageTake : classes.viewContentImageSend}>
        <BootstrapTooltip  title={moment(Number(send_at)).fromNow()} placement="top"> 
          <img src={url} className={classes.imgGiphy} alt="giphy" />
        </BootstrapTooltip>
      </div>
    )
  };
  
  const renderTextField = (send_at: string, text: string, role: string) => {
    return (
      <BootstrapTooltip title={moment(Number(send_at)).fromNow()} placement="top">
        <div className={ role == "take" ? classes.viewTextTake : classes.viewTextSend } >
          {text.trim()}
        </div>
      </BootstrapTooltip >
    ) 
  };

  const renderText = (send_at: string, text: string, role: string ) => {
    if(role === 'take') {
      return renderTextField(send_at, text, role);
    }
    return (
      <div className={classes.textFieldUserChatContent} dir={`${text.length < 45 ? 'rtl' : ""}`}>
        {renderTextField(send_at, text, role)}
      </div>
    );
  };

  const renderConversation = () => {
    let created_at = _.get(conversation, "created_at", "");
    return (
      <div className={ openEmojiGiphy ? classes.openEG : classes.overflowHeightEG } style={{ height: openEmojiGiphy ?  "230px" : "430px" }}  id={'ContainerElementID'} >
        <Element name="myScrollToElement" id={"test_ndm"}>
          <Typography align="center" className={classes.textSizeNewDate}> {moment(Number(created_at)).format('LLL')} </Typography>
          <Divider />
          {Array.isArray(chat) ? chat.map((element: any, count: number) => {
            let checkNewDate = false
            let oldDate = count > 0 ? moment(Number(chat[count - 1].send_at)).format('YYYY-MM-DD') : ''
            let newDate = moment(Number(chat[count].send_at)).format('YYYY-MM-DD')
            if(count > 0 && (oldDate !== newDate)) {
              checkNewDate = true
            }
            let url = _.get(element, "message.attachment.payload.url", "")
            let text = _.get(element, "message.text", "")
            let send_user_id = _.get(element, "send_user_id", "")
            let send_at = _.get(element, "send_at", "")
            let setViewAvatar = send_user_id == props.userLogin ? true : false
            return (
              <div key={count} style={{ display: "block" }}>
                { checkNewDate && <Typography align="center" className={classes.textSizeNewDate}>
                  {moment(Number(send_at)).format("LLL")} <Divider /></Typography>}
                { send_user_id !== props.userLogin
                  ? <ThemeProvider theme={themeTextFieldAdmin}>
                      <div className={classes.viewAvatarChatContent}>
                        { setViewAvatar && <Avatar className={classes.avatarAdminText} alt="nhadatmoi.net" src={avatarImage} /> }
                      </div>
                      <div className={classes.textFieldChatContent}>
                        { url ? renderImage(send_at, url, "take") : renderText(send_at, text, "take") }
                      </div>
                    </ThemeProvider>
                  : <ThemeProvider theme={themeTextFieldUser}>
                      { url ? renderImage(send_at, url, "send") : renderText(send_at, text, "send") }
                    </ThemeProvider>
                }
                <div className={classes.clearFloat}/>
              </div>
            )
          })
          : "" }
          <div>
            {!internet && <p className={classes.errInternet}><u>Không thể gửi tin nhắn này. Kiểm tra kết nối internet và thử lại</u></p> }
          </div>
          <div> {texting && <p className={classes.texting}>Đang nhập ...</p>}</div>
        </Element>
      </div>
    );
  };

  const onClickOpenEmojiGiphy = () => {
    setOpenEmojiGiphy(!openEmojiGiphy);
    setViewEmoji(true);
  };

  const apiBaseURL = "https://graph.nhadatmoi.net";
  const apiUpload = `${apiBaseURL}/private_upload_image_app`;
  const api = (method: Method, url: string, data?: any) => client
    .request({
      data: JSON.stringify(data), 
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json",
      }, 
      method,
      url,
      withCredentials: true,
    }).then((response: any) => response.data);

  const upLoadImage = (files: any) => {
    const reader = new FileReader;
    let file = files.target.files[0]
    reader.readAsDataURL(file)
    reader.onload = () => {
      api("POST", `${apiUpload}`, { 
        base64_image: reader.result, 
        fileName: (new Date()).getTime() + "" + file.name,
        typeUpload: "ad_sell_lease",
      })
      .then(function (res) {
        sendMessageChat("", res.location)
      })
      .catch(function (err) {
        alert('HTTP Error: ' + err.message);
      });
    };
  };

  const setOnKeyDown = (event: any) => {
    if(event.keyCode == 13){
      sendMessageChat(valueInput, "");
      setValueInput("");
      setScrollTo();
    }
  };

  const setScrollTo = () => {
    let heightChatDiv = 0;
    let elm = document.getElementById("test_ndm");
    if (elm) {
      heightChatDiv =  elm.offsetHeight;
    }
    scroller.scrollTo('myScrollToElement', {
      duration: 500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: heightChatDiv,
    });
  }
  
  const setChangeInput = (value: any) => {
    setValueInput(value);
  };

  const renderInput = () => {
    return (
      <Paper component="form" className={classes.inputBase}>
        <ThemeProvider theme={themeInput}>
          <Input 
            fullWidth
            disabled={!internet}
            className={classes.inputText}
            margin="dense"
            id="outlined-basic" 
            autoFocus={true}
            value={valueInput}
            multiline={true}
            onChange={(e) => setChangeInput(e.target.value)}
            onKeyDown={(e) => setOnKeyDown(e)}
            placeholder="Nhập tin nhắn ..."
            autoComplete="false"
          />
          { openEmojiGiphy 
            ? <BootstrapTooltip  title="Chèn biểu tượng" placement="top"> 
                <ExpandMoreIcon className={classes.sizeIcon} onClick={onClickOpenEmojiGiphy} color="primary" />
              </BootstrapTooltip > 
            : <BootstrapTooltip  title="Chèn biểu tượng" placement="top"> 
                <TagFacesIcon className={classes.sizeIcon} onClick={onClickOpenEmojiGiphy} color="primary" />
              </BootstrapTooltip >
          }
          { valueInput
            ? <BootstrapTooltip  title="Gửi tin nhắn" placement="top">
                <SendIcon onClick={() => sendMessageChat(valueInput, "")} className={classes.sizeIcon} color="primary" />
              </BootstrapTooltip >
            : <BootstrapTooltip  title="Thêm tập tin" placement="top">
                <div className={classes.inputWrapper}> 
                  <AddCircleOutlineIcon className={classes.sizeIcon} color="primary"/> 
                  <input type="file" className={classes.fileInput}  onChange={upLoadImage} /> 
                </div>
              </BootstrapTooltip >
          }
        </ThemeProvider>
      </Paper>
    );
  };

  const viewChat = () => {
    let openChat = open && checkLogin ? true : false;
    return (
      <Popper open={openChat} placement={placement} transition className={classes.viewChatImpostant}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={300}>
            <Paper>
              <div className={classes.viewChat}> 
                {renderHeader()}
                {renderConversation()}
                {openEmojiGiphy && renderEmojiGiphy()}
                {renderInput()}
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    );
  };

  const handleClick = (newPlacement: PopperPlacementType) => {
    setOpen(true);
    setPlacement(newPlacement);
  };

  const getConversation = async (conversationId: string) => {
    let conversation = await apolloClient.query({ query: GET_MESSAGE_BY_ID, variables: {
      "id": conversationId
    }})
    .then((response: any) => {
      let conversation = _.get(response, "data.conversation", {});
      return conversation;
    });

    let chat = _.get(conversation, "chat", []);
    let avatar = _.get(conversation, "target.avatar", "");
    let userId = _.get(conversation, "target.id", "");
    let name = _.get(conversation, "target.first_name", "") +  _.get(conversation, "target.last_name", "");
    let last_activity = _.get(conversation, "target.last_activity", "");
    setChat(chat)
    setAvatarImage(avatar);
    setChatId(conversationId)
    setUserId(userId);
    setName(name);
    setLastActivity(last_activity);
    setConversation(conversation);
  };

  const renderListAvatar = (item: any, index: number, numberView: number) => {
    let avatar  = _.get(item, "node.target.avatar", "");
    let name    = _.get(item, "node.target.first_name", "") + _.get(item, "node.target.last_name", "");
    let id      = _.get(item, "node.target.id", "");
    let status  = _.get(item, "node.target.status", "");
    let conversationId =_.get(item, "node.id", "");
    if(index < numberView){
      return (
        <div key={index} style={{ bottom: `${index*65 + 80}px` }}
          className={id === userId ? classes.renderAvatarBorderRadius : classes.renderAvatar}
          onClick={() => getConversation(conversationId) }
        >
          <BootstrapTooltip title={name} placement="left">
            <StyledBadge
              overlap="circle"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant={status == "offline" ? "standard" : "dot"}
            >
              <Avatar 
                src={avatar} 
                onClick={() => handleClick("top-start")} 
                className={classes.large}
                alt="name"
              />
            </StyledBadge>
          </BootstrapTooltip>
        </div>
      );
    }
  };

  

  const listAvatar = _.get(conversations, 'edges', []) || [];
  return (
    <div className={classes.root}>
      {viewChat()}
      <Grid container justify="center">
        <Grid item>
          <Hidden xsDown>
            <>
              {Array.isArray(listAvatar) && listAvatar.map((item: any, index: number) => {
                return renderListAvatar(item, index, 5)
              })}
            </>
          </Hidden>
          <Hidden smUp> 
            <>
              {Array.isArray(listAvatar) && listAvatar.map((item: any, index: number) => {
                return renderListAvatar(item, index, 1)
              })}
            </>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;