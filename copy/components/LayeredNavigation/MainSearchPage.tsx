import * as React from 'react';
//Import Layout
import Layout from '../../components/Layout/Layout';
import processQueryUrl from "../../modules/LayeredNavigation/processQueryFromData";
//Import Components
import TitleBlock from "../../components/Index/TitleBlock";
import GridAdSellLeases from "../../components/GridList/GridAdSellLeases";
import GridProject from "../../components/GridList/GridProject";
import LayeredNavigation from "../../components/LayeredNavigation/LayeredNavigation";
import TopLayered from "../../components/LayeredNavigation/TopLayered";
import {NextPage} from 'next';
import Grid from "@material-ui/core/Grid";
import SearchKeyword from "../../components/Search/KeywordSlide";
import PaginationPage from "../../components/Pagination/Pagination";
import LoadingPage from "../../components/Display/LoadingPage";
import StringProcess from "./../../modules/stringProcess";
import Validator from "../../modules/validator";
import CategoryContent from "../../components/Search/CategoryContent";
import Router, {useRouter} from 'next/router';
//Import SCSS
import "../../assets/scss/style.scss";
import {apolloClient} from "../../utils";
import {GET_AD_SELL_LEASES} from "../../graphql/ad_sell_leases/queries";
import EmptyPage from "../../components/Display/EmptyPage";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import {useEffect} from "react";
import {GET_PROJECT_LIST} from "../../graphql/project/queries";
import {mainURL} from "../../constants";
import urlProcess from "../../modules/urlProcess";
import {DataLayeredNavigationProps} from '../../interfaces/interface';
import {adSellLeaseType, adSellLeaseCategory} from "../../constants";
import Breadcrumbs from "./Breadcrumbs";

interface BreadcrumbsItem {
  href: string
  href_as: string
  name: string
}

interface AdSellLeasesListProps {
  node: {
    id: string
    title: string,
    description: string,
    slug: string,
    created_at: string,
    updated_at: string,
    view_count: number
    price: {
      unit: string
      value: string
    },
    avatar: {
      alt_text: string
      src: string
      description: string
    },
    address: {
      text: string,
      ward: string,
      district: string,
      city: string
    },
    area: {
      unit: string
      value: string
    }
  }
}

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
  slug: string,
  typePage: string
}


interface ProjectListProp {
  node: {
    id: string
    price: string,
    name: string,
    land_area: string,
    slug: string,
    created_at: string,
    updated_at: string,
    view_count: number
    address: {
      text: string,
      ward: string,
      district: string,
      city: string
    },
    cover_image: string,
    intro_content: string
  }
}

