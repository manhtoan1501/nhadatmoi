import React, {FunctionComponent, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

interface BannerEcommerceProps {
  user?: {
    email: string,
    _id: string,
    first_name: string,
    last_name: string,
    id: string,
    avatar: string
  },
  updateModal: (data: boolean) => void;
}

const defaultUser = {
  _id: "",
  email: "",
  avatar: "",
  first_name: "",
  last_name: ""
};

const BannerEcommerce: FunctionComponent<BannerEcommerceProps> = (props: BannerEcommerceProps) => {
  const [userInfo, setUserInfo] = React.useState(defaultUser);
  useEffect(() => {
    if (props.user) {
      setUserInfo(props.user);
    }
  }, []);

  const handleClickOpen = () => {
    props.updateModal(true);
  };
  return (
    <div className={"banner_block"}>
      <Grid container spacing={0} item xs={12} direction="row"
            justify="center"
            alignItems="center" className="banner_ecommerce">
        <div className="banner_ecommerce__body">
          <div className="banner_ecommerce__body__left">
            <div className="banner_ecommerce__body__left__title">
              Sàn Thương Mại Điện Tử Bất Động Sản đầu tiên tại Việt Nam
            </div>
            <div className="banner_ecommerce__body__left__description">
              Công nghệ dẫn đầu - Bắc cầu mua bán
            </div>
            <div className="banner_ecommerce__body__left__button">
              {
                !userInfo._id &&
                <Button onClick={handleClickOpen}>ĐĂNG TIN NGAY</Button>
              }
              {
                userInfo._id &&
                <a href={"https://moigioi.nhadatmoi.net/asl/create"}><Button>ĐĂNG TIN NGAY</Button></a>
              }
            </div>
          </div>
          <div className="banner_ecommerce__body__right">
            <img src="https://upload.exam24h.com/Lb029bpXb28W9kM/ecommerce.svg"/>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default BannerEcommerce;
