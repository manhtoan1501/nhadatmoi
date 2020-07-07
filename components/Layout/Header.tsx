import * as React from 'react'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Modal from "../Login/Modal";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ListAlt from '@material-ui/icons/ListAlt';
import FilterVintage from '@material-ui/icons/FilterVintage';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircle from '@material-ui/icons/AddCircle';
import ViewList from '@material-ui/icons/ViewList';
import EcoIcon from '@material-ui/icons/Eco';
import AddIcon from '@material-ui/icons/Add';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import Validator from '../../modules/validator';
import { makeStyles, Theme } from '@material-ui/core/styles';
import QueryString from "query-string";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  Typography,
  Avatar,
  Popover,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItemIcon,
} from "@material-ui/core";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import {useEffect} from "react";
import {apolloClient} from "../../utils";
import {LOG_OUT} from "../../graphql/profile/queries";
// @ts-ignore
import NextProgress from "nextjs-progressbar";
import {FunctionComponent} from "react";
import InputBase from "@material-ui/core/InputBase";
import Router from "next/router";
import {localStorageCompareKey} from "../../constants";
import Chat from "../Chat/Index";
import _ from "lodash";

const defaultUser = {
  _id: "",
  email: "",
  avatar: "",
  first_name: "",
  last_name: ""
};
const useStyles = makeStyles((theme: Theme) => ({
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

interface CompareDataProps {
  avatar: string,
  title: string,
  id: string,
  type: string
}


interface LayoutProps {
  user?: {
    email: string,
    _id: string,
    first_name: string,
    last_name: string,
    avatar: string
  },
  statusModal: boolean,
  updateModal: (data: boolean) => void;
  path: string,
  canonical: string,
  dataQuery?: {
    title: string,
    name: string
  },
  dataCompare?: any
}

const HeaderPage: FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  const setModal = (dataModal: boolean) => {
    props.updateModal(dataModal);
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [anchorElSearchType, setAnchorElSearchType] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [userInfo, setUserInfo] = React.useState(defaultUser);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickSearchType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSearchType(event.currentTarget);
  };

  const handleCloseSearchType = () => {
    setAnchorElSearchType(null);
  };
  const openSearchType = Boolean(anchorElSearchType);

  const classes = useStyles();
  const [dataCompare, setDataCompare] = React.useState(props.dataCompare);
  useEffect(() => {
    if (props.user) {
      setUserInfo(props.user);
    }
    setDataCompare(props.dataCompare);
  }, [props.dataCompare]);

  const handleClickOpen = () => {
    setModal(true);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // @ts-ignore
  const toggleDrawer = (side: string, open: boolean) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [side]: open});
  };
  const logout = () => {
    setUserInfo(defaultUser);
    apolloClient.query({query: LOG_OUT})
      .then(r => {
      });
  };

  const dropdownSearch = [
    {type: 'du-an-bat-dong-san', name: 'Dự án'},
    {type: 'tim-tin-rao', name: 'Tin rao'},
  ];
  let defaultDropdown = dropdownSearch[0];
  if (props.path === 'tin-rao' || props.path === 'nha-dat-ban') {
    defaultDropdown = dropdownSearch[1];
  }

  const [typeSearch, setType] = React.useState(defaultDropdown);

  const handleChangeType = (inputType: {type: string, name: string}) => {
    setType(inputType);
    handleCloseSearchType();
  };

  let keywordNew = '';
  if (props.dataQuery?.title) {
    keywordNew = props.dataQuery.title;
  }
  if (props.dataQuery?.name) {
    keywordNew = props.dataQuery.name;
  }
  const [keywordSearch, setKeywordSearch] = React.useState(keywordNew);

  let placeholderSearch = 'Tìm kiếm';
  let isHomepage = false;

  const onChangeWards = (event: any) => {
    setKeywordSearch(event.target.value);
    if (event.key == "Enter" || event.keyCode == 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    if (typeSearch.type === 'tim-tin-rao') {
      let urlProcess = { pathname: '/[slug]', query: { title: keywordSearch } }
      let slugAs = '/tim-tin-rao?title=' + keywordSearch;
      if (props.path === 'tim-tin-rao') {
        window.location.href = '/tim-tin-rao?title=' + keywordSearch;
        return true;
      } else {
        Router.replace(urlProcess, slugAs, { shallow: true });
      }
    } else {
      let urlProcess = { pathname: '/du-an-bat-dong-san', query: { name: keywordSearch } }
      let slugAs = '/du-an-bat-dong-san?name=' + keywordSearch;
      if (props.path === 'du-an-bat-dong-san') {
        window.location.href = '/du-an-bat-dong-san?name=' + keywordSearch;
        return true;
      } else {
        Router.replace(urlProcess, slugAs, { shallow: true });
      }
    }
  };

  const clickCancelCompare = () => {
    localStorage.removeItem(localStorageCompareKey);
    setDataCompare(null);
  };

  const clickToCompare = () => {
    if (props.dataCompare && !Validator.isBlank(props.dataCompare)) {
      let dataCompareId = [];
      for (let index in props.dataCompare) {
        dataCompareId.push(props.dataCompare[index].id);
      }
      let dataQuery = QueryString.stringify({ids: dataCompareId}, {arrayFormat: 'none'});
      let urlProcessCompare = '/compare/asl?' + dataQuery;
      Router.push(urlProcessCompare, urlProcessCompare, { shallow: false });
      localStorage.removeItem(localStorageCompareKey);
      setDataCompare(null);
    }
  };

  const handleClickRemoveCompare = (dataCompare: CompareDataProps) => {
    if (localStorage.getItem(localStorageCompareKey) && !Validator.isBlank(localStorage.getItem(localStorageCompareKey))) {
      let dataToCompare = JSON.parse(localStorage.getItem(localStorageCompareKey) as string);
      let dataNewCompare = [];
      for (let index in dataToCompare) {
        if (dataToCompare[index].id !== dataCompare.id) {
          dataNewCompare.push(dataToCompare[index])
        }
      }
      localStorage.setItem(localStorageCompareKey, JSON.stringify(dataNewCompare));
      location.reload();
    }
  };

  let userLogin = _.get(props, "user._id", "");

  return (
    <div>
      <NextProgress
        color="#1A4684"
        startPosition={0}
        stopDelayMs={200}
        height="2"
        showSpinner={false}
      />
      <Chat userLogin={userLogin} />
      <Grid container spacing={0} className="header">
        <Modal statusModal={props.statusModal} onClose={() => setModal(false)}/>
        <div className="header__left">
          <div className="header_logo">
            <Link href="/"><a>
              <svg viewBox="0 0 173.7 40">
                <g>
                  <path className="st0"
                        d="M15.9,38c-1.9-1.4-6.5-4.6-7.5-10.1c-0.5-2.7,0.2-5.5,1.9-7.7c1.8-2.2,4.5-3.5,7.4-3.7c0.1,0,0.2,0,0.3,0c2.7,0,5.3,1.2,7,3.3c1.9,2.2,2.7,5.1,2.3,7.9c-0.9,5.3-5,8.4-7.4,10.2l-2,1.5L15.9,38z M18,20.3c-0.1,0-0.1,0-0.2,0c-1.9,0.1-3.6,0.9-4.7,2.3c-1.1,1.3-1.5,3-1.2,4.7c0.7,3.5,3.3,5.8,5.8,7.7c2.8-2.1,5.3-4.2,5.8-7.7c0.3-1.7-0.3-3.6-1.4-5C21.2,21,19.7,20.3,18,20.3z"/>
                  <path className="st0"
                        d="M17.9,22.7c1.9,0,3.4,1.6,3.4,3.4c0,1.9-1.6,3.4-3.4,3.4c-1.9,0-3.5-1.6-3.5-3.4C14.5,24.2,16,22.7,17.9,22.7z"/>
                  {
                    isHomepage &&
                    <g>
                      <path className="st1"
                            d="M54.2,34.1v-7.5c0-0.9-0.1-1.6-0.4-2c-0.3-0.6-0.9-0.8-1.8-0.8c-0.9,0-1.5,0.3-1.9,0.8c-0.3,0.4-0.5,1.1-0.5,2v7.4h-4.1V20.4h3.8v1.5h0.1c0.8-1.3,2-1.9,3.7-1.9c1.4,0,2.6,0.4,3.5,1.2c0.6,0.5,1,1.2,1.3,2c0.2,0.7,0.3,1.5,0.3,2.4v8.6H54.2z"/>
                      <path className="st1"
                            d="M68.8,34.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.4-0.6-1-0.9-1.8-0.9c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.4-0.5,1.1-0.5,1.9v7.6h-4.1V15.8h4.1v5.8h0c0.3-0.6,0.8-1.1,1.5-1.3c0.6-0.3,1.2-0.4,2-0.4c1.6,0,2.9,0.5,3.7,1.5c0.6,0.7,1,1.5,1.1,2.4c0.1,0.4,0.1,0.8,0.1,1.3c0,0.2,0,0.4,0,0.7v8.3H68.8z"/>
                      <path className="st1"
                            d="M85,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H85z M84.1,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C85,26.2,84.7,25.4,84.1,24.7z"/>
                      <path className="st1"
                            d="M101.5,34.1v-1.5h0c-0.4,0.7-1,1.2-1.8,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.7,1.8-5.1c1.3-1.4,2.9-2.2,4.9-2.2c1.6,0,3,0.5,4,1.6v-5.7h4.1v18.2H101.5z M100.5,24.7c-0.7-0.6-1.5-1-2.5-1c-1,0-1.8,0.3-2.5,1c-0.7,0.6-1,1.5-1,2.5c0,1,0.3,1.8,1,2.5c0.6,0.7,1.5,1,2.5,1c1,0,1.9-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C101.5,26.2,101.2,25.4,100.5,24.7z"/>
                      <path className="st1"
                            d="M117.6,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H117.6z M116.6,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C117.6,26.2,117.3,25.4,116.6,24.7z"/>
                      <path className="st1" d="M128.6,23.5v10.6h-4.1V23.5h-2v-3.1h2v-4.6h4.1v4.6h2v3.1H128.6z"/>
                      <path className="st1"
                            d="M148.3,34.1v-7.3c0-0.9-0.1-1.6-0.3-2.1c-0.3-0.6-0.9-1-1.8-1c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.5-0.5,1.1-0.5,2v7.5h-4.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.3-0.6-0.9-0.9-1.7-0.9c-0.9,0-1.5,0.3-1.9,0.9c-0.3,0.5-0.4,1.2-0.4,2.1v7.3h-4.1V20.4h3.8v1.5h0.1c0.4-0.7,0.9-1.2,1.6-1.5c0.6-0.3,1.3-0.4,2.2-0.4c1.7,0,3.1,0.8,3.9,2.4c1-1.6,2.5-2.4,4.3-2.4c1.5,0,2.7,0.5,3.6,1.4c0.7,0.7,1.1,1.5,1.3,2.5c0.1,0.4,0.1,0.8,0.1,1.4c0,0.2,0,0.4,0,0.7v8.2H148.3z"/>
                      <path className="st1"
                            d="M166.2,32.4c-1.4,1.4-3.2,2.1-5.3,2.1c-2.1,0-3.9-0.7-5.2-2.1c-1.4-1.4-2.1-3.1-2.1-5.2c0-2.1,0.7-3.8,2.1-5.2c1.4-1.4,3.1-2.1,5.2-2.1c2.1,0,3.9,0.7,5.3,2.1c1.4,1.4,2.1,3.1,2.1,5.2C168.3,29.3,167.6,31.1,166.2,32.4z M163.3,24.8c-0.6-0.7-1.4-1-2.4-1c-0.9,0-1.7,0.3-2.3,1c-0.6,0.7-0.9,1.5-0.9,2.4c0,0.9,0.3,1.7,0.9,2.4c0.6,0.7,1.4,1,2.3,1c0.9,0,1.7-0.3,2.4-1c0.6-0.7,0.9-1.5,0.9-2.4C164.2,26.3,163.9,25.5,163.3,24.8z"/>
                      <path className="st1" d="M169.7,19v-3.1h4.1V19H169.7z M169.7,34.1V20.4h4.1v13.7H169.7z"/>
                    </g>
                  }
                  <path className="st0"
                        d="M34.6,13.3L20,0.8c-1.2-1.1-3-1.1-4.3,0L1.2,13.3C0.4,13.9,0,14.8,0,15.8v21C0,38.5,1.5,40,3.3,40h12.6l-0.9-0.6c-1.1-0.8-3-2.2-4.8-4.2h-2c-1.8,0-3.3-1.5-3.3-3.3V18c0-1,0.4-1.9,1.2-2.5l9.7-8.3c1.2-1.1,3-1.1,4.3,0l9.6,8.3c0.7,0.6,1.1,1.5,1.1,2.5v13.8c0,1.8-1.5,3.3-3.3,3.3h-2c-1.6,1.9-3.4,3.2-4.7,4.2L19.9,40h12.5c1.8,0,3.3-1.5,3.3-3.3v-21C35.7,14.8,35.3,13.9,34.6,13.3z"/>
                </g>
              </svg>
            </a>
            </Link>
          </div>
        </div>
        <div className="header__center">
          <div className="header__center__search">
            <div className="header__center__search__icon">
              <svg viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
              </svg>
            </div>
            <div className="header__center__search__box">
              <InputBase
                placeholder={placeholderSearch}
                defaultValue={keywordSearch}
                onKeyUp={e => onChangeWards(e)}
              />
            </div>
            <div className="header__center__search__type">
              <Button onClick={handleClickSearchType} aria-describedby={id} >
                <svg viewBox="0 0 320 512">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/>
                </svg>{typeSearch.name}
              </Button>

              <Popover
                id={id}
                open={openSearchType}
                anchorEl={anchorElSearchType}
                onClose={handleCloseSearchType}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                className="header__center__search__type__popup"
              >
                <Typography component={'span'}>
                  <ListItem button onClick={(event: React.MouseEvent<HTMLElement>) => handleChangeType(dropdownSearch[0])}>
                    <ListItemIcon>
                      <EcoIcon/>
                    </ListItemIcon>
                    <ListItemText primary={dropdownSearch[0].name}/>
                  </ListItem>
                  <ListItem button onClick={(event: React.MouseEvent<HTMLElement>) => handleChangeType(dropdownSearch[1])}>
                    <ListItemIcon>
                      <ViewList/>
                    </ListItemIcon>
                    <ListItemText primary={dropdownSearch[1].name}/>
                  </ListItem>
                </Typography>
              </Popover>
            </div>
            <Button className="header__center__search__button" variant="outlined"onClick={onClickSearch} >
              <svg viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
              </svg>
            </Button>
          </div>
        </div>
        <div className="header__right">
          <Hidden smDown>
            {
              userInfo._id &&
              <a href={"https://moigioi.nhadatmoi.net/asl/create"}>
                <Button className="header_button _full" variant="outlined">
                  Đăng tin
                </Button>
              </a>
            }

            {
              !userInfo._id &&
              <Button className="header_button _full" variant="outlined" onClick={handleClickOpen}>
                Đăng tin
              </Button>
            }

            {
              userInfo._id ? (
                <div>
                  <Button className="header_button _no_padding" aria-describedby={id} onClick={handleClick}>
                    <Avatar alt={userInfo.first_name} src={userInfo.avatar}/>
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    className="header_button__popup"
                  >
                    <Typography component={'span'}>
                      <a href="https://moigioi.nhadatmoi.net">
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar className="header_button__popup__avatar">
                            <Avatar alt={userInfo.first_name} src={userInfo.avatar}/>
                          </ListItemAvatar>
                          <ListItemText
                            className="header_button__popup__title"
                            primary={`${userInfo.first_name} ${userInfo.last_name}`}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="textPrimary"
                                >
                                  {userInfo.email}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </a>
                      <Divider/>
                      <a href="https://moigioi.nhadatmoi.net">
                        <ListItem button>
                          <ListItemIcon>
                            <GroupAddIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Nâng cấp"/>
                        </ListItem>
                      </a>
                      <a href="https://moigioi.nhadatmoi.net/asl/list">
                        <ListItem button>
                          <ListItemIcon>
                            <ListIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Quản lý tin rao"/>
                        </ListItem>
                      </a>
                      <Divider/>
                      <a href="https://moigioi.nhadatmoi.net/user_info">
                        <ListItem button>
                          <ListItemIcon>
                            <SettingsIcon/>
                          </ListItemIcon>
                          <ListItemText primary="Cài đặt"/>
                        </ListItem>
                      </a>
                      <ListItem button onClick={() => logout()}>
                        <ListItemIcon>
                          <ExitToAppIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Đăng xuất"/>
                      </ListItem>
                    </Typography>
                  </Popover>
                </div>
              ) : (
                <Button className="header_button _border" variant="outlined" onClick={handleClickOpen}>
                  Đăng nhập
                </Button>
              )
            }
            <div className={'mega_menu_asl'}><Link href="/[slug]" as={'/tim-tin-rao'}><a><Button className={"header_button _empty" + ((props.path === 'tin-rao' || props.path === 'nha-dat-ban')?' active':'')} variant="outlined">
              Tin rao
            </Button></a></Link>
              <Card className={'card_asl'}>
                <CardContent>
                  <Grid container spacing={2} className={'card_asl__body'}>
                    <Grid item xs={3}>
                      <a href="https://nhadatmoi.net/nha-dat-ban">
                        <div className={'card_asl__body__item__title'}>Nhà đất bán</div>
                      </a>
                      <a href="https://nhadatmoi.net/mua-ban-nha">
                        <div className={'card_asl__body__item__child'}>Bán nhà</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-ban-can-ho-chung-cu'}>
                        <div className={'card_asl__body__item__child'}>Bán căn hộ, chung cư</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-ban-biet-thu'}>
                        <div className={'card_asl__body__item__child'}>Bán biệt thự</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-ban-dat'}>
                        <div className={'card_asl__body__item__child'}>Bán đất</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-ban-bat-dong-san-khac'}>
                        <div className={'card_asl__body__item__child'}>Bán các loại bất động sản khác</div>
                      </a>

                    </Grid>
                    <Grid item xs={3}>
                      <a href={'https://nhadatmoi.net/nha-dat-thue'}>
                        <div className={'card_asl__body__item__title'}>Nhà đất thuê</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-can-ho-chung-cu'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê căn hộ chung cư</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-nha-rieng'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê nhà riêng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-nha-mat-pho'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê nhà mặt phố</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-nha-tro-phong-tro'}>
                       <div className={'card_asl__body__item__child'}>Cho thuê nhà trọ, phòng trọ</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-van-phong'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê văn phòng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-cua-hang-kiot'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê cửa hàng, kiot</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-kho-nha-xuong-dat'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê kho, nhà xưởng, đất</div>
                      </a>
                      <a href={'https://nhadatmoi.net/cho-thue-cac-loai-bat-dong-san-khac'}>
                        <div className={'card_asl__body__item__child'}>Cho thuê các loại bất động sản khác</div>
                      </a>
                    </Grid>
                    <Grid item xs={3}>
                      <a href={'https://nhadatmoi.net/nha-dat-can-mua'}>
                        <div className={'card_asl__body__item__title'}>Nhà đất cần mua</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-can-ho-chung-cu'}>
                        <div className={'card_asl__body__item__child'}>Mua căn hộ chung cư</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-nha-rieng'}>
                        <div className={'card_asl__body__item__child'}>Mua nhà riêng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-nha-biet-thu-lien-ke'}>
                        <div className={'card_asl__body__item__child'}>Mua nhà biệt thự, liền kề</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-nha-mat-pho'}>
                        <div className={'card_asl__body__item__child'}>Mua nhà mặt phố</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-dat-nen-du-an'}>
                        <div className={'card_asl__body__item__child'}>Mua đất nền dự án</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-dat'}>
                        <div className={'card_asl__body__item__child'}>Mua đất</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-trang-trai-khu-nghi-duong'}>
                        <div className={'card_asl__body__item__child'}>Mua trang trại, khu nghỉ dưỡng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-kho-nha-xuong'}>
                        <div className={'card_asl__body__item__child'}>Mua kho, nhà xưởng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/mua-cac-loai-bat-dong-san-khac'}>
                        <div className={'card_asl__body__item__child'}>Mua các loại bất động sản khác</div>
                      </a>
                    </Grid>
                    <Grid item xs={3}>
                      <a href={'https://nhadatmoi.net/nha-dat-can-thue'}>
                        <div className={'card_asl__body__item__title'}>Nhà đất cần thuê</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-can-ho-chung-cu'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê căn hộ chung cư</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-nha-rieng'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê nhà riêng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-nha-mat-pho'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê nhà mặt phố</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-nha-tro-phong-tro'}>
                       <div className={'card_asl__body__item__child'}>Cần thuê nhà trọ, phòng trọ</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-van-phong'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê văn phòng</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-cua-hang-kiot'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê cửa hàng, kiot</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-kho-nha-xuong-dat'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê kho, nhà xưởng, đất</div>
                      </a>
                      <a href={'https://nhadatmoi.net/can-thue-cac-loai-bat-dong-san-khac'}>
                        <div className={'card_asl__body__item__child'}>Cần thuê các loại bất động sản khác</div>
                      </a>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
            <Link href="/du-an-bat-dong-san"><a><Button className={"header_button _empty" + ((props.path === 'du-an' || props.path === 'du-an-bat-dong-san')?' active':'')} variant="outlined">
              Dự án
            </Button></a></Link>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className="header_button _menu"
              aria-label="open drawer"
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon/>
            </IconButton>
          </Hidden>
        </div>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          <div className="header__menu_mobile">
            <Typography className="header__menu_mobile__body">
              {
                userInfo._id &&
                <ListItem alignItems="flex-start">
                  <ListItemAvatar className="header__menu_mobile__avatar">
                    <Avatar alt={userInfo.first_name} src={userInfo.avatar}/>
                  </ListItemAvatar>
                  <ListItemText
                    className="header__menu_mobile__title"
                    primary={`${userInfo.first_name} ${userInfo.last_name}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {userInfo.email}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              }

              {
                !userInfo._id &&
                <><a href="https://moigioi.nhadatmoi.net/settings">
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar className="header__menu_mobile__avatar">
                      <Avatar alt="Khách ghé thăm" src="https://static.nhadatmoi.net/default/user.png"/>
                    </ListItemAvatar>
                    <ListItemText
                      className="header__menu_mobile__title"
                      primary="Chào mừng Khách"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Bất Động Sản Mới
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </a></>
              }
              <Divider/>

              <Link href="/[slug]" as={'/tim-tin-rao'}><a>
                <ListItem button>
                  <ListItemIcon>
                    <ListAlt/>
                  </ListItemIcon>
                  <ListItemText primary="Tin rao"/>
                </ListItem>
              </a>
              </Link>

              <Link href="/du-an-bat-dong-san"><a>
                <ListItem button>
                  <ListItemIcon>
                    <FilterVintage/>
                  </ListItemIcon>
                  <ListItemText primary="Dự án"/>
                </ListItem></a></Link>

              {
                userInfo._id &&
                <a href={"https://moigioi.nhadatmoi.net/asl/create"}>
                  <ListItem button>
                    <ListItemIcon>
                      <AddCircle/>
                    </ListItemIcon>
                    <ListItemText primary="Đăng tin"/>
                  </ListItem>
                </a>
              }

              {
                !userInfo._id &&
                <ListItem button onClick={handleClickOpen}>
                  <ListItemIcon>
                    <AddCircle/>
                  </ListItemIcon>
                  <ListItemText primary="Đăng tin"/>
                </ListItem>
              }
              {
                !userInfo._id &&
                <ListItem button onClick={handleClickOpen}>
                  <ListItemIcon>
                    <ArrowForward/>
                  </ListItemIcon>
                  <ListItemText primary="Đăng nhập"/>
                </ListItem>
              }

              {
                userInfo._id &&
                <a href="https://moigioi.nhadatmoi.net">
                  <ListItem button>
                    <ListItemIcon>
                      <GroupAddIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Nâng cấp"/>
                  </ListItem>
                </a>
              }

              {
                userInfo._id &&
                <a href="https://moigioi.nhadatmoi.net/asl/list">
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Quản lý tin rao"/>
                  </ListItem>
                </a>
              }

              {
                userInfo._id &&
                <Divider/>
              }
              {
                userInfo._id &&
                <a href="https://moigioi.nhadatmoi.net/settings">
                  <ListItem button>
                    <ListItemIcon>
                      <SettingsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Cài đặt"/>
                  </ListItem>
                </a>
              }
              {
                userInfo._id &&
                <ListItem button onClick={() => logout()}>
                  <ListItemIcon>
                    <ExitToAppIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Đăng xuất"/>
                </ListItem>
              }
            </Typography>
          </div>
        </Drawer>
      </Grid>
      {
        dataCompare && !Validator.isBlank(dataCompare) && dataCompare.length !== 0 &&
        <div className="footer_compare">
          <div className={'footer_compare_boder'}>
            <div className={"footer_compare__content"}>
              <div className={'footer_compare__content__item'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[0] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[0])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    <img src={dataCompare[0].avatar} alt={dataCompare[0].title}/>
                  </div>
                }
              </div>
              <div className={'footer_compare__content__item'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[1] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[1])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    <img src={dataCompare[1].avatar} alt={dataCompare[1].title}/>
                  </div>
                }
              </div>
              <div className={'footer_compare__content__item hide_mobile'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[2] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[2])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    <img src={dataCompare[2].avatar} alt={dataCompare[2].title}/>
                  </div>
                }
              </div>
              <div className={'footer_compare__content__item hide_mobile'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[3] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[3])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    <img src={dataCompare[3].avatar} alt={dataCompare[3].title}/>
                  </div>
                }
              </div>
            </div>
            <div className={"footer_compare__button"}>
              <Button className={'btn_compare'} onClick={() => clickToCompare()}>SO SÁNH</Button>
              <Button className={'btn_cancel'} onClick={() => clickCancelCompare()} >HUỶ BỎ</Button>
            </div>
          </div>
        </div>
      }
      <div className="header_background"/>
      {
        (props.path === '' || props.path === 'tim-tin-rao' || props.path === 'du-an-bat-dong-san') &&
        <>
          {
            userInfo._id &&
            <a href={"https://moigioi.nhadatmoi.net/asl/create"}>
              <Fab aria-label={"Đăng bài mới"} className={"header_button__float"}>
                <AddIcon/>
              </Fab>
            </a>
          }
          {
            !userInfo._id &&
            <Fab aria-label={"Đăng bài mới"} className={"header_button__float"} onClick={handleClickOpen}>
              <AddIcon/>
            </Fab>
          }
        </>
      }
    </div>
  );
};

export default HeaderPage;
