import React, { useState, useRef } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import './Newsletter.css';

const Newsletter = () => {
  // const [textInput, setTextInput] = useState('')
  // const handleChange = (e) => {
  //   setTextInput(e.target.value)
  // }

  // const checkEmail = (email) => {
  //   let regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  //   if (!regexEmail.test(email)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // const handleSubmit = () => {
  //   if (textInput === '') {
  //     toast.error('Vui lòng điền đầy đủ thông tin', {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //   else if (checkEmail(textInput)) {
  //     emailjs.sendForm('service_j5453tf', 'template_zwnynfl', textInput, '-GnoLdQ8y06CLWfhF')
  //       .then((result) => {
  //         console.log(result.text);
  //       }, (error) => {
  //         console.log(error.text);
  //       });
  //   }
  //   else {
  //     toast.error('Email sai định dạng', {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j5453tf",
        "template_zwnynfl",
        form.current,
        "-GnoLdQ8y06CLWfhF"
      )
      .then(
        (result) => {
          toast.success(`${result.text}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

        },
        (error) => {
          toast.error(`${error.text}`, {
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
      );

  };

  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <SubHeading title='Liên hệ qua Email' />
        <h1 className="headtext__cormorant">Subscribe To Our Email</h1>
        <p className="p__opensans">Đừng quên bản cập nhật mới nhất!</p>
      </div>
      {/* <div className="app__newsletter-input flex__center">
        <input type="email" placeholder='Nhập email của bạn' onChange={handleChange} />
        <button className='custom__button' onClick={handleSubmit}>Subcirbe</button>
      </div> */}
      <div className="app__newsletter-input flex__center">
        <form ref={form} onSubmit={sendEmail}>
          <label><p className="p__opensans">Name</p></label>
          <input type="text" name="user_name" />
          <label><p className="p__opensans">Email</p></label>
          <input type="email" name="user_email" />
          <button className='custom__button'>Sent</button>
        </form>
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
