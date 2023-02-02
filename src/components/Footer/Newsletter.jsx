import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Newsletter.css';

const Newsletter = () => {
  const [textInput, setTextInput] = useState('')

  const handleChange = (e) => {
    setTextInput(e.target.value)
  }



  const checkEmail = (email) => {
    let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regexEmail.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = () => {
    if (textInput === '') {
      toast.error('Vui lòng điền đầy đủ thông tin', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if (checkEmail(textInput)) {
      if (window.Email) {
        window.Email.send({
          SecureToken: "42798a29-c424-4e16-8a74-3ac877963d1e",
          Host: "smtp.elasticemail.com",
          Username: "nmtri842k@gmail.com",
          Password: "4F9406B500F8F2346CB2D3AEA29AA73EBB52",
          Port: 2525,
          To: `${textInput}`,
          // To: "devil.tri.no1@gmail.com",
          From: 'nmtri842k@gmail.com',
          Subject: "This is the subject",
          Body: "And this is the body"
        }).then(() => toast.success(`Bạn đã gửi thành công với Email ${textInput}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }))
      }
    } else {
      toast.error('Email sai định dạng', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title='Liên hệ qua Email' />
        <h1 className="headtext__cormorant">Subscribe To Our Email</h1>
        <p className="p__opensans">Đừng quên bản cập nhật mới nhất!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder='Nhập email của bạn' onChange={handleChange} />
        <button className='custom__button' onClick={handleSubmit}>Subcirbe</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
};

export default Newsletter;
