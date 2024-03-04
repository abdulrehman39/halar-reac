import React from "react";
import HeaderTwo from "../components/headertwo";
import Footer from "../components/footer";
import CsBgImg from "../assets/img/courses/cs/cs.jpg";
import DitImg from "../assets/img/courses/cs/dit.jpg";
import CitImg from "../assets/img/courses/cs/cit.jpg";
import OfficeImg from "../assets/img/courses/cs/office.jpg";
import WddImg from "../assets/img/courses/cs/wdd.jpg";
import GraphicsImg from "../assets/img/courses/cs/graphics.jpg";
import FullStackImg from "../assets/img/courses/cs/fullstack.jpg";
import FullStackWebImg from "../assets/img/courses/cs/webfull.jpg";
import PhythonImg from "../assets/img/courses/cs/phython.jpg";
import FreelancingImg from "../assets/img/courses/cs/freelancing.jpg";
import UiuxImg from "../assets/img/courses/cs/ui-ux.jpg";

const DeptofCs = () => {
  return (
    <>
      <HeaderTwo />
      {/* Hero Start Start */}
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${CsBgImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    Department of <br />
                    CS / IT
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
                  src={DitImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text">
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="#">
                    <h3>Diploma in Information Technology</h3>
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
                      Semester 1
                    </p>
                  </u>
                  <p>Office Automation</p>
                  <p>ICT</p>
                  <p>Web Design and Development</p>
                  <p>C Language</p>
                  <p>Operating System</p>
                  {/* <div class="author_info">
            <div class="author_img">
              <img src="img/author/author_1.png" alt="">
              <div class="author_info_text">
                <p>Conduct by:</p>
                <h5><a href="#">James Well</a></h5>
              </div>
            </div>
            <div class="author_rating">
              <div class="rating">
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/star.svg" alt=""></a>
              </div>
              <p>3.8 Ratings</p>
            </div>
          </div> */}
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
                  src={DitImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text">
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$160.00</h4> */}
                  <a href="#">
                    <h3>Diploma in Information Technology</h3>
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
                      Semester 2
                    </p>
                  </u>
                  <p>A+ Hardware Maintenance</p>
                  <p>Data Communication &amp; Networking</p>
                  <p>Desktop Publishing</p>
                  <p>Database Management System</p>
                  <p>Live Project</p>
                  {/* <div class="author_info">
            <div class="author_img">
              <img src="img/author/author_2.png" alt="">
              <div class="author_info_text">
                <p>Conduct by:</p>
                <h5><a href="#">James Well</a></h5>
              </div>
            </div>
            <div class="author_rating">
              <div class="rating">
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/star.svg" alt=""></a>
              </div>
              <p>3.8 Ratings</p>
            </div>
          </div> */}
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
                  src={CitImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text">
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Certificate in Information Technology</h3>
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
                      6 Month Course
                    </p>
                  </u>
                  <p>Office Automation</p>
                  <p>ICT</p>
                  <p>Web Design and Development</p>
                  <p>C Language</p>
                  <p>Operating System</p>
                  {/* <div class="author_info">
            <div class="author_img">
              <img src="img/author/author_3.png" alt="">
              <div class="author_info_text">
                <p>Conduct by:</p>
                <h5><a href="#">James Well</a></h5>
              </div>
            </div>
            <div class="author_rating">
              <div class="rating">
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/color_star.svg" alt=""></a>
                <a href="#"><img src="img/icon/star.svg" alt=""></a>
              </div>
              <p>3.8 Ratings</p>
            </div>
          </div> */}
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
                  src={OfficeImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="#">
                    <h3>Office Automation</h3>
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
                  <p>MS WORD</p>
                  <p>MS EXCEL</p>
                  <p>MS POWER POINT</p>
                  <p>INTERNET</p>
                  <p />
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
                  src={WddImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$160.00</h4> */}
                  <a href="#">
                    <h3>Web Designing &amp; Development</h3>
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
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>BOOTSTRAP</p>
                  <p>PHP/JAVASCRIPT</p>
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
                  src={GraphicsImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Graphics Designing</h3>
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
                  <p>ADOBE PHOTOSHOP CC</p>
                  <p>ADOBE ILLUSTRATOR CC</p>
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
                  src={FullStackImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Full Stack Software Development</h3>
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
                      04 Months
                    </p>
                  </u>
                  <p>.NET</p>
                  <p>C#</p>
                  <p>SQL</p>
                  <p>Reporting</p>
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
                  src={FullStackWebImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Full Stack Web Development</h3>
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
                      04 Months Course
                    </p>
                  </u>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JAVASCRIPT</p>
                  <p>REACT &amp; MANGO DB</p>
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
                  src={PhythonImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Phython (Basic To Advance)</h3>
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
                      4 Months
                    </p>
                  </u>
                  <p>VERSATILITY</p>
                  <p>SIMPLE SYNTAX</p>
                  <p>LIBRARIES</p>
                  <p>DATA VISUALIZATION</p>
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
                  src={FreelancingImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Freelancing</h3>
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
                      1 Months Course
                    </p>
                  </u>
                  <p>FLEXIBILITY</p>
                  <p>DIVERSE OPPORTUNITIES</p>
                  <p>GLOBAL REACH</p>
                  <p>SKILL DEVELOPMENT</p>
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
                  src={UiuxImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>UI/UX Designing</h3>
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
                      1 Months Course
                    </p>
                  </u>
                  <p>STRATEGY</p>
                  <p>SCOPE</p>
                  <p>STRUCTURE</p>
                  <p>SKELETON</p>
                  <p>SURFACE</p>
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

export default DeptofCs;
