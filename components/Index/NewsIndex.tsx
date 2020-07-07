import React, {FunctionComponent} from 'react';
import GridNews from "../GridList/GridNews";

interface NewsIndexProps {
  newsData: NewsItem[]
}
interface NewsItem {
  slug: string,
  link: string,
  title: {
    rendered: string
  },
  excerpt: {
    rendered: string
  },
  featured_image_url: string,
  date: string
}
const NewsIndex: FunctionComponent<NewsIndexProps> = (props: NewsIndexProps) => {
  return (
    <>
      <GridNews grid={{xl: 3, lg: 3, md: 4, sm: 6, xs:12}} gridData={props.newsData} className={"grid__list"}/>
    </>
  );
};

export default NewsIndex;
