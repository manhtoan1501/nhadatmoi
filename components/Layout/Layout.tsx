import * as React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { FunctionComponent } from "react";
import Validator from "../../modules/validator";
import { googleSearchConsole, localStorageCompareKey } from '../../constants';
import { useEffect } from "react";
const Logo = require("./logo.png");

interface LayoutPageProps {
  title?: string,
  description?: string,
  image?: string,
  canonical: string,
  path: string,
  children?: any,
  user?: {
    email: string,
    _id: string,
    first_name: string,
    last_name: string,
    id: string,
    avatar: string
  },
  updateModal?: (data: boolean) => void;
  statusModal?: boolean
}

const LayoutPage: FunctionComponent<LayoutPageProps> = (props: LayoutPageProps) => {
  const [statusModal, setModal] = React.useState(false);
  const updateModal = (data: boolean) => {
    if (typeof props.updateModal !== "undefined") {
      props.updateModal(data);
    } else {
      setModal(data);
    }
  };
  const [dataCompareLocal, setDataCompareLocal] = React.useState(null);
  useEffect(() => {
    if (localStorage.getItem(localStorageCompareKey) && !Validator.isBlank(localStorage.getItem(localStorageCompareKey))) {
      try {
        setDataCompareLocal(JSON.parse(localStorage.getItem(localStorageCompareKey) as string));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  let schemaObject = '{"@context": "https://schema.org", "@type": "LocalBusiness", "name": "Bất Động Sản Nội thất Dodo", "image": "https://pbs.twimg.com/profile_images/1230120113887531008/BPH75bW0_400x400.jpg", "additionalType":["https://vi.wikipedia.org/wiki/B%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/M%C3%B4i_gi%E1%BB%9Bi_b%E1%BA%A5t_%C4%91%E1%BB%99ng_s%E1%BA%A3n","https://vi.wikipedia.org/wiki/Ng%C6%B0%E1%BB%9Di_m%C3%B4i_gi%E1%BB%9Bi"], "paymentAccepted":"Cash, Visa, Mastercard, American Express, Debit, PayPal, Apple Pay", "mainEntityOfPage":"https://www.google.com/maps?cid=6255054938969620475", "hasmap":"https://search.google.com/local/writereview?placeid=ChIJ-UI6Mh5TNDER-z_Wh1NrzlY", "description":"Nội thất Dodo đón đầu xu hướng bất động sản 4.0 tại Việt Nam, tích hợp trí tuệ nhân tạo để xử lý các dữ liệu, phân tích nhu cầu của cả người mua lẫn người bán", "@id": "https://nhadatmoi.net/", "url": "https://nhadatmoi.net/", "telephone": "0377 535 717", "priceRange": "1000 $", "address": { "@type": "PostalAddress", "streetAddress": "Số 348 Tố Hữu, phường La Khê, quận Hà Đông", "addressLocality": "Hà Nội", "postalCode": "100000", "addressCountry": "VN"}, "geo": { "@type": "GeoCoordinates", "latitude": 20.9709496, "longitude": 105.7531617 }, "openingHoursSpecification": { "@type": "OpeningHoursSpecification","dayOfWeek": [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59" }, "sameAs": ["https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ","https://bdsnhadatmoi.blogspot.com", "https://www.facebook.com/nhadatmoi.net", "https://bdsnhadatmoi.blogspot.com", "https://vi.gravatar.com/bdsnhadatmoi", "https://bdsnhadatmoi.tumblr.com", "https://bdsnhadatmoi.weebly.com", "https://twitter.com/bdsnhadatmoi", "https://www.reddit.com/user/bdsnhadatmoi", "https://www.diigo.com/profile/bdsnhadatmoi", "https://www.artfire.com/ext/people/bdsnhadatmoi", "https://www.smashwords.com/profile/view/bdsnhadatmoi", "http://play.fm/bdsnhadatmoi", "https://www.last.fm/user/bdsnhadatmoi", "https://www.strava.com/athletes/bdsnhadatmoi", "https://github.com/bdsnhadatmoi", "https://www.tripadvisor.com.vn/Profile/bdsnhadatmoi", "http://bit.ly/2uaZPLm", "https://getpocket.com/@bdsnhadatmoi", "https://www.pinterest.com/bdsnhadatmoi", "https://www.linkedin.com/in/bdsnhadatmoi", "https://www.flickr.com/people/bdsnhadatmoi", "https://about.me/bdsnhadatmoi", "https://www.instapaper.com/p/bdsnhadatmoi", "https://www.behance.net/bdsnhadatmoi", "https://myspace.com/bdsnhadatmoi", "https://www.goodreads.com/bdsnhadatmoi", "https://dribbble.com/bdsnhadatmoi", "https://www.deviantart.com/bdsnhadatmoi", "https://www.plurk.com/bdsnhadatmoi", "http://www.folkd.com/user/bdsnhadatmoi", "https://www.ted.com/profiles/19025977", "https://kinja.com/bdsnhadatmoi", "https://ello.co/bdsnhadatmoi", "https://coub.com/bdsnhadatmoi", "https://mix.com/bdsnhadatmoi", "http://www.authorstream.com/bdsnhadatmoi", "https://soundcloud.com/bdsnhadatmoi", "https://medium.com/@bdsnhadatmoi", "https://codepen.io/bdsnhadatmoi", "https://www.evernote.com/pub/ndmh269/tintuc", "https://disqus.com/by/bdsnhadatmoi", "https://www.scoop.it/u/b-t-ng-s-n-nha-t-m-i", "https://www.vingle.net/bdsnhadatmoi", "https://www.quora.com/profile/Bat-Dong-San-Nha-Dat-Moi", "https://bdsnhadatmoi.livejournal.com", "https://angel.co/bdsnhadatmoi", "https://www.producthunt.com/@bdsnhadatmoi", "https://speakerdeck.com/bdsnhadatmoi", "https://www.wikihow.com/User:Bdsnhadatmoi", "http://bdsnhadatmoi.brandyourself.com"]}';
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={props.canonical} />
        <link rel="shortcut icon" href={Logo} />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900&display=swap&subset=vietnamese" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <meta name="google-site-verification" content={googleSearchConsole} />
        {
          !Validator.isBlank(props.description) &&
          <meta name="description" content={props.description} />
        }

        <meta data-n-head="true" property="og:title" content={props.title} />
        <meta data-n-head="true" property="og:type" content="website" />
        <meta data-n-head="true" property="fb:app_id" content="937234366335504" />
        <meta data-n-head="true" property="fb:admins" content="100004244474013" />
        <meta data-n-head="true" property="og:site_name" content="Nội thất Dodo" />
        <meta data-n-head="true" property="og:url" content={props.canonical} />
        <meta data-n-head="true" property="og:image" content={props.image} />
        <meta data-n-head="true" property="og:description" content={props.description} />
        <meta data-n-head="true" name="twitter:card" content="summary" />
        <meta data-n-head="true" name="twitter:site" content="@nhadatmoi" />
        <meta data-n-head="true" name="twitter:creator" content="@nhadatmoi" />
        <meta data-n-head="true" name="twitter:title" content={props.title} />
        <meta data-n-head="true" name="twitter:description" content={props.description} />
        <meta data-n-head="true" name="twitter:image" content={props.image} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaObject }} >
        </script>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default LayoutPage;
