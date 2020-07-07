import {NextPage} from "next";
import React, {useEffect} from "react";
import "../../assets/scss/style.scss";
import {mainURL} from "../../constants";
import Layout from "../../components/Layout/Layout";
import ErrorPage from "../../components/Layout/ErrorPage";
import TitleBlock from "../../components/Index/TitleBlock";
import LoadingPage from "../../components/Display/LoadingPage";
import GridAdSellLeases from "../../components/GridList/GridAdSellLeases";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import {apolloClient} from "../../utils";
import {HOME_GET_AD_SELL_LEASES} from "../../graphql/ad_sell_leases/queries";
import Validator from "../../modules/validator";
import {AdSellLeasesListProps} from '../../interfaces/interface';

interface ErrorPageProps {
  statusCode: number
}

const ErrorMainPage: NextPage<ErrorPageProps> = (props: ErrorPageProps) => {
  console.log("PAGE ERROR");
  let pageTitle = 'Đã xảy ra lỗi, vui lòng thử lại';
  let pageDescription = 'Hiện đã xảy ra lỗi, vui lòng thử lại sau';
  const [dataAdSellLeases, setDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = React.useState<boolean>(true);
  useEffect(() => {
    apolloClient.query({
      query: HOME_GET_AD_SELL_LEASES, variables: {
        "page": 1,
        "limit": 8,
        "filter": "'{}'"
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);
      if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.edges)) {
        setDataAdSellLease(response.data.adSellLeases.edges);
      }
    });
  }, []);
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      {...props}
      canonical={ mainURL }
      path={''}
    >
      <ErrorPage/>
      <TitleBlock title="Tin rao phù hợp với bạn" description="Xem thêm một số tin rao phù hợp với bạn" path={"/tim-tin-rao"} type={"h2"}/>
      {
        statusLoadingAdSellLease &&
        <LoadingPage className="loading_page" grid={{xl: 3, lg: 3, md: 4, sm: 6, xs:12}} numberLimit={8}/>
      }
      {
        !statusLoadingAdSellLease &&
        <>
          <GridAdSellLeases grid={{xl: 3, lg: 3, md: 4, sm: 6, xs:12}} gridData={dataAdSellLeases} className="grid__list"/>
          <div className="content_index_button">
            <Link href="/[slug]" as={'/tim-tin-rao'}><Button>Xem thêm</Button></Link></div>
        </>
      }
    </Layout>
  );
};

// @ts-ignore
ErrorMainPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
};

export default ErrorMainPage;
