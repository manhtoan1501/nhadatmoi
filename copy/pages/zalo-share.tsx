import * as React from 'react';
import Head from "next/head";
import Validator from "../modules/validator";
import {useEffect} from "react";
import {NextPage} from "next";

interface ZaloQueryProps {
  query: {
    url: string
  }
}
// @ts-ignore
const ZaloShare: NextPage = (props: ZaloQueryProps) => {
  if (props.query.url && !Validator.isBlank(props.query.url)) {
    useEffect(() => {
      let checkStatus = setInterval(() => {
        // @ts-ignore
        let urlZalo = document.getElementById("zalo_share_ndm").getAttribute("data-href");
        if (urlZalo && !Validator.isBlank(urlZalo)) {
          // @ts-ignore
          document.getElementById("zalo_share_ndm").click();
          clearInterval(checkStatus);
        }
      }, 1000);

    }, []);
    return (
      <>
        <Head>
          <title>Chia sẻ URL lên Zalo - Nội thất Dodo</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="https://static.nhadatmoi.net/default/icon.png"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=vietnamese" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
          <link rel="stylesheet" type="text/css" href={'/zalo_share.css'}/>
          <style>

          </style>
        </Head>
        <div className={"zalo_background"}/>
        <script src="https://sp.zalo.me/plugins/sdk.js"/>
      </>
    );
  } else {
    return (<></>);
  }

};

// @ts-ignore
ZaloShare.getInitialProps = (props: ZaloQueryProps) => {
  let propsReturn = {
    statusCode: 200,
    query: props.query
  };
  return propsReturn;
};

export default ZaloShare;
