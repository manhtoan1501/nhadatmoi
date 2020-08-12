// import React, {FunctionComponent, useEffect} from "react";
// import {apolloClient} from "../../utils";
// import {GET_AD_SELL_LEASES} from "../../graphql/ad_sell_leases/queries";
// import Validator from "../../modules/validator";
// import GridAdSellLeases from "../GridList/GridAdSellLeases";
// import {AdSellLeasesListProps} from '../../interfaces/interface';
// import {AdSellLeaseItem} from '../../interfaces/adSellLeaseItem';

// interface ProjectProps {
//   dataObject: AdSellLeaseItem
// }

// const SuggestASL: FunctionComponent<ProjectProps> = (props: ProjectProps) => {
//   let filterObject =  {
//     recommendation: true
//   };
//   let currentASLId = props.dataObject.id;
//   //Search Data AdsellLease
//   const [searchDataAdSellLease, setSearchDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
//   useEffect(() => {
//     let dataFilter = JSON.stringify(filterObject);
//     dataFilter = dataFilter.split('"').join("'");
//     apolloClient.query({query: GET_AD_SELL_LEASES, variables: {
//         "page": 1,
//         "limit": 7,
//         "filter": dataFilter
//       }}).then(response => {
//       if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.edges)) {
//         let dataASL = [];
//         let countNumber = 0;
//         for (let index in response.data.adSellLeases.edges) {
//           if (response.data.adSellLeases.edges[index].node.id !== currentASLId && countNumber < 6) {
//             dataASL.push(response.data.adSellLeases.edges[index]);
//             countNumber++;
//           }
//         }
//         setSearchDataAdSellLease(dataASL);
//       }
//     });
//   }, []);

//   if (searchDataAdSellLease && searchDataAdSellLease.length > 0) {
//     return (
//         <>
//           <div className="project-info">
//             <h2 className="project-info-title text-active u-margin-bottom-small">Những người xem tin rao này cũng đã xem</h2>
//           </div>
//           <div className={'project-body-ad-sell-lease'}>
//             <GridAdSellLeases
//                 grid={{xl: 3, lg: 4, md: 6, sm: 6, xs: 12}}
//                 gridData={searchDataAdSellLease}
//                 className="grid__list"
//             />
//           </div>
//         </>
//     );
//   } else {
//     return (<></>);
//   }

// };

// export default SuggestASL;
