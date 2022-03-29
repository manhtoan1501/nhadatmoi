import App from 'next/app';
import Url from 'url';
import React from 'react'
import nextCookie from "next-cookies";
import Router from "next/router";
import withGA from "next-ga";
import { googleAnalyticsCode } from '../constants';
import ThemeContext from '../components/ThemeContext';
import Layout from '../components/Layout/Layout';
import { color } from '../constants';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider value={{ color: color }}>
        <Layout
          title={'Nội thất Dodo'}
          description={'Nội thất Dodo sự lựa chọn hoàn hảo'}
          canonical={'https://nhadatmoi.net'}
          path={''}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeContext.Provider>
    )
  }
}

export default withGA(googleAnalyticsCode, Router)(MyApp);