// @ts-ignore
const MainSearchPage: NextPage<SearchPageProp> = (props: SearchPageProp) => {
  //Define Query Data
  const [queryFilter, setQueryFilter] = React.useState("'{}'");
  const [totalNumber, setTotalNumber] = React.useState(0);
  const [isNextPage, setNextPage] = React.useState(false);
  const [isPrevPage, setPrevPage] = React.useState(false);
  const [statusLoading, setStatusLoading] = React.useState(false);

  //Search Data AdsellLease
  const [searchDataAdSellLease, setSearchDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
  //Search Data Project
  const [searchDataProject, setSearchDataProject] = React.useState<ProjectListProp[]>([]);

  //Layered Navigation Data
  const [dataLayeredNavigation, setDataLayeredNavigation] = React.useState<DataLayeredNavigationProps>(props.dataQuery);
  const router = useRouter();
  const updateLayeredNavigation = (data: DataLayeredNavigationProps) => {
    let valueString = getFilterString(data);
    setDataLayeredNavigation(data);
    setQueryFilter(valueString);
    processRenderPage(1, null, valueString);
    updateQueryString(data);
  };

  const updateQueryString = (data: DataLayeredNavigationProps) => {
    let queryString = processQueryUrl.processQueryUrl(data, props.typePage);
    let slugAs = '/tim-tin-rao';
    let urlProcess = '/[slug]';

    if (props.typePage !== 'ad-sell-lease-location' && props.typePage !== 'ad-sell-lease-index') {
      slugAs = '/du-an-bat-dong-san';
      urlProcess = '/du-an-bat-dong-san';
    }

    if ((data.type2 || data.type1) && data.type_slug && (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index')) {
      slugAs = data.type_slug;
    }

    if (data.slug && (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index')) {
      urlProcess = '/[slug]/[location]';
      slugAs = slugAs + '/' + data.slug;
    }

    if (queryString) {
      slugAs = slugAs +  '?' + queryString;
    }
    Router.push(urlProcess, slugAs, { shallow: false });
  };

  const getFilterString = (filterQuery: DataLayeredNavigationProps) => {
    let filterQueryProcess = processQueryUrl.processQueryString(filterQuery);
    let valueString = JSON.stringify(filterQueryProcess);
    valueString = valueString.split('"').join("'");
    return valueString;
  };

  //First Render Data
  useEffect(() => {
    let valueString = getFilterString(props.dataQuery);
    processRenderPage(props.dataQuery.page, null, valueString);
  }, []);

  //Process Render Page
  const processRenderPage = (page: number|null, limit: number|null, filter: string|null) => {
    setStatusLoading(true);
    let queryFilterPrepare = filter?filter:queryFilter;

    let queryGraphQL = GET_AD_SELL_LEASES;
    if (props.typePage !== 'ad-sell-lease-location' && props.typePage !== 'ad-sell-lease-index') {
      queryGraphQL = GET_PROJECT_LIST;
    }
    apolloClient.query({query: queryGraphQL, variables: {
        "page": dataLayeredNavigation.page,
        "limit": dataLayeredNavigation.limit,
        "filter": queryFilterPrepare
    }}).then(response => {
      setStatusLoading(false);
      if (props.typePage !== 'ad-sell-lease-location' && props.typePage !== 'ad-sell-lease-index') {
        //Set Search Data
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.projects.edges)) {
          setSearchDataProject(response.data.projects.edges);
        }
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.projects.edges)) {
          setTotalNumber(response.data.projects.edges.length);
        }
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.projects.pageInfo.hasNextPage)) {
          setNextPage(response.data.projects.pageInfo.hasNextPage);
        }
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.projects.pageInfo.hasPreviousPage)) {
          setPrevPage(response.data.projects.pageInfo.hasPreviousPage);
        }

        //If Blank
        if (Validator.isBlank(response.data) || Validator.isBlank(response.data.projects.edges)) {
          setSearchDataProject([]);
          setTotalNumber(0);
          setNextPage(false);
          setPrevPage(false);
        }
      } else {
        //Set Search Data
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.edges)) {
          setSearchDataAdSellLease(response.data.adSellLeases.edges);
        }
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.edges)) {
          setTotalNumber(response.data.adSellLeases.edges.length);
        }
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.pageInfo.hasNextPage)) {
          setNextPage(response.data.adSellLeases.pageInfo.hasNextPage);
        }
        if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.pageInfo.hasPreviousPage)) {
          setPrevPage(response.data.adSellLeases.pageInfo.hasPreviousPage);
        }

        //If Blank
        if (Validator.isBlank(response.data) || Validator.isBlank(response.data.adSellLeases.edges)) {
          setSearchDataAdSellLease([]);
          setTotalNumber(0);
          setNextPage(false);
          setPrevPage(false);
        }
      }
    });
  };

  //Process Open Left Layered Navigation
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

  // @ts-ignore
  const handleOpenPopup = () => {
    setState({...state, ["right"]: true});
  };

  //Process Next Page, Previous Page
  const onNextPage = () => {
    let nextPage = Number(dataLayeredNavigation.page) + 1;
    dataLayeredNavigation.page = nextPage;
    setDataLayeredNavigation(dataLayeredNavigation);
    processRenderPage(nextPage, null, null);
    updateQueryString(dataLayeredNavigation);
  };

  const onPrevPage = () => {
    let previousPage = Number(dataLayeredNavigation.page) - 1;
    if (previousPage >= 1) {
      dataLayeredNavigation.page = previousPage;
      setDataLayeredNavigation(dataLayeredNavigation);
      processRenderPage(previousPage, null, null);
      updateQueryString(dataLayeredNavigation);
    }
  };

  //Prepare and Filter Location
  let locationItem = {
    id: null,
    name: null,
    title: null,
    slug: null,
    seo_title: null,
    description: null,
    seo_description: null,
    image: null
  };
  if (!Validator.isBlank(props.location.city) && !Validator.isBlank(props.location.city.id)) {
    locationItem =  Object.assign(locationItem, props.location.city);
  }
  if (!Validator.isBlank(props.location.district) && !Validator.isBlank(props.location.district.id)) {
    locationItem = Object.assign(locationItem, props.location.district);
  }
  if (!Validator.isBlank(props.location.ward) && !Validator.isBlank(props.location.ward.id)) {
    locationItem = Object.assign(locationItem, props.location.ward);
  }

  //Prepare page content
  let titlePage = '';
  let descriptionPage = '';
  let heading = '';

  if (props.typePage !== 'ad-sell-lease-location' && props.typePage !== 'ad-sell-lease-index') {
    if (!Validator.isBlank(locationItem.name)) {
      if (!Validator.isBlank(locationItem.seo_title)) {
        titlePage = String(locationItem.seo_title);
      } else {
        titlePage = 'Dự án tại ' + locationItem.name + ' năm 2020';
      }
      if (!Validator.isBlank(locationItem.title)) {
        heading = String(locationItem.title);
      } else {
        heading = 'Dự án tại ' + locationItem.name;
      }
      if (!Validator.isBlank(locationItem.seo_description)) {
        descriptionPage = String(locationItem.seo_description);
      } else {
        descriptionPage = '';
      }
    } else {
      titlePage = "Tin tức dự án bất động sản toàn quốc đầy đủ, cập nhật nhất";
      heading = 'Tìm dự án';
      descriptionPage = 'Nội thất Dodo cập nhật liên tục tất cả dự án bất động sản trên toàn quốc với đầy đủ thông tin về quy mô, mức giá, tiến độ và đánh giá tiềm năng phát triển.';
    }
  } else {
    if (!Validator.isBlank(locationItem.name) && dataLayeredNavigation.type_slug) {
      if (!Validator.isBlank(locationItem.seo_title)) {
        titlePage = String(locationItem.seo_title);
      } else {
        titlePage = 'Mua bán nhà tại ' + locationItem.name + ' năm 2020';
      }
      if (!Validator.isBlank(locationItem.title)) {
        heading = String(locationItem.title);
      } else {
        heading = 'Mua bán nhà tại ' + locationItem.name;
      }
      if (!Validator.isBlank(locationItem.seo_description)) {
        descriptionPage = String(locationItem.seo_description);
      } else {
        descriptionPage = '';
      }
    } else {
      titlePage = "Tin rao bất động sản uy tín nhất hiện nay - Nội thất Dodo";
      heading = 'Tìm tin rao';
      descriptionPage = 'Website đăng tin, mua bán bất động sản uy tín, nhanh chóng và hiệu quả. 100% tin rao trên toàn quốc đều được kiểm chứng và xác thực bởi hệ thống thông minh.';
    }
  }

  let dataBreadcrumbs = [];

  if (props.dataQuery.type_slug) {
    let typeSlug = props.dataQuery.type_slug;
    let typeString = '';
    let type1String = '';
    let type1Slug = props.dataQuery.type_slug;
    let type2ChildBreadrumbsSlug = '';
    let type2ParentBreadcrumbsSlug = '';

    for (let typeIndex in adSellLeaseType) {
      if (typeSlug === adSellLeaseType[typeIndex].slug) {
        typeString = adSellLeaseType[typeIndex].name;
        type1Slug = adSellLeaseType[typeIndex].type1_slug;
        if (adSellLeaseType[typeIndex].parent_slug) {
          type2ParentBreadcrumbsSlug = adSellLeaseType[typeIndex].parent_slug;
          type2ChildBreadrumbsSlug = adSellLeaseType[typeIndex].slug;
        } else {
          type2ParentBreadcrumbsSlug = adSellLeaseType[typeIndex].slug;
        }
      }
    }

    for (let type1Index in adSellLeaseCategory) {
      if (type1Slug === adSellLeaseCategory[type1Index].slug) {
        type1String = adSellLeaseCategory[type1Index].name;
        let dataToPushBreadcrumbs = {
          href: '/[slug]',
          href_as: adSellLeaseCategory[type1Index].slug,
          name: adSellLeaseCategory[type1Index].name
        };
        dataBreadcrumbs.push(dataToPushBreadcrumbs);
      }
    }

    if (!typeString) {
      typeString = type1String;
    }

    if (type2ParentBreadcrumbsSlug) {
      for (let typeIndex in adSellLeaseType) {
        if (type2ParentBreadcrumbsSlug === adSellLeaseType[typeIndex].slug) {
          let dataToPushBreadcrumbs = {
            href: '/[slug]',
            href_as: adSellLeaseType[typeIndex].slug,
            name: adSellLeaseType[typeIndex].name
          };
          dataBreadcrumbs.push(dataToPushBreadcrumbs);
        }
      }
    }

    if (type2ChildBreadrumbsSlug) {
      for (let typeIndex in adSellLeaseType) {
        if (type2ChildBreadrumbsSlug === adSellLeaseType[typeIndex].slug) {
          let dataToPushBreadcrumbs = {
            href: '/[slug]',
            href_as: adSellLeaseType[typeIndex].slug,
            name: adSellLeaseType[typeIndex].name
          };
          dataBreadcrumbs.push(dataToPushBreadcrumbs);
        }
      }
    }

    let cityName = '';
    let districtName = '';
    let wardName = '';
    if (props && props.location && props.location.ward) {
      wardName = String(props.location.ward.name);
    }
    if (props && props.location && props.location.district) {
      districtName = String(props.location.district.name);
    }
    if (props && props.location && props.location.city) {
      cityName = String(props.location.city.name);
    }
    let locationName = '';
    if (wardName) {
      locationName = wardName + ' - ';
    }
    if (districtName) {
      locationName = locationName + districtName + ' - ';
    }
    if (cityName) {
      locationName = ' tại ' + locationName + cityName;
    }
    if (dataLayeredNavigation.type_slug !== '/nha-dat-ban' || Validator.isBlank(locationItem.name)) {
      titlePage = 'Mua bán ' + typeString + locationName;
      heading = typeString + locationName;
      descriptionPage = typeString + locationName;
      descriptionPage = 'Giao dịch - tin rao ' + descriptionPage + ' giá rẻ, chính chủ tại Việt Nam. Liên hệ ngay để mua bán ' + descriptionPage + ' với giá tốt nhất ✅ Mua ngay!';
    }
  }

  if ((!dataBreadcrumbs || !dataBreadcrumbs.length) && props.dataQuery.parent_slug) {
    let parentSlug = props.dataQuery.parent_slug;
    for (let indexType1 in adSellLeaseCategory) {
      if (('/' + parentSlug) === adSellLeaseCategory[indexType1].slug) {
        let dataToPushBreadcrumbs = {
          href: '/[slug]',
          href_as: adSellLeaseCategory[indexType1].slug,
          name: adSellLeaseCategory[indexType1].name
        };
        dataBreadcrumbs.push(dataToPushBreadcrumbs);
      }
    }
  }
  let pathString = String(props.dataQuery.type_slug);
  let pathForLayout = 'tin-rao';
  if (props.typePage !== 'ad-sell-lease-location' && props.typePage !== 'ad-sell-lease-index') {
    pathString = 'du-an-bat-dong-san';
    pathForLayout = 'du-an-bat-dong-san';
  }
  if (!pathString) {
    pathString = '/tim-tin-rao';
  }
  let canonicalTag = mainURL + pathString;
  if (props.slug) {
    canonicalTag = canonicalTag + '/' + props.slug;
  }

  let imageAvatar = 'https://static.nhadatmoi.net/default/home_default.jpg';
  if (locationItem.image) {
    let imageString = String(locationItem.image);
    imageAvatar = urlProcess.processImageUrl(imageString, '');
  }

  const freshText = (input: string) => {
    input = StringProcess.stripProperties(input, []);
    input = StringProcess.stripTags(input, '');
    input = input.replace(/&nbsp;/g, ' ');
    return input;
  };
  const convertDescription = (input: string) => {
    return input.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  };

  if (locationItem.description && (descriptionPage === '' || !descriptionPage)) {
    let textToReplace = String(locationItem.description);
    descriptionPage = freshText(textToReplace);
    descriptionPage = convertDescription(descriptionPage);
    descriptionPage = StringProcess.truncateString(descriptionPage, 255, '');
  }

  let contentText = '';
  if (dataLayeredNavigation.type_slug === '/nha-dat-ban' && locationItem.description) {
    contentText = String(locationItem.description);
  }

  // @ts-ignore
  return (
    <Layout
      title={titlePage}
      description={descriptionPage}
      {...props}
      image={imageAvatar}
      canonical={ canonicalTag }
      path={pathForLayout}
    >
      <div className="body_container">
        <Hidden smDown>
          <LayeredNavigation className="search_layered" updateLayeredNavigation={updateLayeredNavigation} dataLayeredNavigation={dataLayeredNavigation} typePage={props.typePage}/>
        </Hidden>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          <LayeredNavigation className="search_layered" updateLayeredNavigation={updateLayeredNavigation} dataLayeredNavigation={dataLayeredNavigation} typePage={props.typePage}/>
        </Drawer>
        <Grid item className="search_body border">
          <Breadcrumbs dataBreadcrumbs={dataBreadcrumbs}/>
          <TitleBlock
            title={heading}
            description={"Hiển thị " +  StringProcess.addCommas(Number(totalNumber).toString()) + " kết quả"}
            type={"h1"}
            path={""}
          />
          <TopLayered className="top_layered" onOpen={() => handleOpenPopup()} updateLayeredNavigation={updateLayeredNavigation} dataLayeredNavigation={dataLayeredNavigation}/>

          {statusLoading &&
          <LoadingPage className="loading_page" grid={{xl: 3, lg: 4, md: 6, sm: 6, xs: 12}} numberLimit={12}/>
          }

          {!statusLoading && searchDataAdSellLease.length == 0 && (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index') &&
          <EmptyPage title="Không tìm thấy kết quả nào" description="Vui lòng sử dụng từ khóa khác hoặc sử dụng bộ lọc nâng cao để tìm kiếm kết quả phù hợp"/>
          }

          {!statusLoading && searchDataProject.length == 0 && (props.typePage === 'project-index') &&
          <EmptyPage title="Không tìm thấy kết quả nào" description="Vui lòng sử dụng từ khóa khác hoặc sử dụng bộ lọc nâng cao để tìm kiếm kết quả phù hợp"/>
          }

          {!statusLoading && searchDataAdSellLease.length > 0 && (props.typePage === 'ad-sell-lease-location' || props.typePage === 'ad-sell-lease-index') &&
          <div>
            <GridAdSellLeases
              grid={{xl: 3, lg: 4, md: 6, sm: 6, xs: 12}}
              gridData={searchDataAdSellLease}
              className="grid__list"
            />
            <PaginationPage
              isNextPage={isNextPage}
              isPrevPage={isPrevPage}
              currentPage={2}
              onNextPage={onNextPage}
              onPrevPage={onPrevPage}
            />
          </div>
          }
          {!statusLoading && searchDataProject.length > 0 && (props.typePage === 'project-index') &&
          <div>
            <GridProject
              grid={{xl: 3, lg: 4, md: 6, sm: 6, xs: 12}}
              gridData={searchDataProject}
              className="grid__list"
            />
            <PaginationPage
              isNextPage={isNextPage}
              isPrevPage={isPrevPage}
              currentPage={2}
              onNextPage={onNextPage}
              onPrevPage={onPrevPage}
            />
          </div>
          }
          <CategoryContent description={contentText}/>
          <SearchKeyword/>
        </Grid>
      </div>
    </Layout>
  );
};

export default MainSearchPage;
