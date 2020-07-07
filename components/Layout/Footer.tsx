import * as React from 'react'
import Grid from "@material-ui/core/Grid";
import PhoneIphone from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';
import {FunctionComponent} from 'react';

interface IFooterProps {

}
const FooterPage: FunctionComponent<IFooterProps> = (props: IFooterProps) => {
  return (
      <Grid container spacing={0} item xs={12} className="footer" direction="row"
          justify="center"
          alignItems="center">
        <Grid container spacing={0} className="footer_body"
              justify="center">
          <Grid item md={4} sm={12} className="footer_body__item border_bottom_mobile">
            <div className="footer_body__item_title">
              CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN MỚI
            </div>
            <div className="footer_body__item_description">
              <div className="footer_body__item_description_icon">
                <svg viewBox="0 0 384 512">
                  <path
                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
                </svg>
              </div>
              <div className="footer_body__item_description_text">
                <p className="footer_body__item_description_text_title">Địa chỉ</p>
                <p className="footer_body__item_description_text_content">
                  Số 12 Khuất Duy Tiến, Thanh Xuân, Hà Nội
                </p>
              </div>
            </div>
            <div className="footer_body__item_description">
              <div className="footer_body__item_description_icon">
                <PhoneIphone/>
              </div>
              <div className="footer_body__item_description_text">
                <p className="footer_body__item_description_text_title">Điện thoại</p>
                <p className="footer_body__item_description_text_content">
                  0936.33.81.39
                </p>
              </div>
            </div>
            <div className="footer_body__item_description">
              <div className="footer_body__item_description_icon">
                <EmailIcon/>
              </div>
              <div className="footer_body__item_description_text">
                <p className="footer_body__item_description_text_title">E-mail</p>
                <p className="footer_body__item_description_text_content">
                  noithatdodo@gmail.com
                </p>
              </div>
            </div>
            <div className="footer_body__item_branch">
              <img className="gov" src="https://static.nhadatmoi.net/default/bocongthuong.png"
                   alt="Đã thông báo với Bộ Công Thương"/>
              <a href={'https://www.dmca.com/Protection/Status.aspx?ID=7816605d-fbd2-45f8-a397-eeac42642b75&refurl=https://nhadatmoi.net/'} target={'_blank'} rel={'nofollow'} >
                <img src="https://static.nhadatmoi.net/default/dmca.png" alt="DMCA" className="dmca"/>
              </a>
            </div>
          </Grid>
          <Grid item md={8} sm={12}>
            <Grid container spacing={0}>
              <Grid item md={3} xs={6} className="footer_body__item">
                <div className="footer_body__item_title">
                  Công ty
                </div>
                <div className="footer_body__item_description">
                  <Link href={'/about-us'} as={'/about-us'}><a>Về Bất Động Sản Mới</a></Link>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/tuyen-dung'} rel={'nofollow'}>Tuyển dụng</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/lien-he/thong-tin-lien-he'} rel={'nofollow'}>Thông tin liên hệ</a>
                </div>
                <div className="footer_body__item_description">
                  <Link href={'/sitemap'} as={'/sitemap'}><a>Sitemap</a></Link>
                </div>
              </Grid>
              <Grid item md={3} xs={6} className="footer_body__item">
                <div className="footer_body__item_title">
                  Điều khoản
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/dieu-khoan/quy-che-hoat-dong'} rel={'nofollow'}>Quy chế hoạt động</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/dieu-khoan/chinh-sach-bao-mat'} rel={'nofollow'}>Chính sách bảo mật</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/dieu-khoan/chinh-sach-cookie'} rel={'nofollow'}>Chính sách Cookie</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/dieu-khoan/dieu-khoan-su-dung'} rel={'nofollow'}>Điều khoản sử dụng</a>
                </div>
              </Grid>
              <Grid item md={3} xs={6} className="footer_body__item">
                <div className="footer_body__item_title">
                  Thông tin
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://nhadatmoi.net/tin-tuc/tin-tuc'}>Tin tức thị trường</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://nhadatmoi.net/tin-tuc/blog'}>Báo cáo & Phân tích</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://nhadatmoi.net/tin-tuc/kien-thuc-moi-gioi'}>Kiến thức cho môi giới</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://help.nhadatmoi.net/huong-dan'} rel={'nofollow'}>Hướng dẫn sử dụng</a>
                </div>
              </Grid>
              <Grid item md={3} xs={6} className="footer_body__item">
                <div className="footer_body__item_title">
                  Mạng xã hội
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://www.facebook.com/nhadatmoi.net/'} rel={'nofollow'} target={'_blank'}>Facebook</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://www.youtube.com/channel/UCCvlOD7vTPJeYRY8IrINguQ'} rel={'nofollow'} target={'_blank'}>Youtube</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://twitter.com/nhadatmoi'} rel={'nofollow'} target={'_blank'}>Twitter</a>
                </div>
                <div className="footer_body__item_description">
                  <a href={'https://www.linkedin.com/in/nhadatmoi/'} rel={'nofollow'} target={'_blank'}>LinkedIn</a>
                </div>
              </Grid>
              <Grid item md={6} xs={12} className="footer_body__apps">
                <div className="footer_body__apps_title">Phương thức thanh toán</div>
                <div className="footer_body__apps_payment">
                  <img src="https://static.nhadatmoi.net/default/visa.png" alt="Visa"/>
                  <img src="https://static.nhadatmoi.net/default/mastercard.png" alt="Mastercard"/>
                  <img src="https://static.nhadatmoi.net/default/atm.png" alt="ATM"/>
                </div>
              </Grid>
              <Grid item md={6} xs={12} className="footer_body__apps">
                <div className="footer_body__apps_title">Ứng dụng di động</div>
                <div className="footer_body__apps_payment">
                  <img className="no_border" src="https://static.nhadatmoi.net/default/apple-store.svg"
                       alt="Apple Store"/>
                  <img className="no_border" src="https://static.nhadatmoi.net/default/google-play.svg"
                       alt="Google Play"/>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={0} className="footer_bottom"
              justify="center">
          <Hidden smDown>
            <Grid item xs={6} className="footer_bottom__left">
              © 2020 - Bản quyền của công ty Cổ phần Nội Thất Đô Đô - noithatdodo.com
            </Grid>
            <Grid item xs={6} className="footer_bottom__right">
              <a href="/">Phản hồi</a>
              <a href="/">Điều khoản</a>
              <a href="/">Chính sách bảo mật</a>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item xs={12} className="footer_bottom__center">
              © 2019 - Bản quyền của công ty Cổ phần Bất Động Sản Mới
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
  );
};

export default FooterPage
