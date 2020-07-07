import {NextPage} from "next";
import CompareMainPage from "../../components/Compare/CompareMain";
import React, {useEffect} from "react";
//Import SCSS
import "../../assets/scss/style.scss";
import {mainURL} from "../../constants";
import Layout from "../../components/Layout/Layout";
import Validator from "../../modules/validator";
import {apolloClient} from "../../utils";
import {GET_AD_SELL_LEASES_BY_ID} from "../../graphql/ad_sell_leases/queries";

interface ASLComparePageProps {
  query_compare: any
}

interface QueryProp {
  query: any
}

interface ImageProp {
  alt_text: string
  description: string
  title: string
  src: string
}

// @ts-ignore
const ASLComparePage: NextPage<ASLComparePageProps> = (props: ASLComparePageProps) => {
  let pageTitle = 'So sánh Tin rao';
  let pageDescription = 'So sánh Tin rao';
  const [dataCompare, setDataCompare] = React.useState<any[]>([]);
  useEffect(() => {
    if (props.query_compare && props.query_compare.ids && !Validator.isBlank(props.query_compare.ids)) {
      for (let index in props.query_compare.ids) {
        let idCompare = props.query_compare.ids[index];
        apolloClient.query({query: GET_AD_SELL_LEASES_BY_ID, variables: {
            "id": idCompare
          }}).then(response => {
          if (typeof response.data.adSellLease !== "undefined") {
            dataCompare.push(response.data.adSellLease);
            let newDataToUpdate = JSON.parse(JSON.stringify(dataCompare));
            setDataCompare(newDataToUpdate);
          }
        });
      }
    }
  }, []);
  return (
    <Layout
      title={pageTitle}
      description={pageDescription}
      {...props}
      canonical={ mainURL }
      path={''}
    >
      <CompareMainPage dataCompare={dataCompare}/>
    </Layout>
  );
};

// @ts-ignore
ASLComparePage.getInitialProps = async function(props: QueryProp) {
  let queryCompare = props.query;
  return {
    query_compare: queryCompare
  };
};

export default ASLComparePage;
