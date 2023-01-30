import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import { images, data } from '../../constants'

import './SpecialMenu.css';

const SpecialMenu = ({ readProductMore, handleCompactClick, readAboutMore }) => {
  return (
    <>
      {readProductMore && readAboutMore &&
        <div className='app__bg app__specialMenu flex__center section__padding' id='menu'>
          <div className="app__specialMenu-title">
            <SubHeading title='Các sản phẩm của GOT' />
            <h1 className="headtext__cormorant">
              SẢN PHẨM ĐẶC TRƯNG
            </h1>
          </div>
          <div className="app__introduce-specialMenu">
            <p className="p__opensans">Ngoài ra, những ai đã tin yêu GOT Specialty Coffee còn nhìn thấy nhiều sự khác biệt ở
              GOT:
              Việc kiểm soát toàn bộ quy trình trồng và
              thu hái theo SCA đã giúp GOT thu được rất
              nhiều tinh hạt đồng chín, đồng size và đồng
              hương vị.
              Với từng loại tinh hạt, kết hợp với từng cách
              sơ chế, rang xay và pha chế đặc trưng. GOT
              thật sự
              tối ưu hoá cả Vị lẫn Hương.
              Trải nghiệm nếm thử cà phê tại GOT là trải
              nghiệm gần như cá nhân hoá, bạn sẽ khám
              phá ra chín “gu” cà phê của mình.
            </p>
            <ul className="p__content"> <p className="p__opensans">GOT Specialty Coffee hiện có 3 dòng rang xay: </p>
              <li className="p__content-item">
                <p className="p__opensans">
                  • Hương Vị Bá Tước
                </p>
              </li>
              <li className="p__content-item">
                <p className="p__opensans">
                  • Hương Vị Hoàng Gia
                </p>
              </li>
              <li className="p__content-item">
                <p className="p__opensans">
                  • Sự lựa chọn của Barista
                </p>
              </li>
            </ul>
          </div>
          <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine flex__center">
              <p className='app__specialMenu-menu_heading'>Coffee</p>
              <div className="app__specialMenu-menu_items">
                {data.coffee.map((item, index) => (
                  <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
                ))}
              </div>
            </div>

            <div className="app__specialMenu-menu_img">
              <img src={images.gotsanpham} alt="menu img" />
            </div>

            <div className="app__specialMenu-menu_cocktail flex__center">
              <p className='app__specialMenu-menu_heading'>Tea</p>
              <div className="app__specialMenu-menu_items">
                {data.tea.map((item, index) => (
                  <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '15px' }}>
            <button type='button' className='custom__button' onClick={handleCompactClick}>Rút gọn</button>
          </div>

        </div>
      }
    </>

  );
}

export default SpecialMenu;
