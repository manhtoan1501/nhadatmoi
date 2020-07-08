import App from 'next/app';
import Url from 'url';
import React from 'react'
import nextCookie from "next-cookies";
import Router from "next/router";
// @ts-ignore
import withGA from "next-ga";
import { googleAnalyticsCode } from '../constants';
import ErrorPage from "next/error";
import Validator from "../modules/validator";
import ErrorMainPage from '../components/Layout/ErrorMainPage';

const projectDetailPathname = '/chi-tiet-du-an.aspx';
const newLandDetailPathname = '/newland/project_detail.aspx';
const newLandAdSellLeasePathname = '/newland/properties_detail.aspx';
const adSellLeaseDetailPathname = '/chi-tiet-tin-rao.aspx';
const projectDetailNew = '/du-an/';
const adSellLeaseDetailNew = '/tin-rao/';
const projectCategory = '/du-an.aspx';
const adSellLeaseCategory = '/tin-rao.aspx';


class MyApp extends App {
  static async getInitialProps({ Component, ctx, res }: any) {
    if (ctx.asPath) {
      let urlObject = Url.parse(ctx.asPath);

      let pathName = urlObject.pathname;
      let queryString = urlObject.query;
      if (pathName === '/nha-dat-ban/') {
        let urlRedirect = '/nha-dat-ban';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === '/tin-rao/') {
        let urlRedirect = '/tim-tin-rao';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === '/du-an' || pathName === '/du-an/' || pathName === '/du-an-bat-dong-san/') {
        let urlRedirect = '/du-an-bat-dong-san';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (queryString && (pathName === projectDetailPathname || pathName === newLandDetailPathname)) {
        let urlRedirect = '/';
        if (queryString.indexOf('project_id=') === -1) {
          queryString = queryString.replace('.html', '');
          urlRedirect = projectDetailNew + queryString;
        }

        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }
      if (queryString && (pathName === adSellLeaseDetailPathname || pathName === newLandAdSellLeasePathname)) {
        let urlRedirect = '/';

        if (queryString.indexOf('ad_sell_lease_id=') === -1) {
          queryString = queryString.replace('.html', '');
          urlRedirect = adSellLeaseDetailNew + queryString;
        }

        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }
      if (pathName === projectCategory) {
        let urlRedirect = '/du-an';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }

      if (pathName === adSellLeaseCategory) {
        let urlRedirect = '/tim-tin-rao';
        ctx.res.writeHead(301, {
          Location: `${urlRedirect}`
        });
        ctx.res.end();
      }
    }

    let pageProps = {
      statusCode: 200
    };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    let { user } = nextCookie(ctx);
    pageProps = Object.assign(pageProps, { user: user });
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    if (!Validator.isBlank(pageProps.statusCode) && pageProps.statusCode !== 200) {
      return <ErrorMainPage statusCode={pageProps.statusCode} />;
    }
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  }
}

export default withGA(googleAnalyticsCode, Router)(MyApp);

