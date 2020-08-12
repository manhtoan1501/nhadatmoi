// import React, { FunctionComponent, useEffect } from "react";
// import PageDetailInfo from "../PageDetail/PageDetailInfo";
// import TitleBlock from "../PageDetail/TitleBlock";
// import ContactBlock from "../PageDetail/ContactBlock";
// import AlbumImageBlock from "../PageDetail/AlbumImageBlock";
// import BelongProject from "./BelongProject";
// import Validator from "../../modules/validator";
// import ProjectPrice from "./ProjectPrice";
// import RelatedAdSellLeases from './RelatedAdSellLeases';
// import SameTypeASL from "./SameTypeASL";
// import SameUserASL from './SameUserASL';
// import { AdSellLeaseItem } from '../../interfaces/adSellLeaseItem';
// import { adSellLeaseType, localStorageViewed } from '../../constants';
// // import ViewedASLList from "../../components/AdSellLeases/ViewedASLList";
// // import SuggestASL from '../../components/AdSellLeases/SuggestASL';
// import YoutubeBlock from '../PageDetail/YoutubeBlock';

// // Material - UI
// import Grid from "@material-ui/core/Grid";

// //Add Comment
// import CommentArea from "../Comment/Comment";
// import PriceProcess from "../../modules/priceProcess";
// interface ProjectMainProps {
//   dataObject: AdSellLeaseItem,
//   objectUrl: string,
//   imageType: string,
//   image: string
// }

// const AdSellLeasesMain: FunctionComponent<ProjectMainProps> = (props: ProjectMainProps) => {
//   useEffect(() => {
//     let viewedItem = localStorage.getItem(localStorageViewed);
//     let dataToPush = {
//       node: props.dataObject
//     };
//     if (viewedItem && !Validator.isBlank(viewedItem)) {
//       try {
//         let viewedItemObject = JSON.parse(viewedItem);
//         let currentId = props.dataObject.id;
//         let countToAdd = 1;
//         let newDataToAdd = [];
//         for (let indexItem in viewedItemObject) {
//           let itemId = viewedItemObject[indexItem].node.id;

//           if (itemId !== currentId && countToAdd < 8) {
//             newDataToAdd.unshift(viewedItemObject[indexItem]);
//           }
//           countToAdd++;
//         }
//         newDataToAdd.unshift(dataToPush);
//         let dataToUpdate = JSON.stringify(newDataToAdd);
//         localStorage.setItem(localStorageViewed, dataToUpdate);
//       } catch (e) {
//         console.log(e);
//       }
//     } else {
//       let newViewedItemObject = [];
//       newViewedItemObject.push(dataToPush);
//       let dataToUpdate = JSON.stringify(newViewedItemObject);
//       localStorage.setItem(localStorageViewed, dataToUpdate);
//     }
//   }, []);
//   let priceValue = '';
//   if (props.dataObject.price && typeof props.dataObject.price !== 'string') {
//     priceValue = PriceProcess.priceProcess(String(props.dataObject.price.value), String(props.dataObject.price.unit));
//   }

//   if (props.dataObject.price && typeof props.dataObject.price === 'string') {
//     priceValue = props.dataObject.price;
//   }

//   let type2Name = '';

//   for (let index in adSellLeaseType) {
//     if (props.dataObject.type && ((adSellLeaseType[index].id).indexOf(props.dataObject.type.type2) !== -1)) {
//       type2Name = adSellLeaseType[index].name;
//     }
//   }
//   return (
//     <div className="container-big">
//       <Grid container spacing={3}>
//         <Grid item className="project-detail__left">
//           <TitleBlock
//             dataObject={props.dataObject}
//             objectUrl={props.objectUrl}
//             image={props.image}
//             type={'ad_sell_lease'}
//           />
//           <ProjectPrice price={priceValue} />
//           <PageDetailInfo dataObject={props.dataObject} type={'ad_sell_lease'} />
//           {
//             props.dataObject && props.dataObject.video &&
//             <YoutubeBlock videoLink={props.dataObject.video} />
//           }

//           <AlbumImageBlock images={props.dataObject.image} imageType={props.imageType} />
//           {
//             props.dataObject.project && !Validator.isBlank(props.dataObject.project) &&
//             <BelongProject project={props.dataObject.project} />
//           }
//           <CommentArea dataObject={props.dataObject} type={'ad_sell_lease'} />
//           {/* <ViewedASLList dataObject={props.dataObject} /> */}
//           <RelatedAdSellLeases dataObject={props.dataObject} address={props.dataObject.address} type2Name={type2Name} />
//           <SameUserASL dataObject={props.dataObject} type2Name={type2Name} />
//           {/* <SuggestASL dataObject={props.dataObject} /> */}
//           {
//             props.dataObject && props.dataObject.type && props.dataObject.type.type2 &&
//             <SameTypeASL dataObject={props.dataObject} type2Name={type2Name} />
//           }

//         </Grid>
//         <Grid item className="project-detail__right">
//           <div className="contact-area">
//             <ContactBlock dataObject={props.dataObject} type={'ad_sell_lease'} />
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default AdSellLeasesMain;
