import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.director} alt="Director img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title='Người sáng lập' />
      <h1 className="headtext__cormorant">Đam mê và bản lĩnh</h1>
      <div className="app__director-content">
        <div className="app__director-content-quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">GOT Specialty Coffee
            với kết quả SCA đầy
            tự hào, là động lực lớn
            lao của đội “GOT”, là
            nền tảng vững chắc để
            GOT trung thành, bền
            bỉ và
            lao động không
            ngừng nghỉ.</p>
        </div>
        <p className="p__opensans">
          Đồng thời BÙI THẾ GỐT cũng là nhà sáng lập đầy năng lượng và tâm huyết,
          không ngừng hoàn thiện mình, không chỉ bằng
          các chứng chỉ uy tín của SCA, CQI, Hala... mà
          còn bằng nụ cười chân chất bên cạnh người
          nông dân.
        </p>
      </div>
      <div className="app__director-sign">
        <p>Bui The Got</p>
        <p className='p__opensans'>Coffee roaster</p>
        <img src={images.sign} alt="Sign" />
      </div>
    </div>
  </div>
);

export default Chef;
