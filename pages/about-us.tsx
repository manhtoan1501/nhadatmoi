import React from "react";

import { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import "../assets/scss/style.scss";
import { mainURL } from "../constants";

interface LandingPageProps {

}
const LandingPage: NextPage<LandingPageProps> = (prop: LandingPageProps) => {
  let pageTitle = 'Giới thiệu về Nội thất Dodo - Website thương mại điện tử Bất động sản';
  let pageDescription = 'Tin rao của bạn sẽ được tiếp cận một lượng khách hàng lớn nhất bằng công nghệ. Đăng tin theo cách của bạn, còn lại để Nội thất Dodo lo. Mang tới cho người mua và người bán những giao dịch kiểu mới: nhanh, chuẩn, chính xác.';
  let canonicalTagUrl = mainURL + '/about-us';
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      {...prop}
      canonical={canonicalTagUrl}
      path={''}
    >
      {/* <Banner />
      <Cards />
      <Mission />
      <Strengths />
      <AboutUs /> */}
    </Layout>
  );
};

export default LandingPage;
