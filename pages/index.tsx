import * as React from 'react';

import Layout from '../components/Layout/Layout';
import SearchHomepage from "../components/Index/SearchHomepage";
import ContentMenu from "../components/Home/ContenMenu";
import TitleBlock from "../components/Index/TitleBlock";
import { NextPage } from 'next';
import SearchKeyword from "../components/Search/KeywordSlide";
import HotLocation from "../components/Index/HotLocation";
import NewsIndex from "../components/Index/NewsIndex";
import { Button, Grid, Typography, Icon, IconButton } from '@material-ui/core';
import Link from 'next/link';
import { localStorageViewed, mainURL, localStorageProjectViewed } from "../constants";
import { indexPageStyle } from '../style/IndexPage'
import fetch from 'isomorphic-unfetch';
import What from '../components/Home/What';
import ButtonViews from '../components/Home/ButtonViews';
import NewHot from '../components/Home/NewHot';
import ListProduct from '../components/Home/ListProduct';
import Partner from "../components/Home/Partner";
import PopoverFilter from "../components/Popover/Index";
import ListMenu from '../components/Home/ListMenu';
import GamepadIcon from '@material-ui/icons/Gamepad';
import Product from '../components/Home/Products';
import TitleBase from '../components/Public/Title';
//Import SCSS
import "../assets/scss/style.scss";
//Import Const
import { apolloClient } from "../utils";
import { GET_AD_SELL_LEASES, HOME_GET_AD_SELL_LEASES, GET_AD_SELL_LEASE_WISH_LIST } from "../graphql/ad_sell_leases/queries";
import { GET_PROJECT_LIST, HOME_GET_PROJECT_LIST } from "../graphql/project/queries";
//Import Module
import Validator from "../modules/validator";
import { AdSellLeasesListProps, ProjectListProps } from "../interfaces/interface"

// interface DataNewsProps {
//   slug: string,
//   link: string,
//   title: {
//     rendered: string
//   },
//   excerpt: {
//     rendered: string
//   },
//   featured_image_url: string,
//   date: string
// }

const IndexPage = (props) => {
  const classes = indexPageStyle;
  // const [statusModal, setModal] = React.useState(false);
  // const updateModal = (data: any) => {
  //   setModal(data);
  // };

  const renderIcon = () => {
    return (
      <div style={{ position: 'fixed', bottom: 30, right: 30 }}>
        <div>
          <a title="Trò chuyện Facebook" target="_blank" rel="noopener" href="http://m.me/925790224164852?ref=zozovn">
            <img src="https://zozo.vn/public/theme/circle/images/widgets/fbmessenger.svg" alt="btn-facebook" />
          </a>
        </div>
        <div>
          <a title="Chat với chúng tôi qua Zalo" target="_blank" rel="noopener" href="https://zalo.me/0377535717">
            <img src="https://zozo.vn/public/theme/circle/images/widgets/zalo.svg" alt="btn-zalo" />
          </a>
        </div>
        <div>
          <a title="Gọi ngay" href="tel:0936062166">
            <img src="https://zozo.vn/public/theme/circle/images/widgets/call.svg" alt="btn-callnow" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={0} justify='center'>
        <Grid item xs={1} style={{ textAlign: 'center' }}></Grid>
        <Grid item xs={2} style={{ textAlign: 'center' }}>
          <ListMenu />
          <NewHot />
        </Grid>
        <Grid item xs={8}>
          <SearchHomepage />
          <div style={{ padding: '20px 0' }}> <What /> </div>
          <ButtonViews />
          <TitleBase title={'Sản phẩm bán chạy'} />
          <Product />
        </Grid>
        <Grid item xs={1} style={{ textAlign: 'center' }}></Grid>
      </Grid>

      <div className="body_container">
        {/* Sản phẩm đã xem */}
        {/* Sản phẩm bạn thích */}
        {/* Sản phẩm HOT */}
        {/* <HotLocation /> */}
        {/* Tin tức  tổng hợp */}
      </div>
      <Partner />
      <SearchKeyword />
      <ListProduct />
      {renderIcon()}
    </div>
  )
};

export default IndexPage;
