import React from "react";

import Link from 'next/link';

import FooterLogo from "../assets/images/logo-1-1.png";


const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="footer-widget footer-widget__about">
                  <a href="index.html">
                    <img src={FooterLogo} width="129" alt="" />
                  </a>
                  <p>
                 A Modern Place For Creating Modern Ghar Naksa <br /> buddhaengineeringconsultancy@gmail.com <br /> 9860170699 :9813486194
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="footer-widget__links-wrap">
                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Find Us On</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                    <div className="col-lg-10 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-center justify-content-sm-center">
                     <div className="footer-widget">
                      <div className="footer-widget__social">
                        <a href="https://www.facebook.com/buddhaengineering3DDesignconsultancy">
                          <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/pyaroghar/">
                          <i className="fab fa-instagram"></i>
                     </a>
                   </div>
                   </div>
                 </div>
                    </ul>
                  </div>

                  <div className="footer-widget">
                    <h3 className="footer-widget__title">Quick Links</h3>
                    <ul className="list-unstyled footer-widget__links-list">
                      <li>
                        <Link href="/Terms">Terms and conditions</Link>
                      </li>
                      <li>
                        <Link href="/Privacy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/Disclaimer">Disclaimer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Footer;

