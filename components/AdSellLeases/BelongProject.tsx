// import React, {FunctionComponent, useEffect} from "react";
// import {apolloClient} from "../../utils";
// import {GET_PROJECT_BY_ID} from "../../graphql/project/queries";
// import Validator from "../../modules/validator";
// import StringProcess from "../../modules/stringProcess";
// import Button from '@material-ui/core/Button';
// import MapIcon from "@material-ui/icons/PinDrop";
// import FullScreenIcon from "@material-ui/icons/Fullscreen";
// import Link from "next/link";

// interface BelongProjectProps {
//   project: string
// }

// const BelongProject: FunctionComponent<BelongProjectProps> = (props: BelongProjectProps) => {
//   let projectId = props.project;
//   let projectDefault = {
//     id: '',
//     name: '',
//     scale: '',
//     investor: '',
//     slug: '',
//     address: {
//       text: '',
//       ward: '',
//       district: '',
//       city: '',
//     },
//     intro_content: '',
//     cover_image: '',
//     seo_description: '',
//     created_at: '',
//     updated_at: ''
//   };
//   const [projectData, setProject] = React.useState(projectDefault);
//   useEffect(() => {
//     apolloClient.query({
//       query: GET_PROJECT_BY_ID, variables: {
//         "id": projectId
//       }
//     }).then(response => {
//       if (typeof response.data.project !== "undefined") {
//         setProject(response.data.project);
//       }
//     });
//   });

//   if (projectData && !Validator.isBlank(projectData.id)) {
//     const freshText = (input: string) => {
//       input = StringProcess.stripProperties(input, []);
//       input = StringProcess.stripTags(input, '');
//       input = input.replace(/&nbsp;/g, ' ');
//       return input;
//     };
//     const convertDescription = (input: string) => {
//       return input.replace(/&#(\d+);/g, function(match, dec) {
//         return String.fromCharCode(dec);
//       });
//     };

//     let projectDescription = projectData.seo_description;

//     if (projectDescription === '' || !projectDescription) {
//       projectDescription = freshText(projectData.intro_content);
//       projectDescription = convertDescription(projectDescription);
//       projectDescription = StringProcess.truncateString(projectDescription, 255, '...');
//     }
//     return (
//       <div className="project-info">
//         <h2 className="project-info-title text-active u-margin-bottom-small">Thông tin dự án</h2>
//         <Link href='/du-an/[slug]' as={'/du-an/' + projectData.slug}><a>
//           <div className={'project-info__belong_project'}>
//             <div className={'project-info__belong_project__avatar'}>
//               <img src={projectData.cover_image} alt={projectData.name}/>
//             </div>
//             <div className={'project-info__belong_project__title'}>
//               <div className={'project-info__belong_project__title__name'}>
//                 {projectData.name}
//               </div>
//               <div className={'project-info__belong_project__title__description'} dangerouslySetInnerHTML={{__html: projectDescription}}>
//               </div>
//               <div className={'project-info__belong_project__title__description'}>
//                 <p className={'project-info__belong_project__title__description__detail'}>
//                   <b><MapIcon/> Địa chỉ: {projectData.address.text}</b>
//                 </p>
//                 <p className={'project-info__belong_project__title__description__detail'}>
//                   <b><FullScreenIcon/> Quy mô: {projectData.scale}</b>
//                 </p>
//               </div>
//               <div className={'project-info__belong_project__title__button'}>
//                 <Button>Truy cập dự án</Button>
//               </div>
//             </div>
//           </div>
//         </a>
//         </Link>

//       </div>
//     );
//   } else {
//     return (<></>);
//   }
// };

// export default BelongProject;
