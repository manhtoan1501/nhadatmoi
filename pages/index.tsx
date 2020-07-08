import * as React from 'react';
import { useEffect } from "react";
//Import Components
import Layout from '../components/Layout/Layout';
import SearchHomepage from "../components/Index/SearchHomepage";
import ContentMenu from "../components/Home/ContenMenu";
import TitleBlock from "../components/Index/TitleBlock";
import GridAdSellLeases from "../components/GridList/GridAdSellLeases";
import GridProject from "../components/GridList/GridProject";
import { NextPage } from 'next';
import SearchKeyword from "../components/Search/KeywordSlide";
import HotLocation from "../components/Index/HotLocation";
import LoadingPage from "../components/Display/LoadingPage";
import NewsIndex from "../components/Index/NewsIndex";
import { Button, Grid, Typography, Icon, IconButton } from '@material-ui/core';
import AdSellLeaseIndex from '../components/Index/AdSellLeaseIndex';
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
import Header_ from '../components/Home/Header';
import Product from '../components/Home/Products';
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
  const [dataAdSellLeasesViewed, setDataAdSellLeaseViewed] = React.useState([]);
  const [dataProjectViewed, setDataProjectViewed] = React.useState([]);
  const [dataAdSellLeaseWishlist, setDataAdSellLeaseWishlist] = React.useState([]);
  const [dataProject, setDataProject] = React.useState([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = React.useState(true);
  const [dataNews, setDataNews] = React.useState([]);
  const [statusLoadingProject, setStatusLoadingProject] = React.useState(true);
  const [statusLoadingNews, setStatusLoadingNews] = React.useState(true);
  let newsUrlApi = 'https://nhadatmoi.net/tin-tuc/wp-json/wp/v2/posts?per_page=8';
  const classes = indexPageStyle;

  useEffect(() => {
    let viewedItem = localStorage.getItem(localStorageViewed);
    if (viewedItem && !Validator.isBlank(viewedItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedItem);
        setDataAdSellLeaseViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    }
    let viewedProjectItem = localStorage.getItem(localStorageProjectViewed);
    if (viewedProjectItem && !Validator.isBlank(viewedProjectItem)) {
      try {
        let viewedItemObject = JSON.parse(viewedProjectItem);
        setDataProjectViewed(viewedItemObject);
      } catch (e) {
        console.log(e);
      }
    }

    apolloClient.query({
      query: GET_AD_SELL_LEASE_WISH_LIST, variables: {
        "page": 1,
        "limit": 12,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);
      if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeaseWishlists.edges)) {
        let dataWishlistToAdd = [];
        for (let wishlistIndex in response.data.adSellLeaseWishlists.edges) {
          let dataToAdd = {
            node: response.data.adSellLeaseWishlists.edges[wishlistIndex].node.ad_sell_lease
          };
          dataWishlistToAdd.push(dataToAdd);
        }
        setDataAdSellLeaseWishlist(dataWishlistToAdd);
      }
    });

    apolloClient.query({
      query: HOME_GET_PROJECT_LIST, variables: {
        "page": 1,
        "limit": 12,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingProject(false);
      if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.projects.edges)) {
        setDataProject(response.data.projects.edges);
      }
    });
    //Get Data News
    fetch(newsUrlApi)
      .then(r => r.json())
      .then(data => {
        setDataNews(data);
        setStatusLoadingNews(false);
      });
  }, []);

  const [statusModal, setModal] = React.useState(false);
  const updateModal = (data: any) => {
    setModal(data);
  };

  const List = () => {
    return (
      <>
        <AdSellLeaseIndex filter={"{'type2':'5e7d5f543f663879c6750927,5e11b046521813a78cde85ac,5e11b046521813a78cde85aa,5e7d61323f663879c6750997,5e11b046521813a78cde85ab'}"} title={'Bán nhà'} type={'h2'} href={'/[slug]'} path={'/mua-ban-nha'} />
        {/* <AdSellLeaseIndex filter={"{'type2':'5e11b046521813a78cde85ae,5e67077e1fea273a985d1d36,5e67070f1fea273a985d1d35,5e11b046521813a78cde85ad,5e6707981fea273a985d1d37'}"} title={'Bán đất'} type={'h2'} href={'/[slug]'} path={'/mua-ban-dat'}/> */}
        {/* <AdSellLeaseIndex filter={"{'type2':'5e11b046521813a78cde85a9,5e7d620f3f663879c67509f8,5e7d622d3f663879c6750a07,5e7d624b3f663879c6750a15,5e7d626b3f663879c6750a23,5e7d628b3f663879c6750a34,5e7d62a53f663879c6750a42,5e7d62cc3f663879c6750a51,5e7d62fc3f663879c6750a6a,5e7d63193f663879c6750a7b,5e7d632f3f663879c6750a8d,5e9924f6716ee964b5fdcc23'}"} title={'Bán căn hộ chung cư'} type={'h2'} href={'/[slug]'} path={'/mua-ban-can-ho-chung-cu'}/> */}
        {/* <AdSellLeaseIndex filter={"{'type2':'5e7d63683f663879c6750ab6,5e9122948c71d25a879d30e6,5e7d64ae3f663879c6750aef,5e7d64c53f663879c6750afe,5e7d64e23f663879c6750b0b,5e7d658a3f663879c6750b70,5e7d65103f663879c6750b27,5e7d655e3f663879c6750b51,5e7d65b83f663879c6750b8a'}"} title={'Bán biệt thự'} type={'h2'} href={'/[slug]'} path={'/mua-ban-biet-thu'}/> */}
        {/* <AdSellLeaseIndex filter={"{'type2':'5e6707c21fea273a985d1d38,5e6707e01fea273a985d1d39,5e6707f81fea273a985d1d3a,5e11b046521813a78cde85b0,5e11b046521813a78cde85af'}"} title={'Bán các loại bất động sản khác'} type={'h2'} href={'/[slug]'} path={'/mua-ban-bat-dong-san-khac'}/> */}
        {/* <AdSellLeaseIndex filter={"{'type1':'5e11af04411e1ea72a1fcbdf'}"} title={'Nhà đất cho thuê'} type={'h2'} href={'/[slug]'} path={'/nha-dat-thue'}/> */}
        {/* <AdSellLeaseIndex filter={"{'type2':'5e11af04411e1ea72a1fcbe0'}"} title={'Nhà đất cần mua'} type={'h2'} href={'/[slug]'} path={'/nha-dat-can-mua'}/> */}
        {/* <AdSellLeaseIndex filter={"{'type2':'5e11af04411e1ea72a1fcbe1'}"} title={'Nhà đất cần thuê'} type={'h2'} href={'/[slug]'} path={'/nha-dat-can-thue'}/> */}
      </>
    )
  }

  const transactionHot = () => {
    return (
      <>
        <TitleBlock
          title="Sản phẩm thiết kế nội thất hiện đại"
          description="Tổng hợp những mẫu thiết kế hiện đại"
          type={"h2"} path={"/du-an-bat-dong-san"}
        />
        <HotLocation />
      </>
    )
  }

  const LoadingPage = () => {
    if (statusLoadingNews) {
      return (
        <LoadingPage className="loading_page" grid={{ xl: 3, lg: 3, md: 4, sm: 6, xs: 12 }} numberLimit={8} />
      )
    }
  }

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

  let pageTitle = 'Nội thất Dodo';
  let pageDescription = 'Nội thất Dodo đón đầu xu hướng';
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      {...props}
      statusModal={statusModal}
      updateModal={updateModal}
      canonical={mainURL}
      path={''}
    >
      <Header_ />
      <Grid container spacing={0} justify='center'>
        <Grid item xs={1} style={{ textAlign: 'center' }}></Grid>
        <Grid item xs={2} style={{ textAlign: 'center' }}>
          <ListMenu />
          <NewHot />
        </Grid>
        <Grid item xs={8}>
          <SearchHomepage />
          <div style={{ padding: '20px 0' }}>
            <What />
          </div>
          <ButtonViews />
          <Product />
        </Grid>
        <Grid item xs={1} style={{ textAlign: 'center' }}></Grid>
      </Grid>

      <div className="body_container">
        {/* <List /> */}
        {/* Sản phẩm đã xem */}
        {/* Sản phẩm bạn thích */}
        {/* Sản phẩm HOT */}
        {/* {projectWahtched()} */}
        {transactionHot()}
        {/* Tin tức  tổng hợp */}
        {/* {LoadingPage()} */}
      </div>
      <Partner />
      <SearchKeyword />
      <ListProduct />
      {renderIcon()}
    </Layout>
  )
};

export default IndexPage;
