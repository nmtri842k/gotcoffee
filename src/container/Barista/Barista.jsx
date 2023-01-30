import React from 'react'
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Barista.css';

const Barista = ({ readBaristaMore, readServiceMore }) => {
    return (
        <>
            {
                readBaristaMore && readServiceMore &&
                <>
                    <div className='app__bg app__natural flex__center section__padding'>
                        <div className="app__specialMenu-title">
                            <SubHeading title='Barista' />
                            <h1 className="headtext__cormorant">
                                Để có một ly coffee trọn vị
                            </h1>
                        </div>
                        <div>
                            <ul className="app__natural-wrap">
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        01
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.gotsanpham} alt="Sản phẩm" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Coffee' active />
                                        <p className="p__opensans natural__items-p ">
                                            • Đối với mỗi cách pha khác nhau sẽ có một loại coffee khác nhau.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Mỗi loại sẽ được chế biến theo những cách khác nhau để mang lại những hương vị, mùi thơm đặc trưng
                                        </p>

                                    </div>
                                </li>
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        02
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.mayphacoffee} alt="Máy pha coffee" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Pha máy' active />
                                        <p className="p__opensans natural__items-p">
                                            • Got coffee tin tưởng và sử dụng máy pha cà phê La Marzocco Linea Mini.
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Máy này cho ra một ly coffee ngon với tỉ lệ hoàn hảo .
                                        </p>
                                        <p className="p__opensans natural__items-p">
                                            • Với 18/g coffee sẽ cho ra khoảng ± 36ml trong khoảng ± 24s .
                                        </p>
                                        {/* <p className="p__opensans natural__items-p">
                                        • Vệ sinh đồ dùng sau sơ chế.
                                    </p> */}
                                    </div>

                                </li>
                                <li className="app__natural-items">
                                    <div className="natural__items-stt">
                                        03
                                    </div>
                                    <div className="app__wrapper_img ">
                                        <img src={images.phaphin} alt="Trồng trọt chăm sóc" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Pha phin Got' active />
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
                                    <div className="app__wrapper_img app__img_last">
                                        <img src={images.phingiay1} alt="Trồng trọt chăm sóc" className='natural__items-img' />
                                    </div>
                                    <div>
                                        <SubHeading title='Pha phin giấy' active />
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
                        {/* <div style={{ marginTop: '15px' }}>
                        <button type='button' className='custom__button' onClick={handleProcessClick}>Hình ảnh</button>
                    </div> */}
                    </div>
                    {/* {
                    readProcessMore && readNaturalMore &&
                    <>
                        <div className="app__wrapper_img ">
                            <img src={images.quytrinhchebien} alt="Quy trình chế biến" className='natural__items-quytrinhchebien' />
                        </div>
                        <div style={{ marginTop: '15px' }} className='div__thugon'>
                            <button type='button' className='custom__button ' onClick={handleNaturalClick}>Thu gọn</button>
                        </div>
                    </>
                } */}
                </>

            }
        </>
    )
}

export default Barista