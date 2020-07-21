import React, {FunctionComponent} from 'react';
import GridItem from "./GridItemNews";
import Grid from "@material-ui/core/Grid";

interface GridProps {
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

interface GridListProps {
  gridData: GridProps[];
  grid: {
    lg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  className: string;
}

const GridNews: FunctionComponent<GridListProps> = (props: GridListProps) => {
  return (
    <Grid container spacing={0} item xs={12} direction="row"
          alignItems="baseline" className={props.className}>
      {props.gridData.map((dataItem, index:number) => {
        if (index <= 5) {
          return (
            <GridItem grid={props.grid} dataGird={dataItem} key={"girds_news" + index} className={"grid_show"}/>
          )
        } else {
          return (
            <GridItem grid={props.grid} dataGird={dataItem} key={"girds_news" + index} className={"grid_hidden"}/>
          )
        }
      })}
    </Grid>
  );
};
export default GridNews;
