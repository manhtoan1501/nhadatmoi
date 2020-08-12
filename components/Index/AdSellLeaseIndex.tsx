import React, { FunctionComponent, useEffect } from 'react';
import { localStorageProjectViewed, localStorageViewed } from '../../constants';
import Validator from '../../modules/validator';
import { apolloClient } from '../../utils';
import {
  GET_AD_SELL_LEASE_WISH_LIST,
  HOME_GET_AD_SELL_LEASES,
} from '../../graphql/ad_sell_leases/queries';
import { HOME_GET_PROJECT_LIST } from '../../graphql/project/queries';
import fetch from 'isomorphic-unfetch';
import { AdSellLeasesListProps } from '../../interfaces/interface';
import TitleBlock from './TitleBlock';
import Link from 'next/link';
import Button from '@material-ui/core/Button';

interface AdSellLeaseIndexProps {
  title: string,
  path: string,
  href: string,
  type: "h1" | "h2" | "h3",
  description?: string,
  filter: string
}

const AdSellLeaseIndex: FunctionComponent<AdSellLeaseIndexProps> = (props: AdSellLeaseIndexProps) => {
  const [dataAdSellLeases, setDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
  const [statusLoadingAdSellLease, setStatusLoadingAdSellLease] = React.useState<boolean>(true);
  return (
    <>
      {
        (statusLoadingAdSellLease || (dataAdSellLeases && dataAdSellLeases.length > 0)) &&
        <div className={"banner_block"}>
          <TitleBlock title={props.title} description={props.description ? props.description : ''} path={props.path} href={props.href} type={props.type} />
        </div>
      }
    </>
  );
};

export default AdSellLeaseIndex;
