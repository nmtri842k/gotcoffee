import React from 'react';
import { SubHeading } from '../../components';

import { images, data } from '../../constants'
import './Laurels.css';

const AwardCard = ({ awards: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#dcca87' }}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Các giải thưởng của GOT" />
      <h1 className="headtext__cormorant">Nổi bật</h1>

      <div className="app__laurels_awards">
        {data.awards.map((item, index) =>
          <AwardCard awards={item} key={item.title} />
        )}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
);

export default Laurels;
