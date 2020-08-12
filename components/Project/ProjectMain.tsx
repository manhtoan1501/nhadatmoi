// import React, { FunctionComponent, useEffect } from "react";
// import PageDetailInfo from "../PageDetail/PageDetailInfo";
// //Add Page Detail
// import TitleBlock from "../PageDetail/TitleBlock";
// import ContactBlock from "../PageDetail/ContactBlock";
// import AlbumImageBlock from "../PageDetail/AlbumImageBlock";
// import TextBlock from "../PageDetail/TextBlock";
// import MapsBlock from '../PageDetail/MapsBlock';
// // import AdSellLeaseProject from "./AdSellLeaseProject";
// import { AdSellLeaseItem } from "../../interfaces/adSellLeaseItem";

// //Add Comment
// import CommentArea from "../Comment/Comment";

// // Material - UI
// import Grid from "@material-ui/core/Grid";
// import { localStorageProjectViewed } from "../../constants";
// import Validator from "../../modules/validator";
// import AslInfo from '../AdSellLeases/AslInfo';
// import YoutubeBlock from '../PageDetail/YoutubeBlock';

// interface ProjectMainProps {
//   dataObject: AdSellLeaseItem
//   imageType: string
//   objectUrl: string
//   image: string
// }

// const ProjectMain: FunctionComponent<ProjectMainProps> = (props: ProjectMainProps) => {
//   useEffect(() => {
//     let viewedItem = localStorage.getItem(localStorageProjectViewed);
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
//         localStorage.setItem(localStorageProjectViewed, dataToUpdate);
//       } catch (e) {
//         console.log(e);
//       }
//     } else {
//       let newViewedItemObject = [];
//       newViewedItemObject.push(dataToPush);
//       let dataToUpdate = JSON.stringify(newViewedItemObject);
//       localStorage.setItem(localStorageProjectViewed, dataToUpdate);
//     }
//   }, []);
//   return (
//     <div className="container-big">
//       <Grid container spacing={3}>
//         <Grid item className="project-detail__left">
//           <TitleBlock
//             dataObject={props.dataObject}
//             objectUrl={props.objectUrl}
//             image={props.image}
//             type={'project'}
//           />
//           <div>
//             <div className="project-info">
//               <h2 className="project-info-title text-active u-margin-bottom-small">Thông tin tổng quan</h2>
//               <AslInfo dataObject={props.dataObject} />
//               {
//                 props.dataObject.intro_content &&
//                 <TextBlock content={props.dataObject.intro_content} title={'Giới thiệu'} type={'h2'} />
//               }
//               {
//                 props.dataObject.position_content &&
//                 <TextBlock content={props.dataObject.position_content} title={'Vị trí'} type={'h2'} />
//               }
//               {
//                 props.dataObject.infrastructure_content &&
//                 <TextBlock content={props.dataObject.infrastructure_content} title={'Hạ tầng'} type={'h2'} />
//               }
//               {
//                 props.dataObject && props.dataObject.video &&
//                 <YoutubeBlock videoLink={props.dataObject.video} />
//               }
//               <MapsBlock dataObject={props.dataObject} type={'project'} />
//             </div>
//           </div>
//           <AlbumImageBlock images={props.dataObject.image} imageType={props.imageType} />
//           {/* <AdSellLeaseProject id={props.dataObject.id}/> */}
//           <CommentArea dataObject={props.dataObject} type={'project'} />
//         </Grid>
//         <Grid item className="project-detail__right">
//           <div className="contact-area">
//             <ContactBlock dataObject={props.dataObject} type={'project'} />
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ProjectMain;
