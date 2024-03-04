import React from "react";
import Footer from "../components/footer";
import HeaderTwo from "../components/headertwo";
import building_fill from "../assets/svg/building-fill.svg";
import telephone from "../assets/svg/telephone.svg";
import envelope from "../assets/svg/envelope.svg";
import contactImg from "../assets/img/contact.jpeg";

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    How To Reach Us?
                  </h2>
                  <p data-aos="fade-up-right" data-aos-delay={150}>
                    H-IET <span>/</span>(INVENT YOURSELF)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Contact Section Start */}
      <section className="contact-section section_padding">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <div className="text-center" id="map" style={{ height: 380 }}>
              {/*  */}
              <iframe
                data-aos="zoom-out"
                data-aos-delay={150}
                height="380px"
                width="80%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8514328681254!2d68.863946214538!3d27.690986332818774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d5e4b67f50a9%3A0x79ffa3a99b9305f6!2sHalar%20Institute%20of%20Emerging%20Technologies%20(H-IET)!5e0!3m2!1sen!2s!4v1643282691062!5m2!1sen!2s"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2
                className="contact-title"
                data-aos="fade-right"
                data-aos-delay={150}
              >
                Get in Touch
              </h2>
            </div>
            <div className="col-lg-8">
              <form
                data-aos="fade-up-right"
                data-aos-delay={150}
                className="form-contact contact_form"
                id="form"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control w-100"
                        cols={30}
                        rows={9}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder="Enter Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        className="form-control"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        className="form-control"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Enter email address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        id="subject"
                        className="form-control"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    id="button"
                    className="button button-contactForm btn_1"
                    style={{ borderRadius: 50 }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div
                id="success-alert"
                className="alert alert-success alert-dismissible fade show"
                role="alert"
                style={{ display: "none" }}
              >
                <strong>Success!</strong> Message sent successfully.
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <img src={building_fill} />
                </span>
                <div className="media-body">
                  <h3 data-aos="zoom-in" data-aos-delay={150}>
                    Miani Road Near Noor Masjid,
                  </h3>
                  <p>Sukkur, Sindh, 65200</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <img src={telephone} />
                </span>
                <div className="media-body">
                  <h3 data-aos="zoom-in" data-aos-delay={150}>
                    +92 3123580828
                  </h3>
                  <p>Mon to Sat 10:00 am to 09:00 pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <img src={envelope} />
                </span>
                <div className="media-body">
                  <h3 data-aos="zoom-in" data-aos-delay={150}>
                    info@halariet.com
                  </h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      <Footer />
    </>
  );
};

export default Contact;
