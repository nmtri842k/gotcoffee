import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram, FiPhone, FiPhoneCall } from 'react-icons/fi'
import { FooterOverlay, Newsletter, SubHeading } from '../../components';
import { images } from '../../constants'

import './Footer.css';


const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Liên hệ</h1>
        <p className="p__opensans">Lô 18 Nguyễn Công Trứ, P.1, Tp.Bảo Lộc.</p>
        <p className="p__opensans">10-12 Nguyễn Thị Minh Khai, Thị trấn Lộc Thắng, Huyện Bảo Lâm.</p>
        <p className="p__opensans">Đường 09 ( QL55), Xã Lộc Thành, Huyện Bảo Lâm.</p>
        <p className="p__opensans">SĐT: 0975.710.614 </p>

      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo_gotnho} alt="LogoGot" />
        <p className="p__opensans">"Cách tốt nhất để tìm thấy chính mình là đánh mất chính mình để phục vụ người khác.”</p>
        <SubHeading />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/GOTcafe" target="_blank">
            <FiFacebook color='#fff' />
          </a>
          <a href="tel:0975710614"> <FiPhone color='#fff'/></a>
          <FiInstagram color='#fff' />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Giờ mở cửa</h1>
        <p className="p__opensans">Thứ 2-Thứ 6:</p>
        <p className="p__opensans"> 06:30 - 21:00 AM</p>
        <p className="p__opensans">Thứ 7-Chủ nhật:</p>
        <p className="p__opensans"> 07:00 - 21:30 AM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> Copyright 2023 © gotcoffee.vn </p>
    </div>
  </div>
);

export default Footer;
