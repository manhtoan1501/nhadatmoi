import React, {FunctionComponent} from 'react';
import GridItemASL from "./GridItemASL";
import Grid from "@material-ui/core/Grid";
import StringProcess from "./../../modules/stringProcess";
import urlProcess from "../../modules/urlProcess";

interface GridProps {
  node: {
    id: string
    price: string,
    name: string,
    land_area: string,
    created_at: string,
    updated_at: string,
    slug: string,
    view_count: number,
    address: {
      text: string,
      ward: string,
      district: string,
      city: string
    },
    cover_image: string,
    intro_content: string
  }
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

const GridList: FunctionComponent<GridListProps> = (props: GridListProps) => {
  return (
    <Grid container spacing={0} item xs={12} direction="row"
          alignItems="baseline" className={props.className}>
      {props.gridData.map((dataItem, index:number) => {
        let dataGrid = {
          image: urlProcess.processImageUrl(dataItem.node.cover_image, 'project'),
          title: dataItem.node.name,
          address: dataItem.node.address.text,
          area: StringProcess.addCommas(dataItem.node.land_area),
          price: StringProcess.addCommas(dataItem.node.price) + ' triệu/m2',
          slug: dataItem.node.slug,
          path: '/du-an/',
          updated_at: dataItem.node.updated_at,
          created_at: dataItem.node.created_at,
          like_status: false,
          id: dataItem.node.id,
          view_count: dataItem.node.view_count
        };
        return (
          <GridItemASL grid={props.grid} dataGird={dataGrid} key={"gird_project_" + index}/>
        )
      })}
    </Grid>
  );
};
export default GridList;
