// import React, {FunctionComponent, useEffect} from "react";
// import Moment from 'react-moment';

// interface CommentDataProps {
//   node: {
//     id: string
//     content: string
//     media: string
//     created_at: string
//     user: {
//       first_name: string
//       last_name: string
//       avatar: string
//     }
//   }
// }
// interface DataCommentProps {
//   dataComment: CommentDataProps[]
// }
// const CommentItem: FunctionComponent<DataCommentProps> = (props: DataCommentProps) => {
//   return (
//     <>
//       {
//         props.dataComment.map((itemComment: CommentDataProps, index: number) => {
//           return (
//             <div className={'comment'} key={'comment_parent_' + index}>
//               <div className={'comment__avatar'}>
//                 <img src={itemComment.node.user.avatar}/>
//               </div>
//               <div className={'comment__content'}>
//                 <div className={'comment__content__title'}>
//                   <div className={'comment__content__title__name'}>{(itemComment.node.user.first_name + ' ' + itemComment.node.user.last_name).trim()}</div>
//                   <div className={'comment__content__title__date'}> {" - "}
//                     <Moment unix format="h:m DD/MM/YYYY">
//                       {Number(itemComment.node.created_at)/1000}
//                     </Moment>
//                   </div>
//                 </div>
//                 <div className={'comment__content__value'}>
//                   {itemComment.node.content}
//                 </div>
//                 <div className={'comment__content__footer'}>
//                   <svg viewBox="0 0 510 510" className="active"><path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
//                   </svg>
//                   <p className="comment__content__footer__detail">Thích {"0"}</p>
//                   <svg viewBox="0 0 512.001 512.001"><path d="M324.104,156.152H76.526l91.949-91.949l-28.268-28.268L0,176.141l140.206,140.206l28.268-28.268L76.526,196.13h247.579c81.562,0,147.918,66.356,147.918,147.918c0,38.36-19.398,70.958-35.671,91.548l-12.393,15.682l31.366,24.788l12.393-15.682c20.202-25.563,44.284-66.497,44.284-116.336C512,240.441,427.71,156.152,324.104,156.152z"/>
//                   </svg>
//                   <p className="comment__content__footer__detail">Trả lời</p>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//       }
//     </>
//   );
// };

// export default CommentItem;
