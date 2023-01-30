import React from 'react'
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Product.css'
const Product = ({ readProductMore, readAboutMore }) => {
    return (
        <>
            {readProductMore && readAboutMore &&
                <div>
                    <div className='app__bg app__product app__wrapper section__padding'>
                        <div className="app__wrapper_img app__wrapper_img-reverse">
                            <img className='product' src={images.PRODUCT} alt="Product" />
                        </div>
                        <div className="app__wrapper_info">
                            <SubHeading title='Sản phẩm' />
                            <h1 className="headtext__cormorant">Sản phẩm của GOT</h1>
                            <div className="app__director-content">
                                <div className="app__director-content-quote app__product-content-quote ">
                                    <img src={images.quote} alt="Quote" />
                                    <p className="p__opensans">GOT không thể kiềm nén niềm vui muốn sẻ
                                        chia cùng mọi người thành tích của cả đội GOT,
                                        đó là 2 chứng nhận mới nhất cho sản phẩm cà
                                        phê từ hạt Robusta, được thu hoạch trên vùng
                                        đất Lâm Đồng đầy tự hào của Việt Nam.
                                        Chứng nhận được cấp bởi CQI – Hiệp Hội Chất
                                        Lượng Cà Phê uy tín trên 30 năm tại Hoa Kỳ.
                                        Một lần nữa, GOT Specialty Coffee tự tin đưa
                                        đến người yêu cà phê những gì tốt nhất và
                                        thuần lành nhất.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </>
    )
}

export default Product