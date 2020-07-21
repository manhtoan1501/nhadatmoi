import * as React from 'react';
import {NextPage} from 'next';
//Import for Props
import ProcessQueryData from '../../modules/LayeredNavigation/processDataFromQuery';

//Import Main Search Page
import MainSearchPage from "../../components/LayeredNavigation/MainSearchPage";
//Import SCSS
import "../../assets/scss/style.scss";
import {adSellLeaseType, adSellLeaseCategory} from "../../constants";
import {DataLayeredNavigationProps} from '../../interfaces/interface';

interface LocationItemProp {
  id: string|null;
  name: string|null;
  title: string|null;
  slug: string|null;
  seo_title: string|null;
  seo_description: string|null;
  image: string|null;
}

interface SearchPageProp {
  location: {
    city: LocationItemProp;
    ward: LocationItemProp;
    district: LocationItemProp;
  },
  dataQuery: DataLayeredNavigationProps,
  slug: string
}

interface QueryProp {
  query: any
}

interface AdSellLeaseSortType {
  time?: "newest" | "oldest",
  price?: "low_to_high" | "high_to_low",
  view?: "low_to_high" | "high_to_low",
  rate?: "high_to_low"
}

// @ts-ignore
const AdSellLeasesPage: NextPage<SearchPageProp> = (props: SearchPageProp) => {
  return (
    <MainSearchPage {...props} typePage={'ad-sell-lease-index'}/>
  );
};

// @ts-ignore
AdSellLeasesPage.getInitialProps = async function(props: QueryProp) {
  //Check Slug
  let isSlugType = false;
  let type2ASL = '';
  let type1ASL = '';
  if (props.query && props.query.slug) {
    for (let index in adSellLeaseType) {
      let slugASL2Type = adSellLeaseType[index];
      if (slugASL2Type.slug === ('/' + props.query.slug)) {
        isSlugType = true;
        type2ASL = slugASL2Type.id;
      }
    }
    for (let index in adSellLeaseCategory) {
      let slugASL1Type = adSellLeaseCategory[index];
      if (slugASL1Type.slug === ('/' + props.query.slug)) {
        isSlugType = true;
        type1ASL = slugASL1Type.id;
      }
    }
    if (props.query.slug === 'nha-dat-ban'
      || props.query.slug === 'tim-tin-rao'
      || props.query.slug === 'nha-dat-thue'
      || props.query.slug === 'nha-dat-can-ban'
      || props.query.slug === 'nha-dat-can-thue'
    ) {
      isSlugType = true;
    }
  }

  let query = props.query;
  let propObject = ProcessQueryData.processQueryData(query, 'ad-sell-lease-index', type1ASL, type2ASL);
  if (!isSlugType) {
    (await propObject).statusCode = 404;
  }
  return propObject;
};

export default AdSellLeasesPage
