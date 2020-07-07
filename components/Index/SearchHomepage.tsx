import * as React from 'react'

//Import Icon
import Grid from "@material-ui/core/Grid";
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Router from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import Hidden from '@material-ui/core/Hidden';
import {ListItem, ListItemIcon, ListItemText, Popover, Typography} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";
import ViewList from "@material-ui/icons/ViewList";

import Moment from 'react-moment';

const SearchHomepage: React.FunctionComponent = () => {
  const dropdownSearch = [
    {type: 'du-an-bat-dong-san', name: 'Dự án'},
    {type: 'tim-tin-rao', name: 'Tin rao'},
  ];

  let searchHomeBodyTitle = 'Nội thất DoDo - Sự lựa chọn của bạn';
  let searchHomeBodyDescription = 'Tìm nội thất theo phong cách của bạn';
  let placeholderSearch = 'Nhập thông tin tìm kiếm...';

  const [typeSearch, setType] = React.useState(dropdownSearch[0]);
  const handleChangeType = (inputType: {type: string, name: string}) => {
    setType(inputType);
    handleCloseSearchType();
  };

  const [keywordSearch, setKeywordSearch] = React.useState('');

  const onClickSearch = () => {
    if (typeSearch.type === 'tim-tin-rao') {
      let urlProcess = { pathname: '/[slug]', query: { title: keywordSearch } }
      let slugAs = '/tim-tin-rao?title=' + keywordSearch;
      Router.push(urlProcess, slugAs, { shallow: false });
    } else {
      let urlProcess = { pathname: '/du-an-bat-dong-san', query: { name: keywordSearch } }
      let slugAs = '/du-an-bat-dong-san?name=' + keywordSearch;
      Router.push(urlProcess, slugAs, { shallow: false });
    }
  };

  const onChangeWards = (event: any) => {
    setKeywordSearch(event.target.value);
    if (event.key == "Enter" || event.keyCode == 13) {
      onClickSearch();
    }
  };

  const [anchorElSearchType, setAnchorElSearchType] = React.useState<HTMLButtonElement | null>(null);
  const handleClickSearchType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSearchType(event.currentTarget);
  };

  const handleCloseSearchType = () => {
    setAnchorElSearchType(null);
  };

  const openSearchType = Boolean(anchorElSearchType);
  const id = openSearchType ? 'simple-popover' : undefined;

  const imageBackground = [
    'https://static.nhadatmoi.net/default/background/afternoon-min.jpg',
    'https://static.nhadatmoi.net/default/background/ecommerce-min.jpg',
    'https://static.nhadatmoi.net/default/background/house-lake-min.jpg',
    'https://static.nhadatmoi.net/default/background/image_us-min.jpg',
    'https://static.nhadatmoi.net/default/background/image_winter.jpg',
    'https://static.nhadatmoi.net/default/background/lake_view-min.jpg',
    'https://static.nhadatmoi.net/default/background/lake_view_2-min.jpg',
    'https://static.nhadatmoi.net/default/background/new-city-2-min.jpg',
    'https://static.nhadatmoi.net/default/background/new-city-min.jpg',
    'https://static.nhadatmoi.net/default/background/river-min.jpg'
  ];
  const womenDay = 'https://static.nhadatmoi.net/default/background/quoc-te-phu-nu.jpg';
  let tempDate = new Date();
  let currentDate = Number(tempDate.getDate());
  let currentMonth = Number(tempDate.getMonth());
  currentMonth = currentMonth + 1;

  let backgroundOffset = Number(currentDate%10);
  let backgroundUrl = imageBackground[0];
  if (typeof imageBackground[backgroundOffset] && imageBackground[backgroundOffset]) {
    backgroundUrl = imageBackground[backgroundOffset]
  }
  if (Number(currentMonth) === 3 && (Number(currentDate) >= 6 && Number(currentDate) <= 9)) {
    backgroundUrl = womenDay;
  }
  return (
    <Grid container spacing={0} item xs={12} className="search_homepage__banner"
      style={{backgroundImage: 'url(' + backgroundUrl + ')'}} direction="row"
      justify="center"
      alignItems="center">
      <Grid item xs className="search_homepage__body">
        <div className="search_homepage__body_title">{searchHomeBodyTitle}</div>
        <div className="search_homepage__body_description">{searchHomeBodyDescription}</div>
        <div className="search_homepage__body__box">
          <Hidden xsDown>
            <div className="search_homepage__body__box__select">
              <Button onClick={handleClickSearchType} aria-describedby={id} >
                {typeSearch.name}<svg viewBox="0 0 320 512">
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/>
                </svg>
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
                className="search_homepage__body__box__select__popup"
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
          </Hidden>
          <div className="search_homepage__body_box_input">
            <InputBase
              className="search_homepage__body_box_input_base"
              placeholder={placeholderSearch}
              inputProps={{'aria-label': placeholderSearch}}
              onKeyUp={e => onChangeWards(e)}
            />
          </div>
          <Button className="search_homepage__body_box_button" variant="outlined" onClick={onClickSearch}>
            <SearchIcon/>
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SearchHomepage;
