import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import Link from "next/link";
import "../../assets/scss/style.scss";

const AdSellLeaseDetailPage = (props) => {
  return (
    <div>
      <Grid container spacing={4} style={{ padding: "40px 0" }}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
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
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default AdSellLeaseDetailPage;
