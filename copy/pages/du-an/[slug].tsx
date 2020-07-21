// import React, {useEffect} from 'react';
// import {NextPage} from "next";

// //Import Components
// import Layout from '../../components/Layout/Layout';
// import BannerSliderBlock from "../../components/PageDetail/BannerSliderBlock";
// import Main from "../../components/Project/ProjectMain";

// //Import Const
// import {apolloClient} from "../../utils";
// import {GET_PROJECT_BY_SLUG} from "../../graphql/project/queries";

// //Import Module
// import StringProcess from "../../modules/stringProcess";

// //Import SCSS
// import "../../assets/scss/style.scss";
// import {mainURL} from "../../constants";
// import urlProcess from "../../modules/urlProcess";
// import {COUNT_VIEW_PROJECT} from "../../graphql/project/mutation";
// import {AdSellLeaseItem} from "../../interfaces/interface";

// interface ProjectDetails {
//   url: {
//     query: {
//       slug: string
//     }
//   },
//   projectDetail: {
//     data: {
//       project: AdSellLeaseItem
//     }
//   },
//   slug: string
// }

// interface QueryProp {
//   query: {
//     slug: string
//   }
// }

// // @ts-ignore
// const ProjectDetailPage: NextPage<ProjectDetails> = (props: ProjectDetails) => {
//   let title = (props.projectDetail.data.project.name)?props.projectDetail.data.project.name:'Xem chi tiết dự án';
//   let albumImage = props.projectDetail.data.project.image;

//   let imageAvatar = 'https://static.nhadatmoi.net/default/home_default.jpg';
//   if (props.projectDetail.data.project && props.projectDetail.data.project.cover_image) {
//     imageAvatar = urlProcess.processImageUrl(props.projectDetail.data.project.cover_image, 'project');
//   }
//   const freshText = (input: string) => {
//     input = StringProcess.stripProperties(input, []);
//     input = StringProcess.stripTags(input, '');
//     input = input.replace(/&nbsp;/g, ' ');
//     return input;
//   };
//   const convertDescription = (input: string) => {
//     return input.replace(/&#(\d+);/g, function(match, dec) {
//       return String.fromCharCode(dec);
//     });
//   };

//   let metaTitle = '';
//   let metaDescription = '';
//   if (props.projectDetail.data.project.seo_title) {
//     metaTitle = props.projectDetail.data.project.seo_title;
//   }
//   if (props.projectDetail.data.project.seo_description) {
//     metaDescription = props.projectDetail.data.project.seo_description;
//   }
//   if (metaTitle === '' || !metaTitle) {
//     metaTitle = title;
//   }

//   if (metaDescription === '' || !metaDescription && props.projectDetail && props.projectDetail.data && props.projectDetail.data.project.intro_content) {
//     metaDescription = freshText(String(props.projectDetail.data.project.intro_content));
//     metaDescription = convertDescription(metaDescription);
//     metaDescription = StringProcess.truncateString(metaDescription, 255, '');
//   }

//   //Count Ad Sell Lease
//   useEffect(() => {
//     let projectId = props.projectDetail.data.project.id;
//     apolloClient.mutate({mutation: COUNT_VIEW_PROJECT, variables: {
//         "input": {
//           "id": projectId
//         }
//       }}).then((response: any) => {
//     });
//   }, []);

//   return (
//     <Layout
//       title={metaTitle}
//       description={metaDescription}
//       {...props}
//       image={imageAvatar}
//       canonical={ mainURL + '/du-an/' + props.slug}
//       path={'du-an'}
//     >
//       <BannerSliderBlock images={albumImage} imageType='project'/>
//       <Main
//         dataObject={props.projectDetail.data.project}
//         imageType='project'
//         image={imageAvatar}
//         objectUrl={ mainURL + '/du-an/' + props.slug}
//       />
//     </Layout>
//   );
// };

// // @ts-ignore
// ProjectDetailPage.getInitialProps = async function(props: QueryProp) {
//   let projectSlug = props.query.slug;
//   let projectDetail = await apolloClient.query({query: GET_PROJECT_BY_SLUG, variables: {
//       "slug": projectSlug
//     }}).then(response => {
//     return response;
//   });
//   return {
//     projectDetail: projectDetail,
//     slug: projectSlug
//   };
// };

// export default ProjectDetailPage;
