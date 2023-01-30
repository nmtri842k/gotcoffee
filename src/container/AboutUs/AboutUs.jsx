import React from 'react';
import { images } from '../../constants'
import { Link } from 'react-router-dom';

import './AboutUs.css';

const AboutUs = ({ handleAboutClick, readAboutMore, handleNaturalClick, readNaturalMore }) => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="Aboutus Img" />
      </div>
      <div className="app__aboutus-content">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">Bắt đầu từ </h1>
          <img src={images.spoon} alt="spoon" className='spoon__img' />
          <p className="p__opensans">... Cuộc gặp bất ngờ giữa ngài MARCOS ON HUANSHEAU và anh BÙI THẾ GỐT – một nghệ nhân quốc tế và một người con bản địa. Với xuất phát điểm là niềm say mê bất tận, không chỉ dành cho hạt cà phê mà họ còn cùng nhau dấn thân cho những giá trị ổn định và bền vững</p>
          <button type='button' className='custom__button' onClick={handleAboutClick}>
            <a href="#vision"> {
              !readAboutMore ? 'Xem thêm' : 'Rút gọn'
            }</a>
          </button>
        </div>
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Tìm về nguyên sinh</h1>
          <img src={images.spoon} alt="spoon" className='spoon__img' />
          <p className="p__opensans">Những đôi giày dính đầy đất đỏ của họ ngày ngày vẫn leo hết ngọn đồi này đến con dốc khác để tìm về nguồn sống tự nhiên cho cây cà phê. Nơi không có sự xuất hiện của nhà máy công nghiệp, khu đô thị sầm uất và cả nhà dân sinh. Nơi chỉ có gió nhẹ, nắng hiền đều đặn chiếu xuyên qua nhiều tầng cây cỏ. Nơi đất đỏ Bazan mãi là huyền thoại, là nguồn khoáng chất dồi dào, đặc dụng cho cây cà phê. Nơi lá, hoa và dược thảo cũng góp phần không nhỏ, tạo nên một tầng nền hữu cơ bổ dưỡng, hoà cùng độ ẩm thấm từ mạch suối ngầm mát lạnh, ươm trọn cùng từng tinh hạt Robusta.</p>
          <button type='button' className='custom__button' onClick={handleNaturalClick}>
            {
              !readNaturalMore ? 'Xem thêm' : 'Rút gọn'
            }
          </button>
        </div>
      </div>
    </div>
  );
}


export default AboutUs;
