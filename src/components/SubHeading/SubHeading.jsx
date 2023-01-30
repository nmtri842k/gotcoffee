import React from 'react';
import { images } from '../../constants'

const SubHeading = ({ title, active }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className={active ? 'p__active' : 'p__cormorant'}>{title}</p>
      <img src={images.spoon} className="spoon__img" />
    </div>
  );
}

export default SubHeading;
