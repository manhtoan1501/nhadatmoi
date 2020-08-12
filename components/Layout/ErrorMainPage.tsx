import { NextPage } from "next";
import React, { useEffect } from "react";
import "../../assets/scss/style.scss";
import { mainURL } from "../../constants";
import Layout from "../../components/Layout/Layout";
import ErrorPage from "../../components/Layout/ErrorPage";
import TitleBlock from "../../components/Index/TitleBlock";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { apolloClient } from "../../utils";
import { HOME_GET_AD_SELL_LEASES } from "../../graphql/ad_sell_leases/queries";
import Validator from "../../modules/validator";
import { AdSellLeasesListProps } from '../../interfaces/interface';

interface ErrorPageProps {
  statusCode: number
}

const ErrorMainPage: NextPage<ErrorPageProps> = (props: ErrorPageProps) => {
  console.log("PAGE ERROR");
  let pageTitle = 'Đã xảy ra lỗi, vui lòng thử lại';
  let pageDescription = 'Hiện đã xảy ra lỗi, vui lòng thử lại sau';
  const [dataAdSellLeases, setDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = React.useState<boolean>(true);
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      {...props}
      canonical={mainURL}
      path={''}
    >
      {/* <ErrorPage/> */}
      <TitleBlock title="Tin rao phù hợp với bạn" description="Xem thêm một số tin rao phù hợp với bạn" path={"/tim-tin-rao"} type={"h2"} />
    </Layout>
  );
};

// @ts-ignore
ErrorMainPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
};

export default ErrorMainPage;
