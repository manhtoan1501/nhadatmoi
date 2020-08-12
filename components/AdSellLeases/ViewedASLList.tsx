// import React, {FunctionComponent, useEffect} from "react";
// import Validator from "../../modules/validator";
// import GridAdSellLeases from "../GridList/GridAdSellLeases";
// import {localStorageViewed} from "../../constants";
// import {AdSellLeaseItem} from '../../interfaces/adSellLeaseItem';
// import {AdSellLeasesListProps} from '../../interfaces/interface';

// interface ViewedASLListProps {
//   dataObject: AdSellLeaseItem
// }

// const RelatedAdSellLeases: FunctionComponent<ViewedASLListProps> = (props: ViewedASLListProps) => {
//   let currentASLId = props.dataObject.id;
//   const [dataAdSellLeasesViewed, setDataAdSellLeaseViewed] = React.useState<AdSellLeasesListProps[]>([]);
//   useEffect(() => {
//     let viewedItem = localStorage.getItem(localStorageViewed);
//     if (viewedItem && !Validator.isBlank(setDataAdSellLeaseViewed)) {
//       try {
//         let viewedItemObject = JSON.parse(viewedItem);
//         let dataASL = [];
//         let countNumber = 0;
//         for (let index in viewedItemObject) {
//           if (viewedItemObject[index].node.id !== currentASLId && countNumber < 6) {
//             dataASL.push(viewedItemObject[index]);
//             countNumber++;
//           }
//         }
//         setDataAdSellLeaseViewed(dataASL);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }, []);

//   if (dataAdSellLeasesViewed && dataAdSellLeasesViewed.length > 0) {
//     return (
//       <>
//         <div className="project-info">
//           <h2 className="project-info-title text-active u-margin-bottom-small">Tin rao đã xem</h2>
//         </div>
//         <div className={'project-body-ad-sell-lease'}>
//           <GridAdSellLeases
//             grid={{xl: 3, lg: 4, md: 6, sm: 6, xs: 12}}
//             gridData={dataAdSellLeasesViewed}
//             className="grid__list"
//             maxLength={6}
//           />
//         </div>
//       </>
//     );
//   } else {
//     return (<></>);
//   }

// };

// export default RelatedAdSellLeases;
