import React, {FunctionComponent} from "react";
import ReplyIcon from '@material-ui/icons/Reply';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ReportIcon from '@material-ui/icons/Report';
import Moment from 'react-moment';
import Button from "@material-ui/core/Button";
import dynamic from "next/dynamic";
import {AdSellLeaseItem} from '../../interfaces/adSellLeaseItem';
import Validator from "../../modules/validator";
import Tracking from "../../modules/AdSellLease/Tracking";
import validator from "../../modules/validator";
import {apolloClient} from "../../utils";
import {ADD_AD_SELL_LEASE_WISH_LIST} from "../../graphql/ad_sell_leases/mutation";
import {ADD_PROJECT_WISH_LIST} from "../../graphql/project/mutation";
import Router from "next/router";
import {adSellLeaseCategory, localStorageCompareKey, adSellLeaseType} from '../../constants';
import Breadcrumbs from '../LayeredNavigation/Breadcrumbs';
const SharePopup = dynamic(() => import('../Share/Share'), {
  ssr: false
});

interface ProjectMainProps {
  dataObject: AdSellLeaseItem,
  objectUrl: string,
  type: string,
  image: string,
}

interface CompareDataProps {
  avatar: string,
  title: string,
  id: string,
  type: string
}

const TitleBlock: FunctionComponent<ProjectMainProps> = (props: ProjectMainProps) =>
{
  const [likeStatus, setLikeStatus] = React.useState(props.dataObject.like_status);

  const handleTracking = (type: string) => {
    let addSellLeaseId = props.dataObject.id;
    if (addSellLeaseId && !validator.isBlank(addSellLeaseId) && props.type === 'ad_sell_lease') {
      Tracking.addTracking(String(addSellLeaseId), type);
    }
  };

  let title = '';
  if (props.dataObject && props.dataObject.title) {
    title = props.dataObject.title;
  }
  if (props.dataObject && props.dataObject.name) {
    title = props.dataObject.name;
  }

  if (title && !Validator.isBlank(title)) {
    let titleObject = title.split(' ');
    for (let index in titleObject) {
      if (titleObject[index] && !Validator.isBlank(titleObject[index])) {
        let checkPhoneNumber = titleObject[index];
        if (isValid(checkPhoneNumber)) {
          titleObject[index] = '**********';
        }
      }
    }
    title = titleObject.join(' ');
  }

  function isValid(value: string) {
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(value);
  }

  let id = '';
  if (props.dataObject && props.dataObject.id) {
    id = props.dataObject.id;
  }
  const dataPrepare = {
    avatar: props.image,
    title: title,
    id: id,
    type: props.type
  };
  let clickAddToCompare = () => {
    handleTracking('compare_click');
    let statusUpdate = updateCompareData(dataPrepare);
    if (!statusUpdate) return statusUpdate;
    if (props.type === 'project') {
      Router.replace('/du-an-bat-dong-san', '/du-an-bat-dong-san', { shallow: true });
    } else {
      Router.replace('/[slug]', '/tim-tin-rao', { shallow: true });
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

  const [statusShare, setStatusShare] = React.useState<boolean>(false);
  const handleShare = (status: boolean) => {
    setStatusShare(status);
    handleTracking('share_click');
  };

  const handleFavorite = (status: boolean) => {
    if (likeStatus) {
      return false;
    } else {
      setLikeStatus(true);
    }
    handleTracking('like');
    alert("Đã thêm vào danh sách Yêu thích");
    if (props.type === 'project') {
      apolloClient.mutate({mutation: ADD_PROJECT_WISH_LIST, variables: {
          "input": {
            "project_id": props.dataObject.id,
            "status": "like"
          }
        }}).then((response: any) => {
      });
    } else {
      apolloClient.mutate({mutation: ADD_AD_SELL_LEASE_WISH_LIST, variables: {
          "input" : {
            "ad_sell_lease_id": props.dataObject.id,
            "status": "like"
          }
        }}).then((response: any) => {
      });
    }
  };

  const handleReport = () => {
    handleTracking('report');
    alert ("Đã báo cáo thành công!");
  };

  const dataBreadcrumbs = [];

  let dataType1Breadcrumbs = {
    href: '',
    href_as: '',
    name: ''
  };

  let dataType2Breadcrumbs = {
    href: '',
    href_as: '',
    name: ''
  };

  for (let index in adSellLeaseCategory) {
    if (props.dataObject.type && props.dataObject.type.type1 === adSellLeaseCategory[index].id) {
      dataType1Breadcrumbs = {
        href: '/slug',
        href_as: adSellLeaseCategory[index].slug,
        name: adSellLeaseCategory[index].name
      }
    }
  }

  for (let index in adSellLeaseType) {
    if (props.dataObject.type && ((adSellLeaseType[index].id).indexOf(props.dataObject.type.type2) !== -1)) {
      dataType2Breadcrumbs = {
        href: '/slug',
        href_as: adSellLeaseType[index].slug,
        name: adSellLeaseType[index].name
      }
    }
  }

  if (!Validator.isBlank(dataType1Breadcrumbs.href_as)) {
    dataBreadcrumbs.push(dataType1Breadcrumbs)
  }
  if (!Validator.isBlank(dataType2Breadcrumbs.href_as)) {
    dataBreadcrumbs.push(dataType2Breadcrumbs)
  }
  return (
    <div className="title-project">
      <Breadcrumbs dataBreadcrumbs={dataBreadcrumbs}/>
      <h1 className="title-project__title">{title}</h1>
      {
        props.dataObject &&  props.dataObject.address && props.dataObject.address.text &&
        <div className="title-project__address">
          Địa chỉ: {props.dataObject.address.text}</div>
      }
      <div className="title-project__bottom">

        <div className="title-project__bottom__share">
          <div className={(likeStatus)?"title-project__bottom__share__item active":"title-project__bottom__share__item"}>
            <Button onClick={() => handleFavorite(true)}>
              <FavoriteIcon/> Yêu thích
            </Button>
          </div>
          <div className="title-project__bottom__share__item">
            <Button onClick={() => handleShare(true)}>
              <ReplyIcon/> Chia sẻ
            </Button>
          </div>
          <div className="title-project__bottom__share__item">
            <Button onClick={() => clickAddToCompare()}>
              <PlaylistAddIcon/> So sánh
            </Button>
          </div>
          <div className="title-project__bottom__share__item">
            <Button onClick={() => handleReport()}>
              <ReportIcon/> Báo cáo
            </Button>
          </div>
        </div>

        <div className="title-project__bottom__publish">{(props.dataObject && props.dataObject.view_count)?props.dataObject.view_count + ' lượt xem - ':''}
          {
            props.dataObject &&
            <>
              Ngày đăng <Moment unix format="DD/MM/YYYY">
              {Number(props.dataObject.created_at)/1000}
            </Moment>
            </>
          }
        </div>
      <SharePopup onClose={() => setStatusShare(false)} statusModal={statusShare} objectUrl={props.objectUrl}/>
      </div>
    </div>
  );
};

export default TitleBlock;
