import React from 'react';
import { MenuItem, SubHeading } from '../../components';

import { images, data } from '../../constants'

import './Staff.css';

const Staff = () => (
    <div className='app__specialMenu flex__center section__padding'     >
        <div className="app__specialMenu-title">
            <SubHeading title='Testimony' />
            <h1 className="headtext__cormorant">
                Good Staff
            </h1>
        </div>
        <div className="app__staff-wrap">
            <ul className="app__staff-wrapper">
                <li className="app__one-staff">
                    <div className="app__staff-image">
                        <img src={images.messi} alt="Staff img" />
                    </div>
                    <div className="app__staff-content">
                        <img src={images.quote} alt="Quote" />
                        <div className="app__staff-content_quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </div>
                        <div className="app__staff-content_sign">
                            Wade Warren
                        </div>
                        <p className="p__opensans p__sign">Sommelier</p>
                    </div>
                </li>
                <li className="app__one-staff">
                    <div className="app__staff-image">
                        <img src={images.messi} alt="Staff img" />
                    </div>
                    <div className="app__staff-content">
                        <img src={images.quote} alt="Quote" />
                        <div className="app__staff-content_quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </div>
                        <div className="app__staff-content_sign">
                            Wade Warren
                        </div>
                        <p className="p__opensans p__sign">Sommelier</p>
                    </div>
                </li>
                <li className="app__one-staff">
                    <div className="app__staff-image">
                        <img src={images.messi} alt="Staff img" />
                    </div>
                    <div className="app__staff-content">
                        <img src={images.quote} alt="Quote" />
                        <div className="app__staff-content_quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </div>
                        <div className="app__staff-content_sign">
                            Wade Warren
                        </div>
                        <p className="p__opensans p__sign">Sommelier</p>
                    </div>
                </li>
                <li className="app__one-staff">
                    <div className="app__staff-image">
                        <img src={images.messi} alt="Staff img" />
                    </div>
                    <div className="app__staff-content">
                        <img src={images.quote} alt="Quote" />
                        <div className="app__staff-content_quote">
                            Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.
                        </div>
                        <div className="app__staff-content_sign">
                            Wade Warren
                        </div>
                        <p className="p__opensans p__sign">Sommelier</p>
                    </div>
                </li>

            </ul>

        </div>
        <div style={{ marginTop: '15px' }}>
            <button type='button' className='custom__button'>Read More</button>
        </div>
    </div>
);

export default Staff;

