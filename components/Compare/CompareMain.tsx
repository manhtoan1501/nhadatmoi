import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import urlProcess from "../../modules/urlProcess";
import StringProcess from "../../modules/stringProcess";
// import AslInfo from "../AdSellLeases/AslInfo";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { AdSellLeaseItem } from "../../interfaces/adSellLeaseItem";
import ContactBlock from "../PageDetail/ContactBlock";
import AlbumImageBlock from "../PageDetail/AlbumImageBlock";

interface CompareMainProps {
  dataCompare: AdSellLeaseItem[]
}

interface ImageProp {
  alt_text: string
  description: string
  title: string
  src: string
}


const CompareMainPage: FunctionComponent<CompareMainProps> = (props: CompareMainProps) => {
  const freshText = (input: string) => {
    input = StringProcess.stripProperties(input, ['href', 'src', 'rel']);
    input = StringProcess.stripTags(input, '<a><br/><br><img><p><h1><h2><h3><h4><h5><u><img><video><audio><li><ul><table><tr><td><sup><sub>');
    input = input.replace(/https:\/\/nhadatmoi.net\/data/g, 'https://static.nhadatmoi.net/data');
    input = input.replace(/&nbsp;/g, ' ');
    return input;
  };
  let numberRow: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 4;
  if (props.dataCompare && props.dataCompare.length > 0) {
    if (props.dataCompare.length == 2) {
      numberRow = 6;
    }
    if (props.dataCompare.length == 3) {
      numberRow = 4;
    }
    if (props.dataCompare.length == 4) {
      numberRow = 3;
    }
  }
  return (
    <>
      <div className={'compare_page container-big'}>
        <div className={'compare_page__title'}>
          So sánh tin rao
        </div>
        <Grid container className={'compare_page__container'} spacing={0}>
          {
            props.dataCompare && props.dataCompare.length > 0 && props.dataCompare.map((compareItem: AdSellLeaseItem, index: number) => {
              return (
                <Grid item xs={numberRow} key={"compare_index__" + index}>
                  <div className={'compare_page__container__title'}>
                    <div className={'compare_page__container__title__avatar'}>
                      {
                        compareItem.avatar && compareItem.avatar.src &&
                        <img src={urlProcess.processImageUrl(compareItem.avatar.src, 'ad_sell_lease')} />
                      }

                      {
                        (!compareItem.avatar || !compareItem.avatar.src) &&
                        <img src={urlProcess.processImageUrl('', 'ad_sell_lease')} />
                      }

                    </div>
                    <div className={'compare_page__container__title__title'}>
                      {StringProcess.truncateString(String(compareItem.title), 70, '...')}
                    </div>
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
        <Grid container className={'compare_page__container'} spacing={0}>
          {
            props.dataCompare && props.dataCompare.length > 0 && props.dataCompare.map((compareItem: AdSellLeaseItem, index: number) => {
              return (
                <Grid item xs={numberRow} key={"compare_index__" + index}>
                  <div className={'compare_page__container__description'}>
                    {/* <AslInfo dataObject={compareItem}/> */}
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
        <div className={'compare_page__heading'}>MÔ TẢ</div>
        <Grid container className={'compare_page__container'} spacing={0}>
          {
            props.dataCompare && props.dataCompare.length > 0 && props.dataCompare.map((compareItem: AdSellLeaseItem, index: number) => {
              let description = freshText(String(compareItem.description));
              return (
                <Grid item xs={numberRow} key={"compare_index__" + index}>
                  <div className={'compare_page__container__description'} dangerouslySetInnerHTML={{ __html: description }} >
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
        <Grid container className={'compare_page__container'} spacing={0}>
          {
            props.dataCompare && props.dataCompare.length > 0 && props.dataCompare.map((compareItem: AdSellLeaseItem, index: number) => {
              let latValue = '';
              let lngValue = '';
              if (compareItem && compareItem.map) {
                latValue = compareItem.map.lat;
                lngValue = compareItem.map.lng;
              }

              if (compareItem && compareItem.google_map_latitude && compareItem.google_map_longitude) {
                latValue = compareItem.google_map_latitude;
                lngValue = compareItem.google_map_longitude;
              }

              if (!latValue || !lngValue || latValue === '0' || lngValue === '0') {
                latValue = '20.9709496';
                lngValue = '105.7531617';
              }

              const MyMapComponent = withScriptjs(withGoogleMap((props: { isMarkerShown: any; googleMapURL: string }) =>
                <GoogleMap
                  defaultZoom={13}
                  defaultCenter={{ lat: parseFloat(latValue), lng: parseFloat(lngValue) }}
                >
                  {props.isMarkerShown && <Marker position={{ lat: parseFloat(latValue), lng: parseFloat(lngValue) }} />}
                </GoogleMap>
              ));
              return (
                <Grid item xs={numberRow} key={"compare_index__" + index}>
                  <div className="compare_page__container__description">
                    <MyMapComponent
                      isMarkerShown={true}
                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDNrtz4-o2IbVO8s7qQKOxq49AiX-gCXCE"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />} />
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
        <Grid container className={'compare_page__container'} spacing={0}>
          {
            props.dataCompare && props.dataCompare.length > 0 && props.dataCompare.map((compareItem: AdSellLeaseItem, index: number) => {
              return (
                <Grid item xs={numberRow} key={"compare_index__" + index}>
                  <div className="compare_page__container__description">
                    <AlbumImageBlock images={compareItem.image} imageType={'ad_sell_lease'} />
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
        <div className={'compare_page__heading'}>LIÊN HỆ</div>
        <Grid container className={'compare_page__container'} spacing={0}>
          {
            props.dataCompare && props.dataCompare.length > 0 && props.dataCompare.map((compareItem: AdSellLeaseItem, index: number) => {
              return (
                <Grid item xs={numberRow} key={"compare_index__" + index}>
                  <div className="compare_page__container__description">
                    <ContactBlock dataObject={compareItem} type={'ad_sell_lease'} />
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
      </div>
    </>
  );
};

export default CompareMainPage;
