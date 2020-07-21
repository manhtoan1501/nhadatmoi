import React, {FunctionComponent} from 'react';
import GridItemASL from "./GridItemASL";
import Grid from "@material-ui/core/Grid";
import StringProcess from "./../../modules/stringProcess";
import urlProcess from "../../modules/urlProcess";
import PriceProcess from "../../modules/priceProcess";


interface GridProps {
  node: {
    id: string
    title: string,
    slug: string,
    created_at: string,
    updated_at: string,
    view_count: number,
    like_status: boolean,
    price: {
      unit: string
      value: string
    },
    avatar: {
      alt_text: string
      src: string
      description: string
    },
    address: {
      text: string,
      ward: string,
      district: string,
      city: string
    },
    area: {
      unit: string
      value: string
    }
  }
}

interface GridListProps {
  gridData: GridProps[];
  className: string;
  maxLength?: number;
  grid: {
    lg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
}

const GridList: FunctionComponent<GridListProps> = (props: GridListProps) => {
  return (
    <Grid container spacing={0} item xs={12} direction="row"
      alignItems="baseline" className={props.className}>
      {props.gridData.map((dataItem, index: number) => {
        let priceValue = PriceProcess.priceProcess(dataItem.node.price.value, dataItem.node.price.unit);
        let dataGrid = {
          image: urlProcess.processImageUrl(dataItem.node.avatar.src, 'ad_sell_lease'),
          title: dataItem.node.title,
          address: dataItem.node.address.text,
          area: StringProcess.addCommas(dataItem.node.area.value),
          price: priceValue,
          slug: dataItem.node.slug,
          updated_at: dataItem.node.updated_at,
          created_at: dataItem.node.created_at,
          view_count: dataItem.node.view_count,
          id: dataItem.node.id,
          like_status: dataItem.node.like_status,
          path: '/tin-rao/'
        };
        if (props.maxLength && index >= props.maxLength) {
          return (<></>);
        } else {
          return (
            <GridItemASL grid={props.grid} dataGird={dataGrid} key={"grid_item_ad_sell_" + index}/>
          )
        }

      })}
    </Grid>
  );
};
export default GridList;
