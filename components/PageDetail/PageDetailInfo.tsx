import React, { FunctionComponent, useEffect } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import StringProcess from '../../modules/stringProcess';
import LocationImage from '../../modules/locationImage';
import UrlProcess from "../../modules/urlProcess";
// import AslInfo from "../AdSellLeases/AslInfo";
import { AdSellLeaseItem } from '../../interfaces/adSellLeaseItem';
import validator from "../../modules/validator";
import Tracking from "../../modules/AdSellLease/Tracking";

interface ProjectMainProps {
  dataObject: AdSellLeaseItem,
  type: string
}

const PageDetailInfo: FunctionComponent<ProjectMainProps> = (props: ProjectMainProps) => {
  let latValue = '';
  let lngValue = '';
  if (props.dataObject && props.dataObject.map) {
    latValue = props.dataObject.map.lat;
    lngValue = props.dataObject.map.lng;
  }

  if (props.dataObject && props.dataObject.google_map_latitude && props.dataObject.google_map_longitude) {
    latValue = props.dataObject.google_map_latitude;
    lngValue = props.dataObject.google_map_longitude;
  }

  if (!latValue || !lngValue || latValue === '0' || lngValue === '0') {
    latValue = '20.9709496';
    lngValue = '105.7531617';
  }

  const handleTracking = (type: string) => {
    let addSellLeaseId = props.dataObject.id;
    if (addSellLeaseId && !validator.isBlank(addSellLeaseId) && props.type === 'ad_sell_lease') {
      Tracking.addTracking(String(addSellLeaseId), type);
    }
  };

  let iconMarkerDefault = LocationImage.locationImage(null);
  const [iconMarker, setIconMarker] = React.useState(iconMarkerDefault);

  //Count Ad Sell Lease
  useEffect(() => {
    const toDataURL = (url: string, callback: any) => {
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        let reader = new FileReader();
        reader.onloadend = function () {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    };

    let brokerAvatar = UrlProcess.processImageUrl('', 'broker');
    if (props.dataObject && props.dataObject.contact && props.dataObject.contact.image) {
      brokerAvatar = UrlProcess.processImageUrl(props.dataObject.contact.image, 'broker');
    }
    toDataURL(brokerAvatar, function (dataUrl: string) {
      setIconMarker(LocationImage.locationImage(dataUrl));
    });
  }, []);


  const MyMapComponent = withScriptjs(withGoogleMap((props: { isMarkerShown: any; googleMapURL: string }) =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: parseFloat(latValue), lng: parseFloat(lngValue) }}
    >
      {props.isMarkerShown && <Marker icon={iconMarker} position={{ lat: parseFloat(latValue), lng: parseFloat(lngValue) }} />}
    </GoogleMap>
  ));

  const freshText = (input: string) => {
    input = StringProcess.stripProperties(input, ['href', 'src', 'rel']);
    input = StringProcess.stripTags(input, '<a><br/><br><img><p><h1><h2><h3><h4><h5><u><img><video><audio><li><ul><table><tr><td><sup><sub>');
    input = input.replace(/https:\/\/nhadatmoi.net\/data/g, 'https://static.nhadatmoi.net/data');
    input = input.replace(/&nbsp;/g, ' ');
    return input;
  };
  let description = freshText(String(props.dataObject.description));
  let positionContent = freshText(String(props.dataObject.infrastructure_content));
  let infrastructureContent = freshText(String(props.dataObject.infrastructure_content));
  // @ts-ignore
  return (
    <div>
      <div className="project-info">
        <h2 className="project-info-title text-active u-margin-bottom-small">Thông tin tổng quan</h2>

        {/* <AslInfo dataObject={props.dataObject}/> */}
        <h2 className="project-info-title text-active u-margin-bottom-small">Mô tả</h2>
        <div className="project-info__description u-margin-bottom-medium" dangerouslySetInnerHTML={{ __html: description }} />
        {
          props.dataObject.position_content &&
          <div>
            <h3 className="project-info-title text-active u-margin-bottom-small">Vị trí</h3>
            <div className="project-info__description u-margin-bottom-medium" dangerouslySetInnerHTML={{ __html: positionContent }} />
          </div>
        }

        {
          props.dataObject.infrastructure_content &&
          <div>
            <h3 className="project-info-title text-active u-margin-bottom-small">Hạ tầng</h3>
            <div className="project-info__description u-margin-bottom-medium" dangerouslySetInnerHTML={{ __html: infrastructureContent }} />
          </div>
        }

        <h2 className="project-info-title text-active u-margin-bottom-small">Bản đồ</h2>
        <div className="project-info__maps" onClick={() => handleTracking('map_click')}>

          <MyMapComponent
            isMarkerShown={true}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDNrtz4-o2IbVO8s7qQKOxq49AiX-gCXCE"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
        </div>
      </div>
    </div>
  );
};
export default PageDetailInfo;
