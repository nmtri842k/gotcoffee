import React from 'react'
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Mission.css'
const Mission = ({ handleProductClick, readAboutMore }) => {
    return (
        <>
            {readAboutMore &&
                <div className='app__bg sapp__mission app__wrapper section__padding'>
                    <div className="app__wrapper-info">
                        <SubHeading title='Tầm nhìn và sứ mệnh ' />
                        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Sứ mệnh</h1>
                        <ul className="app__wrapper-content">
                            <li className="app__wrapper-content_item"><p className="p__opensans"> GOT Specialty Coffee - truyền cảm hứng và
                                nhận thức cho người dùng trẻ về một giá trị
                                bản địa, tinh tuý, trọn vị và tròn hương. Và mong muốn sản phẩm của GOT sẽ được biết đến trên toàn thế giới. </p> </li>
                        </ul>
                    </div>
                    <div className="app__wrapper_img ">
                        <img src={images.hoptac1} className='sumenh' alt="Giá trị cốt lõi" />
                    </div>
                    <button className='custom__button button__mission' style={{ margin: '2rem 0 0 2rem', width: '150px' }} onClick={handleProductClick} >Sản phẩm</button>
                </div>
            }

        </>
    )
}

export default Mission