import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleLogin = () => toast.error('Bạn không có quyền đăng nhập', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleOrder = () => toast.warning('Liên hệ chị Thọ: 0975.710.614', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo_gotnho} />
        </a>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href="#home">Trang chủ</a>
        </li>
        <li className='p__opensans'>
          <a href="#about">Tổng quan</a>
        </li>
        {/* <li className='p__opensans'>
          <a href="#menu">Menu</a>
        </li> */}
        <li className='p__opensans'>
          <a href="#awards">Giải thưởng</a>
        </li>
        {/* <li className='p__opensans'>
          <a href="#product">Product</a>
        </li> */}
        <li className='p__opensans'>
          <a href="#album">Ảnh</a>
        </li>
        <li className='p__opensans'>
          <a href="#contact">Liên hệ</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className='p__opensans' onClick={handleLogin}>Đăng nhập</a>
        <div />
        <a href="#" className='p__opensans' onClick={handleOrder}>Đặt hàng</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='app__navbar-smallscreen-links'>
                <li className='p__opensans' >
                  <a href="#home" onClick={() => setToggleMenu(false)} >Trang chủ</a>
                </li>
                <li className='p__opensans'>
                  <a href="#about" onClick={() => setToggleMenu(false)} >Tổng quan</a>
                </li>
                {/* <li className='p__opensans'>
          <a href="#menu">Menu</a>
        </li> */}
                <li className='p__opensans'>
                  <a href="#awards" onClick={() => setToggleMenu(false)} >Giải thưởng</a>
                </li>
                {/* <li className='p__opensans'>
          <a href="#product">Product</a>
        </li> */}
                <li className='p__opensans'>
                  <a href="#album" onClick={() => setToggleMenu(false)} >Ảnh</a>
                </li>
                <li className='p__opensans'>
                  <a href="#contact" onClick={() => setToggleMenu(false)} >Liên hệ</a>
                </li>
              </ul>
            </div>
          )

        }
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </nav>
  )
};

export default Navbar;
