import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper-info">
      <SubHeading title='Liên lạc ' />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Địa chỉ liên lạc</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"> Đường 09 ( QL55), Xã Lộc Thành, Huyện Bảo Lâm. </p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>
          Thời gian mở cửa
        </p>
        <p className="p__opensans" style={{ color: '#aaa' }}>
          Th2 - T6: 06:30 AM - 09:00 PM
        </p>
        <p className="p__opensans" style={{ color: '#aaa' }} >
          T7 - CN: 07:00 AM - 09:30 PM
        </p>
      </div>
      {/* <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button> */}
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find us" />
    </div>
  </div>
);

export default FindUs;
