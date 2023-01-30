import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import { images, data } from '../../constants'

import './Lan.css';

const Lan = ({ readServiceMore, handleBaristaClick }) => {

    return (
        <>
            {
                readServiceMore &&
                <div className='app__bg app__gotLan flex__center section__padding'>
                    <div className="app__wrapper_info">
                        <div className="app__gotLan-title">
                            <SubHeading title='Dịch vụ' />
                            <h1 className="headtext__cormorant">
                                Hoa Lan GOT
                            </h1>
                        </div>
                        <div className="app__gotLan-content">
                            <div className="app__gotLan-content-quote">
                                {/* <img src={images.quote} alt="Quote" /> */}
                                <p className="p__opensans"> Kết hợp cùng Signature Store, GOT Orchid mở
                                    cánh cửa bước vào thế giới của thiên nhiên và hoa.
                                    Ở đó, cả người trẻ và người trung niên bắt đầu được
                                    nghe và kể nhiều hơn về sự nghiệp, những chủ đề
                                    của cuộc sống, và cả những lý tưởng. </p>
                            </div>
                        </div>
                        <div className="app__wrapper_img">
                            <img src={images.gotLan} alt="Director img" />
                        </div>

                    </div>
                    <button className='custom__button' style={{ marginTop: '2rem' }} onClick={handleBaristaClick}>Barista</button>

                </div>
            }
        </>
    );
}

export default Lan;

