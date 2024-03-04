import React from "react";
import HeaderTwo from "../components/headertwo";
import Footer from "../components/footer";
import elpBg from "../assets/img/courses/elp/elp.jpg";
import englishImg from "../assets/img/courses/elp/english.jpg";
import spokenImg from "../assets/img/courses/elp/spoken.jpg";
import writingImg from "../assets/img/courses/elp/writing.jpg";
import GrammerImg from "../assets/img/courses/elp/grammer.jpg";

const DeptofElp = () => {
  return (
    <>
      <HeaderTwo />
      {/* Hero Start Start */}
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${elpBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    Department of <br />
                    ELP
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
                  src={englishImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text">
                  <a href="#" className="btn_4">
                    ELP Department
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="#">
                    <h3>English Language Program</h3>
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
                      1 Year Course
                    </p>
                  </u>
                  <p>Beginner Level (04 Months)</p>
                  <p>Intermediate Level (04 Months)</p>
                  <p>Advanced Level (04 Months)</p>
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
                  src={spokenImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    ELP Department
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="#">
                    <h3>Spoken English</h3>
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
                      4 Months Course
                    </p>
                  </u>
                  <p>VOCABULARY</p>
                  <p>PRONUNCIATION</p>
                  <p>GRAMMER</p>
                  <p>ACCENT</p>
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
                  src={writingImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    ELP Department
                  </a>
                  {/* <h4>$160.00</h4> */}
                  <a href="#">
                    <h3>English Writing &amp; Composition</h3>
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
                  <p>GRAMMER &amp; SYNTAX</p>
                  <p>SPELLING PUNCTUATION</p>
                  <p>TONE &amp; STYLE</p>
                  <p>ETHICAL WRITING</p>
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
                  src={GrammerImg}
                  className="special_img"
                  alt=""
                  height="225px"
                  width="100%"
                />
                <div className="special_cource_text" style={{ height: 302 }}>
                  <a href="#" className="btn_4">
                    ELP Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="#">
                    <h3>Basic Grammer &amp; Comprehension</h3>
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
                  <p>PARTS OF SPEECH</p>
                  <p>SENTENCE STRUCTURE</p>
                  <p>TENSES</p>
                  <p>PUNCTUATION</p>
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

export default DeptofElp;
