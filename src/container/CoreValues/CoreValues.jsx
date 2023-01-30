import React from 'react'
import { SubHeading } from '../../components';

import { images, data } from '../../constants'

const CoreValues = ({ readAboutMore, handleVisionClick, ...props }) => {

    return (
        <>
            {readAboutMore &&
                <div className='app__bg app__wrapper section__padding' id='contact'>
                    <div className="app__wrapper-info">
                        <SubHeading title='Giá trị và sứ mệnh ' />
                        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Giá trị cốt lõi</h1>
                        <ul className="app__wrapper-content">
                            <li className="app__wrapper-content_item"><p className="p__opensans"> Ngon nhất từ Tự Nhiên </p> </li>
                            <li className="app__wrapper-content_item"><p className="p__opensans">Tiêu chuẩn xác tín SCA</p></li>
                            <li className="app__wrapper-content_item"><p className="p__opensans">Ổn định</p></li>
                            <li className="app__wrapper-content_item"><p className="p__opensans">Bền vững</p></li>
                            <li className="app__wrapper-content_item"><p className="p__opensans">Sẻ chia và lan toả</p></li>
                        </ul>
                    </div>
                    <div className="app__wrapper_img">
                        <img src={images.giatricotloi} alt="Giá trị cốt lõi" />
                    </div>
                    <button className='custom__button' style={{ marginTop: '2rem' }} onClick={handleVisionClick}>Tầm nhìn</button>
                </div>
            }

        </>
    )
}

export default CoreValues