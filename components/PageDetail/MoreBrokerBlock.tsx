import React, { Component } from "react";
import Slider from "react-slick";
import "../../sass/style.scss";

// Material- UI
import Grid from "@material-ui/core/Grid";

// Icon
import StarIcon from "@material-ui/icons/Star";



function NextArrow(props: { className: any; onClick: any; }) {
  const { className, onClick } = props;
  return (
    <div
      id="nextArrow"
      className={className+' arrowincarousel nextarrowincarousel'}
      style={{ display: "block"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: { className: any; onClick: any; }) {
  const { className, onClick } = props;
  return (

      <div
      id="prevArrow"
      className={className+' arrowincarousel prevarrowincarousel'}
      style={{ display: "block" }}
      onClick={onClick}
    />

  );
}


export default class MostBroker extends Component {
  render() {
    const brokerOnclick = () => {
    };
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <NextArrow className='broker_next' onClick={brokerOnclick()}/>,
      prevArrow: <PrevArrow className='broker_prev' onClick={brokerOnclick()}/>,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="broker-view u-margin-bottom-medium u-margin-top-medium">
        <h3 className="broker-view__title text-active u-margin-bottom-small">Liên hệ môi giới của dự án</h3>
        <Slider {...settings}>
          <div
            className="card-broker u-margin-bottom-small"
          >
            <div className="card-broker__img u-margin-bottom-small">
              <img src="https://static.nhadatmoi.net/default/nhadatmoi-default.svg" />
            </div>

            <div className="card-broker__rate">
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
            </div>

            <div className="card-broker__name text-active">
              <p>
                <b>Tạ Nhật Hàn Duyên</b>
              </p>
            </div>

            <div className="card-broker__projects">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <span>Dự án : 1000</span>
                </Grid>
                <Grid item>Giao dịch : 2000</Grid>
              </Grid>
            </div>
          </div>

          <div
            className="card-broker u-margin-bottom-small"
            style={{ marginRight: "15px" }}
          >
            <div className="card-broker__img u-margin-bottom-small">
              <img src="https://static.nhadatmoi.net/default/nhadatmoi-default.svg" />
            </div>

            <div className="card-broker__rate">
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
            </div>

            <div className="card-broker__name text-active">
              <p>
                <b>Tạ Nhật Hàn Duyên</b>
              </p>
            </div>

            <div className="card-broker__projects">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <span>Dự án : 1000</span>
                </Grid>
                <Grid item>Giao dịch : 2000</Grid>
              </Grid>
            </div>
          </div>

          <div
            className="card-broker u-margin-bottom-small"
            style={{ marginRight: "15px" }}
          >
            <div className="card-broker__img u-margin-bottom-small">
              <img src="https://static.nhadatmoi.net/default/nhadatmoi-default.svg" />
            </div>

            <div className="card-broker__rate">
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
            </div>

            <div className="card-broker__name text-active">
              <p>
                <b>Tạ Nhật Hàn Duyên</b>
              </p>
            </div>

            <div className="card-broker__projects">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <span>Dự án : 1000</span>
                </Grid>
                <Grid item>Giao dịch : 2000</Grid>
              </Grid>
            </div>
          </div>

          <div
            className="card-broker u-margin-bottom-small"
            style={{ marginRight: "15px" }}
          >
            <div className="card-broker__img u-margin-bottom-small">
              <img src="https://static.nhadatmoi.net/default/nhadatmoi-default.svg" />
            </div>

            <div className="card-broker__rate">
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
            </div>

            <div className="card-broker__name text-active">
              <p>
                <b>Tạ Nhật Hàn Duyên</b>
              </p>
            </div>

            <div className="card-broker__projects">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <span>Dự án : 1000</span>
                </Grid>
                <Grid item>Giao dịch : 2000</Grid>
              </Grid>
            </div>
          </div>

          <div
            className="card-broker u-margin-bottom-small"
            style={{ marginRight: "15px" }}
          >
            <div className="card-broker__img u-margin-bottom-small">
              <img src="https://static.nhadatmoi.net/default/nhadatmoi-default.svg" />
            </div>

            <div className="card-broker__rate">
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
            </div>

            <div className="card-broker__name text-active">
              <p>
                <b>Tạ Nhật Hàn Duyên</b>
              </p>
            </div>

            <div className="card-broker__projects">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <span>Dự án : 1000</span>
                </Grid>
                <Grid item>Giao dịch : 2000</Grid>
              </Grid>
            </div>
          </div>

          <div
            className="card-broker u-margin-bottom-small"
            style={{ marginRight: "15px" }}
          >
            <div className="card-broker__img u-margin-bottom-small">
              <img src="https://static.nhadatmoi.net/default/nhadatmoi-default.svg" />
            </div>

            <div className="card-broker__rate">
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
              <StarIcon className="card-broker__rate__icon" />
            </div>

            <div className="card-broker__name text-active">
              <p>
                <b>Tạ Nhật Hàn Duyên</b>
              </p>
            </div>

            <div className="card-broker__projects">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <span>Dự án : 1000</span>
                </Grid>
                <Grid item>Giao dịch : 2000</Grid>
              </Grid>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
