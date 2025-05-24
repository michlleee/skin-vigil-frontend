import React from 'react';
import './AboutUsPage.css';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import emailIcon from '../../assets/aboutUs/email.png'
import phoneIcon from '../../assets/aboutUs/phone.png'
import webIcon from '../../assets/aboutUs/website.png'
import aboutUsImg from '../about/aboutUsBanner.png';

function AboutUsPage() {
  return (
    <div className="about-container">
      
      <div className="banner">
        <img src={aboutUsImg} alt="About Us Banner" />
        <h1 className="banner-title">About <span>Us</span></h1>
      </div>

      <div className="content">

        <div className="contact">
          <h2>Get In Touch</h2>
          <p>
            Have questions or need assistance? We're here to help! Feel free to reach out to us through
            any of the following channels, and our team will get back to you as soon as possible.
            Whether you have inquiries about our services, need support, or just want to learn more,
            we're always happy to assist.
          </p>

          <div className="contact-info">
            <div className="top-info">
              <div className="info-content">
                <img src={phoneIcon} alt="Phone" />
                <span>
                  <strong>Phone</strong><br />
                  354-187-555
                </span>
              </div>

              <div className="info-content email-info">
                <img src={emailIcon} alt="Email" />
                <span>
                  <strong>Email</strong><br />
                  skinvigil@gmail.com
                </span>
              </div>
            </div>

            <div className="bottom-info">
              <div className="info-content">
                <img src={webIcon} alt="Website" />
                <span>
                  <strong>Website</strong><br />
                  www.skin-vigil.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="social">
          <h2>Follow Us</h2>
          <div className="social-box">
            <div className="social-row">
              <Instagram className="insta" />
              <span>@skinvigil</span>
            </div>
            <div className="social-row">
              <Twitter className="twitter" />
              <span>@skinvigil</span>
            </div>
            <div className="social-row">
              <Facebook className="fb" />
              <span>@skinvigilofficial</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUsPage;