import React from 'react'
import logo from "../../../assets/icon/logo.png";
import instagram from "../../../assets/icon/icon_instagram.png";
import facebook from "../../../assets/icon/icon_facebook.png";
import mail from "../../../assets/icon/icon_mail.png";
import twitch from "../../../assets/icon/icon_twitch.png";
import twitter from "../../../assets/icon/icon_twitter.png";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="container footer-container mt-5 ps-sm-5">
      <div className="row">
        <div className="col-lg-3 col-md-8 footer-address mb-sm-2">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-lg-3 col-md-8 footer-nav">
          <li>
            <a href="#services">Our services</a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </div>
        <div className="col-lg-3 col-md-8 footer-sosmed">
          <p className='mb-sm-2'>Connect with us</p>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" className="ms-2" />
          <img src={twitter} alt="" className="ms-2" />
          <img src={mail}alt="" className="ms-2" />
          <img src={twitch} alt="" className="ms-2" />
        </div>
        <div className="col-lg-3 col-md-8 footer-copyright mb-5">
          <p className='mb-sm-2'>Copyright Binar 2022</p>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer