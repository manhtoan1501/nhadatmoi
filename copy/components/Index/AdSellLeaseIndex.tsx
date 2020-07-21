import React, {FunctionComponent, useEffect} from 'react';
import {localStorageProjectViewed, localStorageViewed} from '../../constants';
import Validator from '../../modules/validator';
import {apolloClient} from '../../utils';
import {
  GET_AD_SELL_LEASE_WISH_LIST,
  HOME_GET_AD_SELL_LEASES,
} from '../../graphql/ad_sell_leases/queries';
import {HOME_GET_PROJECT_LIST} from '../../graphql/project/queries';
import fetch from 'isomorphic-unfetch';
import {AdSellLeasesListProps} from '../../interfaces/interface';
import TitleBlock from './TitleBlock';
import LoadingPage from '../Display/LoadingPage';
import GridAdSellLeases from '../GridList/GridAdSellLeases';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

interface AdSellLeaseIndexProps {
  title: string,
  path: string,
  href: string,
  type: "h1"|"h2"|"h3",
  description?: string,
  filter: string
}

const AdSellLeaseIndex: FunctionComponent<AdSellLeaseIndexProps> = (props: AdSellLeaseIndexProps) =>
{
  const [dataAdSellLeases, setDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = React.useState<boolean>(true);
  useEffect(() => {
    apolloClient.query({
      query: HOME_GET_AD_SELL_LEASES, variables: {
        "page": 1,
        "limit": 12,
        "filter": props.filter
      }
    }).then(response => {
      setStatusLoadingAdSellLease(false);
      if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.edges)) {
        setDataAdSellLease(response.data.adSellLeases.edges);
      }
    });
  }, []);
  return (
      <>
        {
          (statusLoadingAdSellLease || (dataAdSellLeases && dataAdSellLeases.length > 0)) &&
          <div className={"banner_block"}>
            <TitleBlock title={props.title} description={props.description?props.description:''} path={props.path} href={props.href} type={props.type}/>
            {
              statusLoadingAdSellLease &&
              <LoadingPage className="loading_page" grid={{xl: 3, lg: 3, md: 4, sm: 6, xs:12}} numberLimit={12}/>
            }
            {
              !statusLoadingAdSellLease &&
              <>
                <GridAdSellLeases grid={{xl: 3, lg: 3, md: 4, sm: 6, xs:12}} gridData={dataAdSellLeases} className="grid__list"/>
                <div className="content_index_button">
                  <Link href={props.href} as={props.path}><Button>Xem thêm</Button></Link></div>
              </>
            }
          </div>
        }
      </>
  );
};

export default AdSellLeaseIndex;
