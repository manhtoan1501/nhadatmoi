import React, { FunctionComponent } from "react";

import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

interface HotLocationProps { };
interface LocationProps {
  image: string;
  title: string;
  path: string
}

//Import Dynamic
import dynamic from 'next/dynamic';
import Link from "next/link";

//Import without SSR Slider
const Slider = dynamic(() => import('react-slick'), {
  ssr: false
});

const HotLocation: FunctionComponent<HotLocationProps> = (props: HotLocationProps) => {
  const NextArrow = (props: { className: any; onClick: any; }) => {
    return (
      <div
        className={'hot-locations__next__arrow'}
        onClick={props.onClick}>
        <NavigateNext />
      </div>
    );
  };
  const PrevArrow = (props: { className: any; onClick: any; }) => {
    return (
      <div
        className={'hot-locations__prev__arrow'}
        onClick={props.onClick}>
        <NavigateBefore />
      </div>
    );
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow className="" onClick={[]} />,
    prevArrow: <PrevArrow className="" onClick={[]} />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 875,
        settings: {
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  };
  let dataLocation = [
    {
      title: "Hà Nội",
      image: "https://inhome.vn/hm_content/uploads/tin-tuc/4/thiet-ke-noi-that-phong-khach-bang-go-hien-dai-dep/thiet-ke-noi-that-phong-khach-don-gian-ma-dep-4.jpg",
      path: "/nha-dat-ban/nha-dat-ban-tai-ha-noi"
    },
    {
      title: "Hồ Chí Minh",
      image: "https://noithatmanhhe.vn/media/17531/sang-trong-boi-phong-khach-noi-that-go-tu-nhien-noi-that-manh-he.jpg?width=700&height=422.4418604651163",
      path: "/nha-dat-ban/nha-dat-ban-tai-ho-chi-minh"
    },
    {
      title: "Đà Nẵng",
      image: "https://kientrucroman.com.vn/wp-content/uploads/phong-khach-bang-go-cao-cap-2.jpg",
      path: "/nha-dat-ban/nha-dat-ban-tai-da-nang"
    },
    {
      title: "Lâm Đồng",
      image: "https://nhabephoanggia.vn/contents/posts/2390.jpg",
      path: "/nha-dat-ban/nha-dat-ban-tai-lam-dong"
    }
  ];

  return (
    <div className="hot-locations">
      <Slider {...settings}>
        {
          dataLocation.map((imageObject: LocationProps, index) => {
            return (
              <div key={"location_" + String(index)}>
                <Link href='/nha-dat-ban/[slug]' as={imageObject.path}><a>
                  <div className="hot-locations__item">
                    {/* <div className="hot-locations__item__title">{imageObject.title}</div> */}
                    <div className="hot-locations__item__image">
                      <div className="hot-locations__item__image__background" />
                      <img src={String(imageObject.image)} alt={"Tìm kiếm nhà Đất tại " + imageObject.title} />
                    </div>
                  </div>
                </a></Link></div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default HotLocation;
