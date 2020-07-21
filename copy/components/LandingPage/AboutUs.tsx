import React from "react";
import Grid from "@material-ui/core/Grid";

const AboutUs = () => {
  return (
    <div className={"aboutus-area body-general"}>
      <div className={"aboutus-area__title"}>
        <p className={"title-general"}>Đội ngũ Nội thất Dodo</p>
      </div>

      <Grid container direction="row" spacing={3}>
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div className={"aboutus-area__card"}>
            <div className={"aboutus-area__card__image"}>
              <img src={"https://static.nhadatmoi.net/default/members/vu-van-an.jpg"}/>
            </div>

            <p className={"aboutus-area__card__name"}>
              Vũ Văn An
            </p>

            <p className={"aboutus-area__card__position"}>
              Manager
            </p>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div className={"aboutus-area__card"}>
            <div className={"aboutus-area__card__image"}>
              <img src={"https://static.nhadatmoi.net/default/members/nguyen-quoc-khanh.jpg"}/>
            </div>

            <p className={"aboutus-area__card__name"}>
              Nguyễn Quốc Khánh
            </p>

            <p className={"aboutus-area__card__position"}>
              Technical Leader
            </p>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div className={"aboutus-area__card"}>
            <div className={"aboutus-area__card__image"}>
              <img src={"https://static.nhadatmoi.net/default/members/mai-thi-thanh-huong.jpg"}/>
            </div>

            <p className={"aboutus-area__card__name"}>
              Mai Thị Thanh Hương
            </p>

            <p className={"aboutus-area__card__position"}>
              Marketing Leader
            </p>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div className={"aboutus-area__card"}>
            <div className={"aboutus-area__card__image"}>
              <img src={"https://static.nhadatmoi.net/default/members/tran-duc-hoai.jpg"}/>
            </div>

            <p className={"aboutus-area__card__name"}>
              Trần Đức Hoài
            </p>

            <p className={"aboutus-area__card__position"}>
              SEO Leader
            </p>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div className={"aboutus-area__card"}>
            <div className={"aboutus-area__card__image"}>
              <img src={"https://static.nhadatmoi.net/default/members/tran-thi-minh-phuong.jpg"}/>
            </div>

            <p className={"aboutus-area__card__name"}>
              Trần Thị Minh Phương
            </p>

            <p className={"aboutus-area__card__position"}>
              Content Leader
            </p>
          </div>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div className={"aboutus-area__card"}>
            <div className={"aboutus-area__card__image"}>
              <img src={"https://static.nhadatmoi.net/default/members/tran-thi-dao.jpg"}/>
            </div>

            <p className={"aboutus-area__card__name"}>
              Trần Thị Đào
            </p>

            <p className={"aboutus-area__card__position"}>
              Design Leader
            </p>
          </div>
        </Grid>
      </Grid>

    </div>
  )
};

export default AboutUs;
