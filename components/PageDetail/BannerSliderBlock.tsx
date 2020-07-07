import React, {FunctionComponent, useState} from "react";

import dynamic from 'next/dynamic';
//Import without SSR Slider
const Slider = dynamic(() => import('react-slick'), {
  ssr: false
});

// Material-Icon
import VideoCam from '@material-ui/icons/Videocam';
import InsertPhoto from '@material-ui/icons/InsertPhoto';
import Navigation from '@material-ui/icons/Navigation';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import Hidden from '@material-ui/core/Hidden';
// @ts-ignore
import FsLightbox from "fslightbox-react";

import UrlProcess from "../../modules/urlProcess";

function NextArrow(props: { onClick: any; }) {
  const {onClick} = props;
  return (
    <div
      className="banner-slider__navigate-next"
      onClick={onClick}
    ><NavigateNext/></div>
  );
}

function PrevArrow(props: { onClick: any; }) {
  const {onClick} = props;
  return (

    <div
      className="banner-slider__navigate-before"
      onClick={onClick}
    ><NavigateBefore/></div>

  );
}

interface ImageProp {
  alt_text: string
  description: string
  title: string
  src: string
}

interface BannerSliderProp {
  images: ImageProp[],
  imageType: string
}

const BannerSliderBlock: FunctionComponent<BannerSliderProp> = (props: BannerSliderProp) => {
  const settings = {
    dots: false,
    nextArrow: <NextArrow onClick=""/>,
    prevArrow: <PrevArrow onClick=""/>,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const settingsFooter = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0
  };
  const defaultElement = (
    <div className="banner-slider__item">
    </div>
  );

  const [lightboxController, setLightboxController] = useState({
    slide: 1
  });

  const [toggler, setToggler] = useState(false);

  function openLightboxOnSlide(number: number) {
    setToggler(!toggler);
    setLightboxController({
      slide: number
    });
  }

  let imagePrepareSource = props.images.map((imageObject: ImageProp, index) => {
    return (
      <img
        src={UrlProcess.processImageUrl(imageObject.src, props.imageType)}
      />
    )
  });

  return (
    <div>
      <div className="banner-slider">
        <Slider {...settings}>
          {
            props.images.map((imageData, index) => {
              return (
                <div className="banner-slider__item" key={'image_slider_' + index}>
                  <img
                    src={UrlProcess.processImageUrl(imageData.src, props.imageType)}
                    title={imageData.title}
                    alt={imageData.title}
                  />
                </div>
              );
            })
          }
          {
            props.images.length && props.images.length === 1 &&
            defaultElement
          }
          {
            props.images.length && props.images.length === 1 &&
            defaultElement
          }
          {
            props.images.length && props.images.length === 2 &&
            defaultElement
          }
        </Slider>
      </div>
      <Hidden mdDown>
        <div className="banner-footer">
          <div className="banner-footer__container">
            <Slider {...settingsFooter} className="banner-footer__images">
              {
                props.images.map((imageData, index) => {
                  return (
                    <div className="banner-footer__images__item" key={'image_slider_item_' + index}>
                      <img
                        src={UrlProcess.processImageUrl(imageData.src, props.imageType)}
                        title={imageData.title}
                        alt={imageData.title}
                        onClick={() => openLightboxOnSlide(index + 1)}
                      />
                    </div>
                  );
                })
              }
            </Slider>
            <div className="banner-footer__button">
              <div className="banner-footer__button__item active">
                <InsertPhoto/> Ảnh
              </div>
              <div className="banner-footer__button__item diable">
                <Navigation/> 3D View
              </div>
              <div className="banner-footer__button__item">
                <VideoCam/> Video
              </div>
              <div className="banner-footer__button__item diable">
                <svg viewBox="0 0 496 512">
                  <path
                    d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"/>
                </svg> Street View
              </div>
            </div>
          </div>

        </div>
      </Hidden>
      <FsLightbox
        toggler={ toggler }
        customSources={imagePrepareSource}
        slide={lightboxController.slide}
      />
    </div>
  );
};

export default BannerSliderBlock;
