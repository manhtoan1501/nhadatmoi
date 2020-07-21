import React, {FunctionComponent, useEffect} from 'react';
// Material- UI
import Grid from "@material-ui/core/Grid";
// Icon
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarToday from "@material-ui/icons/CalendarToday";
import StringProcess from "../../modules/stringProcess";
import Moment from 'react-moment';
import Link from "next/link";
import {localStorageCompareKey} from "../../constants";
import Validator from "../../modules/validator";
import Router from "next/router";
import Tracking from "../../modules/AdSellLease/Tracking";
import validator from "../../modules/validator";
import Button from '@material-ui/core/Button';
import {apolloClient} from '../../utils';
import {ADD_PROJECT_WISH_LIST} from '../../graphql/project/mutation';
import {ADD_AD_SELL_LEASE_WISH_LIST} from '../../graphql/ad_sell_leases/mutation';

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
  view_count: number,
  like_status: boolean,
  id: string
}

interface CompareDataProps {
  avatar: string,
  title: string,
  id: string,
  type: string
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

const GridItemASL: FunctionComponent<GridItemProps> = (props: GridItemProps) =>
{
  const [dataCompareLocal, setDataCompareLocal] = React.useState(null);
  const [likeStatus, setLikeStatus] = React.useState(props.dataGird.like_status);
  const [statusCompare, setStatusCompare] = React.useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem(localStorageCompareKey) && !Validator.isBlank(localStorage.getItem(localStorageCompareKey))) {
      try {
        let dataStatusCompare = JSON.parse(localStorage.getItem(localStorageCompareKey) as string);
        setDataCompareLocal(dataStatusCompare);
        for (let index in dataStatusCompare) {
          let entityId = dataStatusCompare[index].id;
          if (entityId === props.dataGird.id) {
            setStatusCompare(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  let typeGrid = 'ad_sell_lease';
  if (props.dataGird.path === '/du-an/') {
    typeGrid = 'project';
  }
  const dataPrepare = {
    avatar: props.dataGird.image,
    title: props.dataGird.title,
    id: props.dataGird.id,
    type: typeGrid
  };

  const handleTracking = (type: string) => {
    let addSellLeaseId = props.dataGird.id;
    if (addSellLeaseId && !validator.isBlank(addSellLeaseId) && typeGrid === 'ad_sell_lease') {
      Tracking.addTracking(String(addSellLeaseId), type);
    }
  };

  let clickAddToCompare = () => {
    handleTracking('compare_click');
    let statusUpdate = updateCompareData(dataPrepare);
    if (!statusUpdate) return statusUpdate;
    location.reload();
    return true;
  };

  const handleClickRemoveCompare = (dataCompare: CompareDataProps) => {
    if (localStorage.getItem(localStorageCompareKey) && !Validator.isBlank(localStorage.getItem(localStorageCompareKey))) {
      let dataToCompare = JSON.parse(localStorage.getItem(localStorageCompareKey) as string);
      let dataNewCompare = [];
      for (let index in dataToCompare) {
        if (dataToCompare[index].id !== dataCompare.id) {
          dataNewCompare.push(dataToCompare[index])
        }
      }
      localStorage.setItem(localStorageCompareKey, JSON.stringify(dataNewCompare));
      location.reload();
    }
  };

  let updateCompareData = (data: CompareDataProps) => {
    let dataToCompare = [];
    let isAddToLocal = true;
    if (localStorage.getItem(localStorageCompareKey) && !Validator.isBlank(localStorage.getItem(localStorageCompareKey))) {
      dataToCompare = JSON.parse(localStorage.getItem(localStorageCompareKey) as string);
      for (let index in dataToCompare) {
        if (dataToCompare[index].id === data.id) {
          isAddToLocal = false;
        }
        if (dataToCompare[index].type !== data.type) {
          localStorage.removeItem(localStorageCompareKey);
          dataToCompare = [];
          break;
        }
      }
    }
    let screenWidth = screen.width;
    if (dataToCompare && dataToCompare.length && dataToCompare.length >= 4 && screenWidth > 599) {
      alert("Không thể so sánh quá 4 sản phẩm!");
      return false;
    }
    if (dataToCompare && dataToCompare.length && dataToCompare.length >= 2 && screenWidth <= 599) {
      alert("Không thể so sánh quá 2 sản phẩm!");
      return false;
    }
    if (isAddToLocal) {
      dataToCompare.push(data);
      localStorage.setItem(localStorageCompareKey, JSON.stringify(dataToCompare));
    }
    return true;
  };

  let linkHref = '';
  let linkAs = '';
  if (props.dataGird.path === '/du-an/') {
    linkHref = '/du-an/[slug]';
    linkAs = '/du-an/' + props.dataGird.slug;
  } else {
    linkHref = '/tin-rao/[slug]';
    linkAs = '/tin-rao/' + props.dataGird.slug;
  }

  const handleClickLike = () => {
    if (likeStatus) {
      return false;
    } else {
      setLikeStatus(true);
    }
    if (props.dataGird.path !== '/du-an/') {
      handleTracking('like');
      apolloClient.mutate({mutation: ADD_AD_SELL_LEASE_WISH_LIST, variables: {
          "input" : {
            "ad_sell_lease_id": props.dataGird.id,
            "status": "like"
          }
        }}).then((response: any) => {
      });
    } else {
      apolloClient.mutate({mutation: ADD_PROJECT_WISH_LIST, variables: {
          "input": {
            "project_id": props.dataGird.id,
            "status": "like"
          }
        }}).then((response: any) => {
      });
    }
  };

  let componentsItem = (
    <Grid container direction={props.grid ? "column" : "row"} spacing={0}
          className="grid__list__item u-margin-bottom-small">
      <Grid item xs={12}>
        <Link href={linkHref} as={linkAs}><a>
          <div className="grid__list__item__img background block_float">
            <div className={'grid__list__item__img__date'}><CalendarToday/><Moment unix format="DD/MM/YYYY">
              {Number(props.dataGird.created_at)/1000}</Moment></div>

            <div className={'grid__list__item__img__favorite'} onClick={handleClickLike}>
              {
                likeStatus &&
                <FavoriteIcon/>
              }
              {
                !likeStatus &&
                <FavoriteBorderIcon/>
              }
            </div>
            {
              props.dataGird.image && props.dataGird.image !== 'null' && props.dataGird.image !== '' &&
              <img src={props.dataGird.image} alt={props.dataGird.title}/>
            }
            {
              (!props.dataGird.image || props.dataGird.image === 'null' || props.dataGird.image === '') &&
              <img src="https://static.nhadatmoi.net/default/home_default.jpg" alt={props.dataGird.title}/>
            }
          </div>
        </a></Link>
      </Grid>
      <Grid item xs={12}>
        <Grid className="grid__list__item__content">
          <div className="grid__list__item__content__title u-flexSpaceBetween">
            <Link href={linkHref} as={linkAs}><a>
              <div className="grid__list__item__content__title__text">
                <p>{props.dataGird.title}</p>
              </div>
            </a></Link>
          </div>
          <div className="grid__list__item__content__description">
            {props.dataGird.address}
          </div>
          {
            props.dataGird.area && props.dataGird.area != "0" &&
            <div className="grid__list__item__content__description">
              Diện tích: {props.dataGird.area} m<sup>2</sup> -  Lượt xem: {props.dataGird.view_count}
            </div>
          }
          {
            (!props.dataGird.area || props.dataGird.area == "0") &&
            <div className="grid__list__item__content__description">
              Diện tích: Đang cập nhật -  Lượt xem: {props.dataGird.view_count}
            </div>
          }
          <div className="grid__list__item__content__price">{(props.dataGird.price && props.dataGird.price !== '0' && props.dataGird.price !== '0 ' && props.dataGird.price !== '0 đồng')?props.dataGird.price:'Giá: Liên hệ'}</div>
          {
            !statusCompare &&
            <div className="grid__list__item__content__compare" onClick={() => clickAddToCompare()}>
              SO SÁNH
            </div>
          }
          {
            statusCompare &&
            <div className="grid__list__item__content__compare" onClick={() => handleClickRemoveCompare(dataPrepare)}>
              HUỶ
            </div>
          }
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
      {componentsItem}
    </Grid>
  );
};

export default GridItemASL;
