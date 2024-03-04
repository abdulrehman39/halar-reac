import React from "react";
import HeaderTwo from "../components/headertwo";
import Footer from "../components/footer";
import BgImg from "../assets/img/bg.jpg";
import MakeupImg from "../assets/img/courses/vt/make-up.jpg";
import SewingImg from "../assets/img/courses/vt/sewing-machine.jpg";
import SelfgroomingImg from "../assets/img/courses/vt/selfgrooming.jpeg";
import hennaImg from "../assets/img/courses/vt/henna.jpg";
import facialImg from "../assets/img/courses/vt/facial.jpg";
import HairImg from "../assets/img/courses/vt/hairstyle.jpg";
import DressMakingImg from "../assets/img/courses/vt/dressmaking.jpg";
import KnittingImg from "../assets/img/courses/vt/knitting.jpg";
import BeauticianImg from "../assets/img/courses/vt/beautician.jpg";

const DeptofVt = () => {
  return (
    <>
      <HeaderTwo />
      {/* Hero Start Start */}
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    Department of <br />
                    VT
                  </h2>
                  <p data-aos="fade-up-right" data-aos-delay={150}>
                    H-IET<span>/</span>(INVENT YOURSELF)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Course Section Start */}
      <section className="special_cource padding_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={100}>
                  Courses
                </h2>
              </div>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={MakeupImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text">
                  <a href="#" className="btn_4">
                    VT Department
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="#">
                    <h3>Makeup Artist (Beautician)</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      06 Months
                    </p>
                  </u>
                  <p>HANDS-ON TRAINING</p>
                  <p>QUALIFIED INSTRUCTORS</p>
                  <p>PRACTICAL EXPERIENCE</p>
                  <p>HEALTH AND SAFETY</p>
                  <p>CERTIFICATION</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={SewingImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text">
                  <a href="#" className="btn_4">
                    VT Department
                  </a>
                  {/* <h4>$160.00</h4> */}
                  <a href="#">
                    <h3>Stitching &amp; Tailoring</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      06 Months
                    </p>
                  </u>
                  <p>PATTERN MAKING</p>
                  <p>SEWING SKILLS</p>
                  <p>FABRIC KNOWLEDGE</p>
                  <p>CUSTOMIZATION</p>
                  <p>ETHICAL PRACTICES</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ marginTop: "7%" }}
          >
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2>Short Courses</h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "-2%",
              marginBottom: "5%",
              justifyContent: "center",
            }}
          >
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={SelfgroomingImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="#">
                    <h3>Self Grooming</h3>
                  </a>
                  {/* <h4>Semester 1</h4> */}
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      3 Months Course
                    </p>
                  </u>
                  <p>PERSONAL HYGIENE</p>
                  <p>GROOMING BASICS</p>
                  <p>PERSONAL STYLING</p>
                  <p>FASHION SENSE</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={hennaImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$160.00</h4> */}
                  <a href="#">
                    <h3>Mehndi (Henna Arts)</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      3 Months Course
                    </p>
                  </u>
                  <p>HENNA BASICS</p>
                  <p>DESIGN TECHNIQUES</p>
                  <p>TOOLS &amp; MATERIALS</p>
                  <p>PRACTICE SESSIONS</p>
                  {/* <p>Self Grooming</p> */}
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ marginBottom: "3%" }}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={facialImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Facial &amp; Threading</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      2 Months Course
                    </p>
                  </u>
                  <p>FACIAL TECHNIQUES</p>
                  <p>THREADING SKILLS</p>
                  <p>SKIN DISORDERS</p>
                  <p>AFTERCARE &amp; ADVICE</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
              style={{ marginBottom: "3%" }}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={HairImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Hair Styling &amp; Cutting</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      2 Months Course
                    </p>
                  </u>
                  <p>HAIRCUT TECHNIQUES</p>
                  <p>HAIR STYLING</p>
                  <p>EQUIPMENT &amp; TOOLS</p>
                  <p>SPECIAL OCCASION STYLING</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={DressMakingImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Dress Making &amp; Embroidery</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      4 Months Course
                    </p>
                  </u>
                  <p>PATTERN MAKING</p>
                  <p>FABRIC SELECTION</p>
                  <p>EMBROIDERY BASICS</p>
                  <p>ETHNIC EMBROIDERY STYLES</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={KnittingImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Knitting &amp; Stitching</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      3 Months Course
                    </p>
                  </u>
                  <p>KNITTING TECHNIQUES</p>
                  <p>STITCHING &amp; SEWING SKILLS</p>
                  <p>NEEDLE WORK</p>
                  <p>PATTERN INTERPRETATION</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={BeauticianImg}
                  className="special_img"
                  alt=""
                  height="215px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    VT Department{" "}
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Beautician Short Course</h3>
                  </a>
                  <u style={{ color: "black" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        fontSize: "larger",
                        color: "black",
                        marginBottom: "3%",
                      }}
                    >
                      2 Months Course
                    </p>
                  </u>
                  <p>HANDS-ON TRAINING</p>
                  <p>PRACTICAL EXPERIENCE</p>
                  <p>HEALTH AND SAFETY</p>
                  <p>MAKEUP STYLES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Section End */}
      <Footer />
    </>
  );
};

export default DeptofVt;
