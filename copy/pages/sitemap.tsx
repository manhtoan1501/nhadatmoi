import React from "react";

import {NextPage} from 'next';
import Layout from '../components/Layout/Layout';

import "../assets/scss/style.scss";
import {mainURL} from "../constants";
import TitleBlock from '../components/Index/TitleBlock';

interface LandingPageProps {

}
const Sitemap: NextPage<LandingPageProps> = (prop: LandingPageProps) => {
  let pageTitle = 'Sitemap Nội thất Dodo';
  let pageDescription = 'Xem chi tiết Sitemap Nội thất Dodo.';
  let canonicalTagUrl = mainURL + '/sitemap';
  return (
      <Layout
          title={pageTitle}
          description={pageDescription}
          {...prop}
          canonical={ canonicalTagUrl }
          path={''}
      >
        <div className="body_container body_sitemap">
          <div className={"body_sitemap__block"}>
            <TitleBlock title="Sitemap" path={"/sitemap"} href={'/sitemap'} type={"h1"}/>
            <a className={'sitemap_item'} href={'https://nhadatmoi.net/sitemap/sitemap.xml'} target={'_blank'}>https://nhadatmoi.net/sitemap/sitemap.xml</a>
          </div>
        </div>
      </Layout>
  );
};

export default Sitemap;
