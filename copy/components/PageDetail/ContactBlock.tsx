import React, {FunctionComponent} from "react";
import UrlProcess from "../../modules/urlProcess";
import Tracking from "../../modules/AdSellLease/Tracking";

import {AdSellLeaseItem} from '../../interfaces/adSellLeaseItem';
import validator from "../../modules/validator";

interface ProjectDetailsProp {
  dataObject: AdSellLeaseItem
  type: string
}

const starIconEnable = (
  <svg viewBox="0 0 576 512" className="star_icon_enable">
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
  </svg>
);
const starIconDisable = (
  <svg viewBox="0 0 576 512" className="star_icon_disable">
    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
  </svg>
);

const ContactBlock: FunctionComponent<ProjectDetailsProp> = (props: ProjectDetailsProp) => {
  let brokerAvatar = UrlProcess.processImageUrl('', 'broker');
  if (props.dataObject.contact && props.dataObject.contact.image) {
    brokerAvatar = UrlProcess.processImageUrl(props.dataObject.contact.image, 'broker');
  }

  let statusUserDescription = false;
  let phoneNumber = 'tel:';
  let mailTo = 'mailto:';
  if (props.dataObject.contact) {
    phoneNumber = 'tel:' + props.dataObject.contact.phone;
    //Phone Number and Email
    if (!props.dataObject.contact.phone) {
      phoneNumber = 'tel:' + props.dataObject.contact.mobile;
    }
    mailTo = 'mailto:' + props.dataObject.contact.email;
  }

  const handleTracking = (type: string) => {
    let addSellLeaseId = props.dataObject.id;
    if (addSellLeaseId && !validator.isBlank(addSellLeaseId) && props.type === 'ad_sell_lease') {
      Tracking.addTracking(String(addSellLeaseId), type);
    }
  };

  return (
    <div className="contact-area__title">
        <div className="contact-area__title__avatar">
          <div className="contact-area__title__avatar__block">
            <img src={brokerAvatar}/>
          </div>
        </div>
        <div className="contact-area__title__value">
          {
            props.dataObject.contact &&
            <p className="contact-area__title__value__top">{props.dataObject.contact.name}</p>
          }

          <p className="contact-area__title__value__bottom">{starIconEnable}{starIconEnable}{starIconEnable}{starIconEnable}{starIconDisable} (4.7 Đánh giá)</p>
          <div className="contact-area__title__value__call">
            <a href={phoneNumber}>
            <div className="contact-area__title__value__call__button background_left"  onClick={(event: React.MouseEvent<HTMLElement>) => handleTracking('call_click')}>
              <svg viewBox="0 0 512 512">
                <path d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"/>
              </svg> Gọi ngay
            </div>
            </a>
            <a href={mailTo}>
            <div className="contact-area__title__value__call__button background_right" onClick={(event: React.MouseEvent<HTMLElement>) => handleTracking('click')}>
              <svg viewBox="0 0 512 512">
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
              </svg> Gửi E-mail
            </div></a>
          </div>

        </div>
        {
          statusUserDescription &&
          <div className="contact-area__title__information">
            <div className="contact-area__title__information__bold">Giới thiệu</div>
            <div className="contact-area__title__information__normal"/>
          </div>
        }
        <div className="contact-area__title__information">
          <div className="contact-area__title__information__bold">Thông tin liên hệ</div>
          {
            props.dataObject.contact && props.dataObject.contact.mobile &&
            <div className="contact-area__title__information__light">
              <div className="contact-area__title__information__light__svg">
                <svg viewBox="0 0 512 512">
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                </svg>
              </div>
              <p>{props.dataObject.contact.mobile}</p>
            </div>
          }
          {
            props.dataObject.contact && props.dataObject.contact.phone &&
            <div className="contact-area__title__information__light">
              <div className="contact-area__title__information__light__svg">
                <svg viewBox="0 0 512 512">
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                </svg>
              </div>
              <p>{props.dataObject.contact.phone}</p>
            </div>
          }
          {
            props.dataObject.contact && props.dataObject.contact.email &&
            <div className="contact-area__title__information__light">
              <div className="contact-area__title__information__light__svg">
                <svg viewBox="0 0 512 512">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                </svg>
              </div>
              <p>{props.dataObject.contact.email}</p>
            </div>
          }
          {
            props.dataObject.contact && props.dataObject.contact.address &&
            <div className="contact-area__title__information__light">
              <div className="contact-area__title__information__light__svg">
                <svg viewBox="0 0 384 512">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                </svg>
              </div>
              <p>{props.dataObject.contact.address}</p>
            </div>
          }
          {
            props.dataObject.contact && !props.dataObject.contact.address && !props.dataObject.contact.email && !props.dataObject.contact.phone && !props.dataObject.contact.mobile &&
            <div className="contact-area__title__information__normal">
              <p>Chưa có thông tin liên hệ nào</p>
            </div>
          }
        </div>
      </div>
  );
};

export default ContactBlock;
