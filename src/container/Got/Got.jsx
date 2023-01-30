import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'

import './Got.css';

const Got = ({ readServiceMore }) => {

  return (
    <>
      {
        readServiceMore &&
        <div className='app__bg app__wrapper section__padding'>
          <div className="app__wrapper_info">
            <SubHeading title='Dịch vụ' />
            <h1 className="headtext__cormorant">CHUỖI QUÁN GOT ĐẶC TRƯNG</h1>
            <div className="app__director-content">
              <div className='app__wrapper-service'>
                <ul className="app__wrapper-father">
                  <p className="p__opensans p__service">
                    Là chuỗi quán cà phê đặc sản GOT – nơi
                    tổng hoà của những trải nghiệm:
                  </p>
                  <li className='app__wrapper-info__items'><p className="p__opensans">Thưởng Thức Cá Nhân Hoá: khám phá “gu” cà phê và cả không gian. </p></li>
                  <li className='app__wrapper-info__items'><p className="p__opensans">• Thu hái và sơ chế</p></li>
                  <li className='app__wrapper-info__items'><p className="p__opensans">• Phơi và bảo quản.</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app__wrapper_img">
            <img src={images.quanbaoloc} alt="Director img" />
          </div>
          {/* <button className='custom__button' style={{ marginTop: '2rem' }} onClick={handleServiceClick}>Dịch vụ GOT</button> */}
        </div>
      }

    </>

  );
}

export default Got;
