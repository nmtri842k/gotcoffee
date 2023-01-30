import React from 'react'
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Natural.css';

const Natural = ({ readNaturalMore, handleProcessClick, handleNaturalClick, readProcessMore }) => {
    return (
        <>
            {readNaturalMore &&
                <>
                    <div className='app__bg app__natural flex__center section__padding'>
                        <div className="app__specialMenu-title">
                            <SubHeading title='Quá trình sản xuất' />
                            <h1 className="headtext__cormorant">
                                Từ tinh hạt đến trải nghiệm trọn vị
                            </h1>
                        </div>
                        <div>
                            <ul className="app__natural-wrap">
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        01
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.hinh01} alt="Trồng trọt chăm sóc" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Trồng trọt & Chăm sóc' active />
                                        <p className="p__opensans natural__items-p ">
                                            • Vùng nguyên liệu trên cao, gần rừng.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Kiểm soát dinh dưỡng đất nước theo tiêu chuẩn SCA, bằng công cụ kỹ thuật
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Phân bón hữu cơ. Không dùng thuốc bảo vệ thực vật. Làm cỏ bằng máy.
                                        </p>
                                    </div>
                                </li>
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        02
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.hinh02} alt="Trồng trọt chăm sóc" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Thu hái & Sơ Chế' active />
                                        <p className="p__opensans">• Thu hái tinh chọn bằng tay. Hạt chín đến 100%.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Dùng khay lọc hạt đồng size, đồng vị.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Làm sạch tự nhiên có kiểm soát nhiệt độ.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Vệ sinh đồ dùng sau sơ chế.
                                        </p>
                                    </div>

                                </li>
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        03
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.hinh03} alt="Trồng trọt chăm sóc" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Chế biến & Rang xay' active />
                                        <p className="p__opensans natural__items-p">
                                            • Tách vỏ và bảo quản có kiểm soát nhiệt độ.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Nghiền và Rang xay với nhiệt độ tiêu chuẩn.
                                        </p>
                                    </div>
                                </li>
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        04
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.hinh04} alt="Trồng trọt chăm sóc" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Pha chế & Cảm quan thử nếm' active />
                                        <p className="p__opensans natural__items-p">
                                            • GOT có công thức riêng cho từng cách pha.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Cupping Hương và Vị trước và sau khi pha.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Chua nhẹ, đắng nhanh, ngọt hậu... là một trong những trải nghiệm tròn đầy của GOT specialty Coffee.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{ marginTop: '15px' }}>
                            <button type='button' className='custom__button' onClick={handleProcessClick}>Hình ảnh</button>
                        </div>
                    </div>
                    {
                        readProcessMore && readNaturalMore &&
                        <>
                            <div className="app__wrapper_img ">
                                <img src={images.quytrinhchebien} alt="Quy trình chế biến" className='natural__items-quytrinhchebien' />
                            </div>
                            <div style={{ marginTop: '15px' }} className='div__thugon'>
                                <button type='button' className='custom__button ' onClick={handleNaturalClick}>Thu gọn</button>
                            </div>
                        </>
                    }
                </>
            }

        </>
    )
}

export default Natural