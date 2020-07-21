import React, {FunctionComponent} from 'react';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import {ListItem, ListItemIcon, ListItemText, Popover, Typography} from "@material-ui/core";
import EcoIcon from "@material-ui/icons/Eco";
import ViewList from "@material-ui/icons/ViewList";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Router from "next/router";
interface ErrorPageProps {
}

const ErrorPageProps: FunctionComponent<ErrorPageProps> = (props: ErrorPageProps) => {
  const dropdownSearch = [
    {type: 'du-an-bat-dong-san', name: 'Dự án'},
    {type: 'tim-tin-rao', name: 'Tin rao'},
  ];

  let searchHomeBodyTitle = 'Nội thất Dodo - Giao dịch kiểu mới';
  let searchHomeBodyDescription = 'Tìm: Nhà riêng, Chung cư, Biệt thự, Đất nền, Đất thổ cư';
  let searchHomeBodyExample = 'Ví dụ: Hà Nội, Đà Nẵng, Thành Phố Hồ Chí Minh';
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
  return (
    <>
      <div className={'container-big error_page'}>
        <div className={'error_page__image'}>
          <img src={'https://static.nhadatmoi.net/default/error-image.svg'} />
        </div>
        <div className={'error_page__title'}>
          ĐÃ XẢY RA LỖI, VUI LÒNG THỬ LẠI
        </div>

        <Grid container spacing={0} item xs={12} direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs className="error_page__search">
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
      </div>

    </>
  );
};

export default ErrorPageProps;
