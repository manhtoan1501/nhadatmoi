import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Url from 'url';
const Querystring = require('querystring');
import Validator from "../modules/validator";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ServerStyleSheets } from '@material-ui/core/styles';


// @ts-ignore
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    let urlObject = Url.parse(ctx.asPath);
    let dataUrl = '';
    if (typeof urlObject.query === "string") {
      let urlString = Querystring.parse(urlObject.query);
      if (urlString && !Validator.isBlank(urlString.url)) {
        dataUrl = (urlString.url);
      }
    }

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheets.collect(<App {...props} />),
      });

    let initialProps = await Document.getInitialProps(ctx);
    initialProps = {
      ...initialProps, styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    }
    let dataReturn = {
      url_string: '',
      ...initialProps
    };
    dataReturn.url_string = dataUrl;
    return dataReturn;
  }
  render() {
    // @ts-ignore
    let urlString = this.props.url_string || '';
    return (
      <html lang={"vi-VN"}>
        <Head />
        <div className={"zalo_share"}>
          <div className={"zalo-share__logo"}>
            <svg viewBox="0 0 173.7 40">
              <g>
                <path className="st0"
                  d="M15.9,38c-1.9-1.4-6.5-4.6-7.5-10.1c-0.5-2.7,0.2-5.5,1.9-7.7c1.8-2.2,4.5-3.5,7.4-3.7c0.1,0,0.2,0,0.3,0c2.7,0,5.3,1.2,7,3.3c1.9,2.2,2.7,5.1,2.3,7.9c-0.9,5.3-5,8.4-7.4,10.2l-2,1.5L15.9,38z M18,20.3c-0.1,0-0.1,0-0.2,0c-1.9,0.1-3.6,0.9-4.7,2.3c-1.1,1.3-1.5,3-1.2,4.7c0.7,3.5,3.3,5.8,5.8,7.7c2.8-2.1,5.3-4.2,5.8-7.7c0.3-1.7-0.3-3.6-1.4-5C21.2,21,19.7,20.3,18,20.3z" />
                <path className="st0"
                  d="M17.9,22.7c1.9,0,3.4,1.6,3.4,3.4c0,1.9-1.6,3.4-3.4,3.4c-1.9,0-3.5-1.6-3.5-3.4C14.5,24.2,16,22.7,17.9,22.7z" />
                <g>
                  <path className="st1"
                    d="M54.2,34.1v-7.5c0-0.9-0.1-1.6-0.4-2c-0.3-0.6-0.9-0.8-1.8-0.8c-0.9,0-1.5,0.3-1.9,0.8c-0.3,0.4-0.5,1.1-0.5,2v7.4h-4.1V20.4h3.8v1.5h0.1c0.8-1.3,2-1.9,3.7-1.9c1.4,0,2.6,0.4,3.5,1.2c0.6,0.5,1,1.2,1.3,2c0.2,0.7,0.3,1.5,0.3,2.4v8.6H54.2z" />
                  <path className="st1"
                    d="M68.8,34.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.4-0.6-1-0.9-1.8-0.9c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.4-0.5,1.1-0.5,1.9v7.6h-4.1V15.8h4.1v5.8h0c0.3-0.6,0.8-1.1,1.5-1.3c0.6-0.3,1.2-0.4,2-0.4c1.6,0,2.9,0.5,3.7,1.5c0.6,0.7,1,1.5,1.1,2.4c0.1,0.4,0.1,0.8,0.1,1.3c0,0.2,0,0.4,0,0.7v8.3H68.8z" />
                  <path className="st1"
                    d="M85,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H85z M84.1,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C85,26.2,84.7,25.4,84.1,24.7z" />
                  <path className="st1"
                    d="M101.5,34.1v-1.5h0c-0.4,0.7-1,1.2-1.8,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.7,1.8-5.1c1.3-1.4,2.9-2.2,4.9-2.2c1.6,0,3,0.5,4,1.6v-5.7h4.1v18.2H101.5z M100.5,24.7c-0.7-0.6-1.5-1-2.5-1c-1,0-1.8,0.3-2.5,1c-0.7,0.6-1,1.5-1,2.5c0,1,0.3,1.8,1,2.5c0.6,0.7,1.5,1,2.5,1c1,0,1.9-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C101.5,26.2,101.2,25.4,100.5,24.7z" />
                  <path className="st1"
                    d="M117.6,34.1v-1.5h0c-0.3,0.7-0.9,1.2-1.7,1.5c-0.7,0.3-1.4,0.4-2.3,0.4c-2.1,0-3.7-0.7-5-2.1c-1.2-1.4-1.9-3.1-1.9-5.2c0-2,0.6-3.8,1.9-5.2c1.3-1.4,3-2.2,5-2.2c0.8,0,1.6,0.2,2.3,0.5c0.8,0.3,1.3,0.8,1.7,1.5h0v-1.5h4.1v13.7H117.6z M116.6,24.7c-0.6-0.7-1.5-1-2.5-1c-1,0-1.8,0.3-2.4,1c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.8,1,2.4c0.7,0.7,1.5,1,2.4,1c1,0,1.8-0.3,2.5-1c0.6-0.7,1-1.5,1-2.5C117.6,26.2,117.3,25.4,116.6,24.7z" />
                  <path className="st1" d="M128.6,23.5v10.6h-4.1V23.5h-2v-3.1h2v-4.6h4.1v4.6h2v3.1H128.6z" />
                  <path className="st1"
                    d="M148.3,34.1v-7.3c0-0.9-0.1-1.6-0.3-2.1c-0.3-0.6-0.9-1-1.8-1c-0.8,0-1.4,0.3-1.8,0.8c-0.3,0.5-0.5,1.1-0.5,2v7.5h-4.1v-7.4c0-0.9-0.1-1.5-0.4-2c-0.3-0.6-0.9-0.9-1.7-0.9c-0.9,0-1.5,0.3-1.9,0.9c-0.3,0.5-0.4,1.2-0.4,2.1v7.3h-4.1V20.4h3.8v1.5h0.1c0.4-0.7,0.9-1.2,1.6-1.5c0.6-0.3,1.3-0.4,2.2-0.4c1.7,0,3.1,0.8,3.9,2.4c1-1.6,2.5-2.4,4.3-2.4c1.5,0,2.7,0.5,3.6,1.4c0.7,0.7,1.1,1.5,1.3,2.5c0.1,0.4,0.1,0.8,0.1,1.4c0,0.2,0,0.4,0,0.7v8.2H148.3z" />
                  <path className="st1"
                    d="M166.2,32.4c-1.4,1.4-3.2,2.1-5.3,2.1c-2.1,0-3.9-0.7-5.2-2.1c-1.4-1.4-2.1-3.1-2.1-5.2c0-2.1,0.7-3.8,2.1-5.2c1.4-1.4,3.1-2.1,5.2-2.1c2.1,0,3.9,0.7,5.3,2.1c1.4,1.4,2.1,3.1,2.1,5.2C168.3,29.3,167.6,31.1,166.2,32.4z M163.3,24.8c-0.6-0.7-1.4-1-2.4-1c-0.9,0-1.7,0.3-2.3,1c-0.6,0.7-0.9,1.5-0.9,2.4c0,0.9,0.3,1.7,0.9,2.4c0.6,0.7,1.4,1,2.3,1c0.9,0,1.7-0.3,2.4-1c0.6-0.7,0.9-1.5,0.9-2.4C164.2,26.3,163.9,25.5,163.3,24.8z" />
                  <path className="st1" d="M169.7,19v-3.1h4.1V19H169.7z M169.7,34.1V20.4h4.1v13.7H169.7z" />
                </g>
                <path className="st0"
                  d="M34.6,13.3L20,0.8c-1.2-1.1-3-1.1-4.3,0L1.2,13.3C0.4,13.9,0,14.8,0,15.8v21C0,38.5,1.5,40,3.3,40h12.6l-0.9-0.6c-1.1-0.8-3-2.2-4.8-4.2h-2c-1.8,0-3.3-1.5-3.3-3.3V18c0-1,0.4-1.9,1.2-2.5l9.7-8.3c1.2-1.1,3-1.1,4.3,0l9.6,8.3c0.7,0.6,1.1,1.5,1.1,2.5v13.8c0,1.8-1.5,3.3-3.3,3.3h-2c-1.6,1.9-3.4,3.2-4.7,4.2L19.9,40h12.5c1.8,0,3.3-1.5,3.3-3.3v-21C35.7,14.8,35.3,13.9,34.6,13.3z" />
              </g>
            </svg>
          </div>
          <div className={"zalo-share__input"}>
            <input type="text" value={urlString} />
          </div>
          <div className={"zalo-share__title"}>Chia sẻ Bài viết này lên Zalo của bạn</div>
          <div className={"zalo-share__click"}>
            <div className="zalo-share-button" data-href={urlString} id={"zalo_share_ndm"} data-oaid="665488348785625865" data-layout="2" data-color="blue"
              data-customize={true}>CHIA SẺ
            </div>
            <a href={urlString}><div className={"zalo-share__close"}>QUAY LẠI</div></a>
          </div>
        </div>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;
