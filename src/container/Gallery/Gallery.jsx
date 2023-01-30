import React, { useRef } from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants'

import './Gallery.css';

const galleryImg = [images.nhanxanh, images.nhanxanh1, images.nhanrang, images.nhanrang1, images.cafephamay, images.cafephaphin, images.cafephingiay]

const Gallery = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center' id='album' >
      <div className="app__gallery-content">
        <SubHeading title="Ảnh nổi bật" />
        <h1 className="headtext__cormorant">Album ảnh</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>
          Những hình ảnh sản phẩm chân thật của GOT.
        </p>
        {/* <button type='button' className='custom__button'>View More</button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {
            galleryImg.map((item, index) => (
              <div className="app__gallery-images_card flex__center">
                <img src={item} alt="Gallery Img" />
                <BsInstagram className='gallery__images-icon' />
              </div>
            )
            )
          }
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );

}

export default Gallery;
