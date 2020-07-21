import React, {FunctionComponent} from 'react';
// Material- UI
import Grid from "@material-ui/core/Grid";
// Icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CalendarToday from "@material-ui/icons/CalendarToday";
import StringProcess from "../../modules/stringProcess";
import Moment from 'react-moment';
import Link from "next/link";

interface dataGridProps {
  image: any,
  title: string,
  area: string,
  address: string,
  price: string,
  slug: string,
  created_at: string,
  updated_at: string,
  path: string
}

interface GridItemProps {
  grid: {
    lg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    sm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
  dataGird: dataGridProps;
}

const GridItemProject: FunctionComponent<GridItemProps> = (props: GridItemProps) =>
{
  let componentsItem = (
    <Grid container direction={props.grid ? "column" : "row"} spacing={0}
          className="grid__list__item u-margin-bottom-small">
      <Grid item xs={12}>
        <div className="grid__list__item__img background block_float">
          {
            props.dataGird.image && props.dataGird.image !== 'null' && props.dataGird.image !== '' &&
            <img src={props.dataGird.image} alt={props.dataGird.title}/>
          }
          {
            (!props.dataGird.image || props.dataGird.image === 'null' || props.dataGird.image === '') &&
            <img src="https://static.nhadatmoi.net/default/home_default.jpg" alt={props.dataGird.title}/>
          }
        </div>
      </Grid>
      <Grid item xs={12}>
        <Grid className="grid__list__item__content">
          <div className="grid__list__item__content__title u-flexSpaceBetween">
            <div className="grid__list__item__content__title__text">
              <p>{StringProcess.truncateString(props.dataGird.title, 70, '...')}</p>
            </div>
            <div className="grid__list__item__content__title__icon">
              <FavoriteBorderIcon/>
            </div>
          </div>
          <div className="grid__list__item__content__description">
            {props.dataGird.address}
          </div>
          {
            props.dataGird.area && props.dataGird.area != "0" &&
            <div className="grid__list__item__content__description">
              Diện tích: {props.dataGird.area} m<sup>2</sup>
            </div>
          }
          {
            (!props.dataGird.area || props.dataGird.area == "0") &&
            <div className="grid__list__item__content__description">
              Diện tích: Đang cập nhật
            </div>
          }
          <div className="grid__list__item__content__price">{(props.dataGird.price && props.dataGird.price !== '0' && props.dataGird.price !== '0 ' && props.dataGird.price !== '0 đồng')?props.dataGird.price:'Giá: Liên hệ'}</div>
          <div className="grid__list__item__content__date">
            <CalendarToday/><Moment unix format="DD/MM/YYYY">
            {Number(props.dataGird.created_at)/1000}</Moment>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
  return (
    <Grid
      item
      xl={props.grid.xl}
      lg={props.grid.lg}
      md={props.grid.md}
      sm={props.grid.sm}
      xs={props.grid.xs}
    >
      {
        props.dataGird.path === '/du-an/' &&
        <Link href='/du-an/[slug]' as={'/du-an/' + props.dataGird.slug}><a>
          {componentsItem}
        </a></Link>
      }
      {
        props.dataGird.path === '/tin-rao/' &&
        <Link href='/tin-rao/[slug]' as={'/tin-rao/' + props.dataGird.slug}><a>
          {componentsItem}
        </a></Link>
      }
    </Grid>
  );
};

export default GridItemProject;
