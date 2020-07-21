import React, {FunctionComponent} from "react";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import HighlightOffIcon from "@material-ui/icons/Close";
import UrlProcess from "../../modules/urlProcess";
const SharePopup = dynamic(() => import('../Share/Share'), {
  ssr: false
});
import ContactBlock from "./ContactBlock";
import dynamic from "next/dynamic";
import {AdSellLeaseItem} from '../../interfaces/adSellLeaseItem';

interface ProjectMainProps {
  dataObject: AdSellLeaseItem
  objectUrl: string
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

const BottomFixProject: FunctionComponent<ProjectMainProps> = (props: ProjectMainProps) => {
  const [open, setOpen] = React.useState(false);
  let brokerAvatar = UrlProcess.processImageUrl('', 'broker');
  if (props.dataObject.contact && props.dataObject.contact.image) {
    brokerAvatar = UrlProcess.processImageUrl(props.dataObject.contact.image, 'broker');
  }

  let statusUserDescription = false;
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const [statusShare, setStatusShare] = React.useState<boolean>(false);
  return (
    <div>
      <div className="bottom-fix">
        <Grid container>
          <Grid item xs={4}>
            <a href={phoneNumber}>
              <div className="bottom-fix__item bottom-fix__item--phonenumber">
              <span>
                <svg viewBox="0 0 512 512"><path d="M484.25 330l-101.59-43.55a45.86 45.86 0 0 0-53.39 13.1l-32.7 40a311.08 311.08 0 0 1-124.19-124.12l40-32.7a45.91 45.91 0 0 0 13.1-53.42L182 27.79a45.63 45.63 0 0 0-52.31-26.61L35.5 22.89A45.59 45.59 0 0 0 0 67.5C0 313.76 199.68 512.1 444.56 512a45.58 45.58 0 0 0 44.59-35.51l21.7-94.22a45.75 45.75 0 0 0-26.6-52.27zm-41.59 134.09C225.08 463.09 49 287 48 69.3l90.69-20.9 42.09 98.22-68.09 55.71c46.39 99 98.19 150.63 197 197l55.69-68.11 98.19 42.11z"/></svg> Gọi điện
              </span>
              </div>
            </a>
          </Grid>
          <Grid item xs={4}>
            <div
              className="bottom-fix__item bottom-fix__item--infor"
              onClick={() => setStatusShare(true)}
            >
              <svg viewBox="0 0 576 512">
                <path d="M14.062 257.94L190.06 433.88c30.21 30.21 81.94 8.7 81.94-33.94v-78.28c146.59 8.54 158.53 50.199 134.18 127.879-13.65 43.56 35.07 78.89 72.19 54.46C537.98 464.768 576 403.8 576 330.05c0-170.37-166.04-197.15-304-201.3V48.047c0-42.72-51.79-64.09-81.94-33.94L14.062 190.06c-18.75 18.74-18.75 49.14 0 67.88zM48 224L224 48v128.03c143.181.63 304 11.778 304 154.02 0 66.96-40 109.95-76.02 133.65C501.44 305.911 388.521 273.88 224 272.09V400L48 224z"/>
              </svg> Chia sẻ
            </div>
          </Grid>
          <Grid item xs={4}>
            <div
              className="bottom-fix__item bottom-fix__item--infor"
              onClick={handleOpen}
            >
              <svg viewBox="0 0 512 512">
                <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zM126.1 245.1l121.4-121.4c4.7-4.7 12.3-4.7 17 0l121.4 121.4c4.7 4.7 4.7 12.3 0 17l-19.6 19.6c-4.8 4.8-12.5 4.7-17.2-.2L282 211.2V372c0 6.6-5.4 12-12 12h-28c-6.6 0-12-5.4-12-12V211.2l-67.1 70.3c-4.7 4.9-12.4 5-17.2.2l-19.6-19.6c-4.7-4.7-4.7-12.3 0-17z"/>
              </svg> Liên hệ
            </div>
          </Grid>
        </Grid>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className="contact-area-modal">
            <div className="contact-area-modal__close" onClick={handleClose}>
              <HighlightOffIcon fontSize="large"/>
            </div>
            <ContactBlock dataObject={props.dataObject} type={'ad_sell_lease'}/>
          </div>
        </Fade>
      </Modal>
      <SharePopup onClose={() => setStatusShare(false)} statusModal={statusShare} objectUrl={props.objectUrl}/>
    </div>
  );
};

export default BottomFixProject;
