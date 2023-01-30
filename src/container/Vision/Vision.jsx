import React from 'react'
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Vision.css';

const Vision = ({ readVisionMore, readAboutMore }) => {
    return (
        <>
            {readVisionMore && readAboutMore &&
                <div className='app__vision app__wrapper section__padding' id='vision'>
                    <div className="app__wrapper_img">
                        <img className='tamnhin' src={images.tamnhin} alt="Tầm nhìn" />
                    </div>
                    <div className="app__wrapper-info app__wrapper-vision">
                        <SubHeading title='Tầm nhìn và sứ mệnh ' />
                        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Tầm nhìn</h1>
                        <p className="p__opensans">GOT Specialty Coffee – hình thành một hệ sinh thái cà phê thuần tự nhiên trên đất Việt.</p>
                    </div>

                </div>
            }

        </>
    )
}

export default Vision