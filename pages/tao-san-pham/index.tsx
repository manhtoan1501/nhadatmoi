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
//Import SCSS
import "../../assets/scss/style.scss";
import Autocomplete from "@material-ui/lab/Autocomplete";
import BannerSliderBlock from "../../components/PageDetail/BannerSliderBlock";
import { NextPage } from "next";
import StringProcess from "./../../modules/stringProcess";
import { mainURL } from "../../constants";

// @ts-ignore

const currencies = [
    {
        value: "bg",
        label: "Bàn",
    },
    {
        value: "EUR",
        label: "Giường ngủ",
    },
    {
        value: "BTC",
        label: "Tủ quần áo",
    },
    {
        value: "JPY",
        label: "Bàn ăn",
    },
];

const CreateProduction: NextPage = (props) => {
    return (
        <Layout
            title={"Tạo đơn hàng"}
            description={"metaDescription"}
            {...props}
            image={"imageAvatar"}
            canonical={mainURL + "/tin-rao/" + "slung"}
            path={"tin-rao"}
        >
            <form noValidate autoComplete="off">
                <Grid container spacing={4}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Card>
                            <CardContent>
                                <Typography color="primary">Tạo sản phẩm</Typography>
                                <Grid container spacing={4}>
                                    <Grid item xs={6}>
                                        <Grid container spacing={4}>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Mã sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Tên sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Loại sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Giá sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Giá sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Giá sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField fullWidth label="Giá sản phẩm" variant="outlined" />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    select
                                                    label="Loại sản phẩm"
                                                    fullWidth
                                                    variant="outlined"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </Layout>
    )
}

export default CreateProduction;