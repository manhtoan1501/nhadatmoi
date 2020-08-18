import React, { useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Icon,
  IconButton,
  TextField,
} from "@material-ui/core";

import "../../../assets/scss/style.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BannerSliderBlock from "../../../components/PageDetail/BannerSliderBlock";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/core/styles";
import StringProcess from "./../../../modules/stringProcess";
import { mainURL } from "../../../constants";
import CreateProductions from '../../../components/Productions/CreateProductions';

const useStyles = makeStyles((theme) => ({
  product: {
    display: "inline",
    borderRadius: 2,
    "&:hover": {
      boxShadow: "2px 2px 8px 2px #aaa",
    },
  },
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

const imgProduct = [
  { title: "Giường gỗ  tự nhiên", img: "https://xamdecor.com/media/images/2019/01/xambanner07.jpg" },
  { title: "Ban an hien dai", img: "https://khungtranhtreotuong.com/wp-content/uploads/ms0625.jpg" },
  {
    title: "Tu quan ao",
    img:
      "https://product.hstatic.net/1000362384/product/bo_tranh_treo_tuong_canvas_nghe_thuat_cv08_bf6696472f4a40e488c2c3a96e936729.jpg",
  },
  {
    title: "Ban phong khach hien dai",
    img: "https://khungtranhtreotuong.com/wp-content/uploads/bo-7-tranh-treo-tuong-scandinavian-MS079-3.jpg",
  },
];

const AdSellLeaseDetailPage = (props) => {
  const [index, setIndex] = React.useState(0);
  const classes = useStyles();
  return (
    <div>
      <CreateProductions />
    </div>
  );
};

export default AdSellLeaseDetailPage;
