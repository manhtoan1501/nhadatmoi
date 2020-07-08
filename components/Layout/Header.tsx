import * as React from 'react'
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ListAlt from '@material-ui/icons/ListAlt';
import FilterVintage from '@material-ui/icons/FilterVintage';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircle from '@material-ui/icons/AddCircle';
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
import GamesIcon from '@material-ui/icons/Games';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import { useEffect } from "react";
import { apolloClient } from "../../utils";
import { LOG_OUT } from "../../graphql/profile/queries";
// @ts-ignore
import NextProgress from "nextjs-progressbar";
import { FunctionComponent } from "react";
import InputBase from "@material-ui/core/InputBase";
import Router from "next/router";
import { localStorageCompareKey } from "../../constants";
import Chat from "../Chat/Index";
import { headerStyles } from './Constant/Styles'
import _ from "lodash";

const defaultUser = {
  _id: "",
  email: "",
  avatar: "",
  first_name: "",
  last_name: ""
};

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

  const classes = headerStyles();
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
    setState({ ...state, [side]: open });
  };
  const logout = () => {
    setUserInfo(defaultUser);
    apolloClient.query({ query: LOG_OUT })
      .then(r => {
      });
  };

  const dropdownSearch = [
    { type: 'du-an-bat-dong-san', name: 'Dự án' },
    { type: 'tim-tin-rao', name: 'Tin rao' },
  ];
  let defaultDropdown = dropdownSearch[0];
  if (props.path === 'tin-rao' || props.path === 'nha-dat-ban') {
    defaultDropdown = dropdownSearch[1];
  }

  const [typeSearch, setType] = React.useState(defaultDropdown);

  const handleChangeType = (inputType: { type: string, name: string }) => {
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
      let dataQuery = QueryString.stringify({ ids: dataCompareId }, { arrayFormat: 'none' });
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
      <Chat userLogin={"toang"} />
      <Grid container spacing={0} className="header">
        {/* Logo */}
        <div className="header__left">
          <div className="header_logo">
            <Link href='/'><a><GamesIcon style={{ fontSize: '50px' }} /></a></Link>
          </div>
        </div>

        <div className="header__center">
          <div className="header__center__search">
            <div className="header__center__search__icon">
              <svg viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
              </svg>
            </div>
            <div className="header__center__search__box">
              <InputBase
                placeholder={placeholderSearch}
                defaultValue={keywordSearch}
                onKeyUp={e => onChangeWards(e)}
              />
            </div>
            <Button className="header__center__search__button" variant="outlined" onClick={onClickSearch} >
              <svg viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
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
                    <Avatar alt={userInfo.first_name} src={userInfo.avatar} />
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
                            <Avatar alt={userInfo.first_name} src={userInfo.avatar} />
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
                      <Divider />
                      <a href="https://moigioi.nhadatmoi.net">
                        <ListItem button>
                          <ListItemIcon>
                            <GroupAddIcon />
                          </ListItemIcon>
                          <ListItemText primary="Nâng cấp" />
                        </ListItem>
                      </a>
                      <a href="https://moigioi.nhadatmoi.net/asl/list">
                        <ListItem button>
                          <ListItemIcon>
                            <ListIcon />
                          </ListItemIcon>
                          <ListItemText primary="Quản lý tin rao" />
                        </ListItem>
                      </a>
                      <Divider />
                      <a href="https://moigioi.nhadatmoi.net/user_info">
                        <ListItem button>
                          <ListItemIcon>
                            <SettingsIcon />
                          </ListItemIcon>
                          <ListItemText primary="Cài đặt" />
                        </ListItem>
                      </a>
                      <ListItem button onClick={() => logout()}>
                        <ListItemIcon>
                          <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Đăng xuất" />
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
            <div className={'mega_menu_asl'}>
              <Link href="/[slug]" as={'/tim-tin-rao'}>
                <a>
                  {/* <Button className={"header_button _empty" + ((props.path === 'tin-rao' || props.path === 'nha-dat-ban') ? ' active' : '')} variant="outlined">
                  Tin rao
                </Button> */}
                  <Button className={"header_button _empty" + ((props.path === 'du-an' || props.path === 'du-an-bat-dong-san') ? ' active' : '')} variant="outlined">
                    Dự án
                </Button>
                </a>
              </Link>
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
            <Link href="/du-an-bat-dong-san">
              <a>
                <Button className={"header_button _empty" + ((props.path === 'du-an' || props.path === 'du-an-bat-dong-san') ? ' active' : '')} variant="outlined">
                  Dự án
                </Button>
              </a>
            </Link>
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
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className="header_button _menu"
              aria-label="open drawer"
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon />
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
                    <Avatar alt={userInfo.first_name} src={userInfo.avatar} />
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
                      <Avatar alt="Khách ghé thăm" src="https://static.nhadatmoi.net/default/user.png" />
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
              <Divider />

              <Link href="/[slug]" as={'/tim-tin-rao'}><a>
                <ListItem button>
                  <ListItemIcon>
                    <ListAlt />
                  </ListItemIcon>
                  <ListItemText primary="Tin rao" />
                </ListItem>
              </a>
              </Link>

              <Link href="/du-an-bat-dong-san"><a>
                <ListItem button>
                  <ListItemIcon>
                    <FilterVintage />
                  </ListItemIcon>
                  <ListItemText primary="Dự án" />
                </ListItem></a></Link>

              {
                userInfo._id &&
                <a href={"https://moigioi.nhadatmoi.net/asl/create"}>
                  <ListItem button>
                    <ListItemIcon>
                      <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Đăng tin" />
                  </ListItem>
                </a>
              }

              {
                !userInfo._id &&
                <ListItem button onClick={handleClickOpen}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText primary="Đăng tin" />
                </ListItem>
              }
              {
                !userInfo._id &&
                <ListItem button onClick={handleClickOpen}>
                  <ListItemIcon>
                    <ArrowForward />
                  </ListItemIcon>
                  <ListItemText primary="Đăng nhập" />
                </ListItem>
              }

              {
                userInfo._id &&
                <a href="https://moigioi.nhadatmoi.net">
                  <ListItem button>
                    <ListItemIcon>
                      <GroupAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nâng cấp" />
                  </ListItem>
                </a>
              }

              {
                userInfo._id &&
                <a href="https://moigioi.nhadatmoi.net/asl/list">
                  <ListItem button>
                    <ListItemIcon>
                      <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Quản lý tin rao" />
                  </ListItem>
                </a>
              }

              {
                userInfo._id &&
                <Divider />
              }
              {
                userInfo._id &&
                <a href="https://moigioi.nhadatmoi.net/settings">
                  <ListItem button>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cài đặt" />
                  </ListItem>
                </a>
              }
              {
                userInfo._id &&
                <ListItem button onClick={() => logout()}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Đăng xuất" />
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
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[0])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                    <img src={dataCompare[0].avatar} alt={dataCompare[0].title} />
                  </div>
                }
              </div>
              <div className={'footer_compare__content__item'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[1] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[1])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                    <img src={dataCompare[1].avatar} alt={dataCompare[1].title} />
                  </div>
                }
              </div>
              <div className={'footer_compare__content__item hide_mobile'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[2] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[2])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                    <img src={dataCompare[2].avatar} alt={dataCompare[2].title} />
                  </div>
                }
              </div>
              <div className={'footer_compare__content__item hide_mobile'}>
                {
                  dataCompare && dataCompare.length > 0 && dataCompare[3] &&
                  <div className={'footer_compare__content__item__avatar'}>
                    <svg viewBox="0 0 352 512" onClick={() => handleClickRemoveCompare(dataCompare[3])}><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                    <img src={dataCompare[3].avatar} alt={dataCompare[3].title} />
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
      <div className="header_background" />
      {
        (props.path === '' || props.path === 'tim-tin-rao' || props.path === 'du-an-bat-dong-san') &&
        <>
          {
            userInfo._id &&
            <a href={"https://moigioi.nhadatmoi.net/asl/create"}>
              <Fab aria-label={"Đăng bài mới"} className={"header_button__float"}>
                <AddIcon />
              </Fab>
            </a>
          }
          {
            !userInfo._id &&
            <Fab aria-label={"Đăng bài mới"} className={"header_button__float"} onClick={handleClickOpen}>
              <AddIcon />
            </Fab>
          }
        </>
      }
    </div>
  );
};

export default HeaderPage;
