import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'



import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <h1 className="app__header-h1"> Sự lựa chọn hoàn hảo</h1>
      <p className='p__introduce'>COFFEE ROASTER</p>
      <p className="p__opensans" style={{ margin: '2rem 0' }}></p>
      {/* <button type='button' className="custom__button">Explore Menu</button> */}
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
