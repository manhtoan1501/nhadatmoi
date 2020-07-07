import React, {useEffect} from "react";
import Layout from '../../components/Layout/Layout';
//Import SCSS
import "../../assets/scss/style.scss";

import BannerSliderBlock from "../../components/PageDetail/BannerSliderBlock";
import Main from "../../components/AdSellLeases/AdSellLeasesMain";
import BottomFix from "../../components/PageDetail/BottomBlock";
import {NextPage} from "next";
import {apolloClient} from "../../utils";
import {GET_AD_SELL_LEASES_BY_SLUG} from "../../graphql/ad_sell_leases/queries";
import {COUNT_VIEW_AD_SELL_LEASE} from "../../graphql/ad_sell_leases/mutation";
import StringProcess from "./../../modules/stringProcess";
import {mainURL} from "../../constants";
import urlProcess from "../../modules/urlProcess";
import {AdSellLeaseItem} from "../../interfaces/interface";

interface AdSellLeaseDetailProp {
  url: {
    query: {
      slug: string
    }
  },
  adSellLease: {
    data: {
      adSellLease: AdSellLeaseItem
    }
  },
  slug: string
}
interface QueryProp {
  query: {
    slug: string
  }
}

// @ts-ignore
const AdSellLeaseDetailPage: NextPage<AdSellLeaseDetailProp> = (props: AdSellLeaseDetailProp) => {
  let title = (props.adSellLease.data.adSellLease.title)?props.adSellLease.data.adSellLease.title:'Xem chi tiết tin rao';

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

  let metaTitle = '';
  let metaDescription = '';
  if (props.adSellLease.data.adSellLease.seo_title) {
    metaTitle = props.adSellLease.data.adSellLease.seo_title;
  }
  if (props.adSellLease.data.adSellLease.seo_description) {
    metaDescription = props.adSellLease.data.adSellLease.seo_description;
  }
  if (metaTitle === '' || !metaTitle) {
    metaTitle = title;
  }

  if (metaDescription === '' || !metaDescription) {
    metaDescription = freshText(props.adSellLease.data.adSellLease.description);
    metaDescription = convertDescription(metaDescription);
    metaDescription = StringProcess.truncateString(metaDescription, 255, '');
  }

  let imageAvatar = 'https://static.nhadatmoi.net/default/home_default.jpg';
  if (props.adSellLease.data.adSellLease.avatar && props.adSellLease.data.adSellLease.avatar.src) {
    imageAvatar = urlProcess.processImageUrl(props.adSellLease.data.adSellLease.avatar.src, 'ad_sell_lease');
  }

  //Count Ad Sell Lease
  useEffect(() => {
    let adSellLeaseId = props.adSellLease.data.adSellLease.id;
    apolloClient.mutate({mutation: COUNT_VIEW_AD_SELL_LEASE, variables: {
        "input": {
          "id": adSellLeaseId
        }
      }}).then((response: any) => {
    });
  }, []);

  return (
    <Layout
      title={metaTitle}
      description={metaDescription}
      {...props}
      image={imageAvatar}
      canonical={ mainURL + '/tin-rao/' + props.slug}
      path={'tin-rao'}
    >
      <BannerSliderBlock images={props.adSellLease.data.adSellLease.image} imageType='ad_sell_lease'/>
      <Main
        dataObject={props.adSellLease.data.adSellLease}
        objectUrl={ mainURL + '/tin-rao/' + props.slug}
        imageType='ad_sell_lease'
        image={imageAvatar}
      />
      <BottomFix dataObject={props.adSellLease.data.adSellLease} objectUrl={ mainURL + '/tin-rao/' + props.slug}/>
    </Layout>
  );
};

// @ts-ignore
AdSellLeaseDetailPage.getInitialProps = async function(props: QueryProp) {
  let projectSlug = props.query.slug;
  let adSellLeases = await apolloClient.query({query: GET_AD_SELL_LEASES_BY_SLUG, variables: {
      "slug": projectSlug
    }}).then(response => {
    return response;
  });
  return {
    adSellLease: adSellLeases,
    slug: projectSlug
  };
};


export default AdSellLeaseDetailPage;
