import React from 'react'
import { SubHeading } from '../../components';
import { images, data } from '../../constants'
import './Service.css';

const Service = ({ readServiceMore }) => {
    return (
        <>
            {
                readServiceMore &&
                <div className='app__service app__bg app__wrapper section__padding '>
                    <div className="app__wrapper_img app__service-img">
                        <img className='tamnhin' src={images.lophoc} alt="Tầm nhìn" />
                    </div>
                    <div className="app__wrapper-info app__wrapper-vision">
                        <SubHeading title='Dịch vụ' />
                        <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>TRUNG TÂM ĐÀO TẠO GOT</h1>
                        <p className="p__opensans">Với mong muốn lan toả nhiều hơn những giá trị bản địa, GOT Edu. dành hẳn một mùa trong năm
                            để tập trung đào tạo nhiều khoá học, tuân thủ giáo trình SCA từ Nhập Môn đến Chuyên Nghiệp,
                            dưới sự hướng dẫn của chuyên gia đầu ngành uy tín quốc tế - Thầy Marcos On HuanSheau. Khoá
                            học dành cho đa dạng nhiều đối tượng:</p>
                        <div className='app__wrapper-service'>
                            <ul className="app__wrapper-father">
                                <p className="p__opensans p__service">
                                    Đối tượng Nông Dân (Lộc Thành – Bảo Lâm và phụ cận)
                                </p>
                                <li className='app__wrapper-info__items'><p className="p__opensans">• Trồng và chọn giống</p></li>
                                <li className='app__wrapper-info__items'><p className="p__opensans">• Thu hái và sơ chế</p></li>
                                <li className='app__wrapper-info__items'><p className="p__opensans">• Phơi và bảo quản.</p></li>
                            </ul>
                            <ul className="app__wrapper-father">
                                <p className="p__opensans p__service">
                                    Đối tượng Thu Mua, Chủ Quán Cà Phê,
                                    Nhân Viên Pha Chế - Barista
                                </p>
                                <li className='app__wrapper-info__items'><p className="p__opensans">• Rang xay và đóng gói</p></li>
                                <li className='app__wrapper-info__items'><p className="p__opensans">• Pha chế và Cảm Quan Nếm Thử.</p></li>
                                <li className='app__wrapper-info__items'><p className="p__opensans">• Thi, tranh tài.</p></li>
                            </ul>
                        </div>
                        <p className="p__opensans p__service-light">Học viên hoàn thành sẽ được cấp chứng chỉ đạt chuẩn quốc tế SCA. </p>
                    </div>

                </div>
            }
        </>
    )
}

export default Service