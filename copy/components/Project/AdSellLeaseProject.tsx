import React, {FunctionComponent, useEffect} from "react";
import {apolloClient} from "../../utils";
import {GET_AD_SELL_LEASES} from "../../graphql/ad_sell_leases/queries";
import Validator from "../../modules/validator";
import GridAdSellLeases from "../GridList/GridAdSellLeases";
import UrlProcess from "../../modules/urlProcess";
import Grid from "@material-ui/core/Grid";
import {AdSellLeasesListProps} from '../../interfaces/interface';

interface ProjectProps {
  id: string
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


const AdSellLeaseProject: FunctionComponent<ProjectProps> = (props: ProjectProps) => {
  let projectId = props.id;
  //Search Data AdsellLease
  const [searchDataAdSellLease, setSearchDataAdSellLease] = React.useState<AdSellLeasesListProps[]>([]);
  useEffect(() => {
    let dataFilterObject = {
      project: projectId
    };
    let dataFilter = JSON.stringify(dataFilterObject);
    dataFilter = dataFilter.split('"').join("'");
    apolloClient.query({query: GET_AD_SELL_LEASES, variables: {
      "page": 1,
      "limit": 6,
      "filter": dataFilter
    }}).then(response => {
      if (!Validator.isBlank(response.data) && !Validator.isBlank(response.data.adSellLeases.edges)) {
        setSearchDataAdSellLease(response.data.adSellLeases.edges);
      }
    });
  });

  const processBrokerAvatar = (input: string) => {
    return UrlProcess.processImageUrl(input, 'broker');
  };

  const processBrokerPhone = (mobile: any, phone: any) => {
    let phoneNumber = 'tel:' + phone;
    //Phone Number and Email
    if (!phone) {
      phoneNumber = 'tel:' + mobile;
    }
    return phoneNumber;
  };

  if (searchDataAdSellLease && searchDataAdSellLease.length > 0) {
    return (
      <>
        <div className="project-info">
          <h2 className="project-info-title text-active u-margin-bottom-small">Tin rao thuộc dự án</h2>
        </div>
        <div className={'project-body-ad-sell-lease'}>
          <GridAdSellLeases
            grid={{xl: 3, lg: 4, md: 6, sm: 6, xs: 12}}
            gridData={searchDataAdSellLease}
            className="grid__list"
          />
        </div>

        <div className="project-info">
          <h2 className="project-info-title text-active u-margin-bottom-small">Liên hệ môi giới dự án</h2>
        </div>
        <div className={'project-body-broker'}>
          <Grid container direction={"row"} spacing={0} className="grid__list__item u-margin-bottom-small">
          {searchDataAdSellLease.map((dataItem: AdSellLeasesListProps, index: number) => {
            return (
              <Grid item xl={3} lg={3} md={4} sm={4} xs={6} key={'grid_broker_' + index} className={'project-body-broker__broker'}>
                <div className="contact-area__title">
                  <div className="contact-area__title__avatar">
                    <div className="contact-area__title__avatar__block">
                      <img src={processBrokerAvatar(dataItem.node.contact.image)}/>
                    </div>
                  </div>
                  <div className="contact-area__title__value">
                    <p className="contact-area__title__value__top">{(dataItem.node.contact.name)?dataItem.node.contact.name:'Ẩn danh'}</p>
                    <p className="contact-area__title__value__bottom">{starIconEnable}{starIconEnable}{starIconEnable}{starIconEnable}{starIconDisable}</p>
                    <div className="contact-area__title__value__call">
                      <a href={processBrokerPhone(dataItem.node.contact.mobile, dataItem.node.contact.phone)}>
                        <div className="contact-area__title__value__call__button background_full">
                          <svg viewBox="0 0 512 512">
                            <path d="M476.5 22.9L382.3 1.2c-21.6-5-43.6 6.2-52.3 26.6l-43.5 101.5c-8 18.6-2.6 40.6 13.1 53.4l40 32.7C311 267.8 267.8 311 215.4 339.5l-32.7-40c-12.8-15.7-34.8-21.1-53.4-13.1L27.7 329.9c-20.4 8.7-31.5 30.7-26.6 52.3l21.7 94.2c4.8 20.9 23.2 35.5 44.6 35.5C312.3 512 512 313.7 512 67.5c0-21.4-14.6-39.8-35.5-44.6zM69.3 464l-20.9-90.7 98.2-42.1 55.7 68.1c98.8-46.4 150.6-98 197-197l-68.1-55.7 42.1-98.2L464 69.3C463 286.9 286.9 463 69.3 464z"/>
                          </svg> Gọi ngay
                        </div>
                      </a>
                    </div>

                  </div>
                  <div className="contact-area__title__information">
                    {
                      dataItem.node.contact.mobile &&
                      <div className="contact-area__title__information__light">
                        <div className="contact-area__title__information__light__svg">
                          <svg viewBox="0 0 512 512">
                            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                          </svg>
                        </div>
                        <p>{dataItem.node.contact.mobile}</p>
                      </div>
                    }
                    {
                      dataItem.node.contact.phone &&
                      <div className="contact-area__title__information__light">
                        <div className="contact-area__title__information__light__svg">
                          <svg viewBox="0 0 512 512">
                            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                          </svg>
                        </div>
                        <p>{dataItem.node.contact.phone}</p>
                      </div>
                    }
                    {
                      !dataItem.node.contact.phone &&  !dataItem.node.contact.mobile &&
                      <div className="contact-area__title__information__light">
                        <div className="contact-area__title__information__light__svg">
                          <svg viewBox="0 0 512 512">
                            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/>
                          </svg>
                        </div>
                        <p>Không có số điện thoại</p>
                      </div>
                    }
                  </div>
                </div>
              </Grid>
            )
          })}
          </Grid>
        </div>
      </>
    );
  } else {
    return (<></>);
  }

};

export default AdSellLeaseProject;
