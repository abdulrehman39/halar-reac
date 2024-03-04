import React from "react";
import instaSvg from "../assets/svg/instagram.svg";
import whatsappSvg from "../assets/svg/whatsapp.svg";
import fbSvg from "../assets/svg/facebook.svg";
import caretRight from "../assets/svg/caret-right-fill.svg";

const Footer = () => {
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" data-aos="zoom-in" data-aos-delay={150}>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5 col-sm-5 footer-contact">
                <h3>HALAR-IET</h3>
                <p>
                  <strong>Address:</strong> Miani Road, <br />
                  Near Noor Masjid,
                  <br />
                  Sukkur, Sindh 65200
                  <br />
                  <br />
                  <strong>Phone:</strong> +92 3123580828
                  <br />
                  <strong>Email:</strong> info@halariet.com
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <img src={caretRight} />
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <img src={caretRight} />
                    <a href="/About">About us</a>
                  </li>
                  {/* <li>
            <img src={caretRight} />
            <a href="#">Admission</a>
          </li> */}
                  <li>
                    <img src={caretRight} />
                    <a href="/Latest-News">Latest News</a>
                  </li>
                  <li>
                    <img src={caretRight} />
                    <a href="/Contact">Contact!</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12 footer-newsletter">
                <iframe
                  style={{ border: 0, width: "100%", height: 350 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8514328681254!2d68.863946214538!3d27.690986332818774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d5e4b67f50a9%3A0x79ffa3a99b9305f6!2sHalar%20Institute%20of%20Emerging%20Technologies%20(H-IET)!5e0!3m2!1sen!2s!4v1643282691062!5m2!1sen!2s"
                  width={600}
                  height={450}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container d-md-flex"
          style={{ paddingTop: "1rem", paddingBottom: "0.3rem" }}
        >
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright 2024
              <strong>
                <span> HALAR-IET | </span>
              </strong>
              All Rights Reserved
            </div>
            <div className="credits text-md-start text-lg-start" style={{}}>
              Designed By
              <a
                href="https://rehman-abdul.netlify.app/"
                style={{ fontSize: 14 }}
              >
                {" "}
                Development Fixture (Pvt) LTD.
              </a>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-md-0">
            <a href="https://www.facebook.com/halar.iet" className="facebook">
              <img src={fbSvg} />
            </a>
            <a href="https://www.instagram.com/halar.iet" className="instagram">
              <img src={instaSvg} />
            </a>
            <a href="https://wa.me/+923159944939" className="whatsapp">
              <img src={whatsappSvg} />
            </a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Footer;
