import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const LayoutPage = (props) => {
  return (
    <div>
      <Head>
        <title>Greencons</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default LayoutPage;
