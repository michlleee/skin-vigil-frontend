import React from 'react';
import './AboutUsPage.css';
import { Instagram, Twitter, Facebook } from 'lucide-react';

function AboutUsPage() {
  return (
    <div className="about-container">
      
      <div className="banner">
        <img src="src/assets/aboutUs/AboutUs.png" alt="About Us Banner" />
      </div>

      <div className="content">

        <div className="contact">
          <h2>Get In Touch</h2>
          <p>
            Have questions or need assistance? We’re here to help! Feel free to reach out to us through
            any of the following channels, and our team will get back to you as soon as possible.
            Whether you have inquiries about our services, need support, or just want to learn more,
            we’re always happy to assist.
          </p>

          <div className="contact-info">
            <div className="top-info">
              <div className="info-content">
                <img src="src/assets/aboutUs/phone.png" alt="Phone" />
                <span>
                  <strong>Phone</strong><br />
                  354-187-555
                </span>
              </div>

              <div className="info-content email-info">
                <img src="src/assets/aboutUs/email.png" alt="Email" />
                <span>
                  <strong>Email</strong><br />
                  contact@yourwebsite.com
                </span>
              </div>
            </div>

            <div className="bottom-info">
              <div className="info-content">
                <img src="src/assets/aboutUs/website.png" alt="Website" />
                <span>
                  <strong>Website</strong><br />
                  www.yourwebsite.com
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

      {/* Footer */}
      <footer className="bg-[#0B2447] text-white text-center py-4 mt-auto">
      </footer>
    </div>
  );
}

export default AboutUsPage;