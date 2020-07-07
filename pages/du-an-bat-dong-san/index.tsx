import * as React from 'react';

//Import for Props
import ProcessQueryData from '../../modules/LayeredNavigation/processDataFromQuery';
//Import Main Search Page
import MainSearchPage from "../../components/LayeredNavigation/MainSearchPage";
import {NextPage} from 'next';
//Import SCSS
import "../../assets/scss/style.scss";
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
    <MainSearchPage {...props} typePage={'project-index'}/>
  );
};

// @ts-ignore
AdSellLeasesPage.getInitialProps = async function(props: QueryProp) {
  let query = props.query;
  let propObject = ProcessQueryData.processQueryData(query, 'project-index', '');
  return propObject;
};

export default AdSellLeasesPage
