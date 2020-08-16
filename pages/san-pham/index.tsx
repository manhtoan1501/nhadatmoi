import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
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
import Link from "next/link";
import "../../assets/scss/style.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BannerSliderBlock from "../../components/PageDetail/BannerSliderBlock";
import { NextPage } from "next";
import { makeStyles } from "@material-ui/core/styles";
import StringProcess from "./../../modules/stringProcess";
import { mainURL } from "../../constants";
import MaterialTable from "../../components/Table";
import TestTime from './TestTime';
import IndexProductions from '../../components/Productions';
const useStyles = makeStyles((theme) => ({
  product: {
    display: "inline",
    borderRadius: 2,
    "&:hover": {
      boxShadow: "2px 2px 8px 2px #aaa",
    },
  },
}));

const AdSellLeaseDetailPage: NextPage = (props) => {
  const [index, setIndex] = React.useState(0);
  const [position, setPosition] = React.useState(false);
  const myRef = React.useRef();
  const classes = useStyles();
  const times = [
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
    {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    }, {
      time: 'Time',
      messages: [
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
        { message: 'message' }, { message: 'message' },
      ],
    },
  ];
  const [timeState, setTimeState] = React.useState(2020);
  const onwheel = () => {
    console.log('kkkkkkkkkkkk ', myRef.current);
  }

  const onClick = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Layout
      title={"Danh sách sản phẩm"}
      description={"metaDescription"}
      {...props}
      image={"imageAvatar"}
      canonical={mainURL + "/tin-rao/" + "slung"}
      path={"tin-rao"}
    >
      <IndexProductions />
    </Layout>
  );
};

export default AdSellLeaseDetailPage;


{/* <Grid container spacing={4} style={{ padding: "40px 0" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <TestTime />
          <Typography style={{ fontSize: 25, fontWeight: 700, color: "#1976d2" }}>Danh sách sản phẩm</Typography>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField fullWidth size="small" label="Lọc theo tên" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth size="small" label="Lọc theo mã" variant="outlined" />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth size="small" label="Lọc theo giá" variant="outlined" />
            </Grid>
            <Grid item xs={3} style={{ textAlign: "right" }}>
              <Link href="/san-pham/them-san-pham" as={"/san-pham/them-san-pham"}>
                <a>
                  <Button style={{ position: 'sticky', top: 0 }} ref={myRef} variant="contained">Tạo mới</Button>
                </a>
              </Link>
            </Grid>
          </Grid>
          <div style={{ padding: "40px 0" }}>
            <MaterialTable />
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid> */}