import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'

import './Master.css';

const Master = ({ handleServiceClick }) => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title='Người tiếp lửa' />
      <h1 className="headtext__cormorant">Nhiệt huyết và giỏi giang</h1>
      <div className="app__director-content">
        <div className="app__director-content-quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans"> Thành tích của ông đủ để làm “ngã mũ” tất cả
            những ai đam mê cà phê và các chuyên gia
            kinh nghiệm khác.</p>
        </div>
        <p className="p__opensans">
          Ông là chuyên gia được uỷ quyền trực tiếp từ
          SCA. Thành viên giám khảo của rất nhiều
          cuộc thi rang xay quốc tế. Và có mặt trong hội
          đồng đào tạo tại các phòng thí nghiệm cà phê
          ở Malaysia, Thái Lan, Trung Quốc và Việt
          Nam.
          Chứng nhận của ông bao trùm toàn bộ lĩnh
          vực bởi tất cả các tổ chức danh giá nhất như:
          CQI, SCAA, SCAE, SCA, SCI…
          Cùng ngắm sơ qua bảng thành tích “đầy khao
          khát” này nhé.
        </p>
      </div>
      <div className="app__director-sign">
        <p>MASCOS ON</p>
        <p className='p__opensans'>Coffee roaster</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.mater} alt="Director img" />
    </div>
    <button className='custom__button' style={{ marginTop: '2rem' }} onClick={handleServiceClick}>Dịch vụ GOT</button>
  </div>
);

export default Master;
