import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import backSvg from "../assets/svg/back.svg";
import peopleSvg from "../assets/svg/people.svg";
import bulbSvg from "../assets/svg/lightbulb.svg";
import learningImg from "../assets/img/learning_img.png";
import courseOne from "../assets/img/courses/course-1.jpg";
import courseTwo from "../assets/img/courses/course-2.jpg";
import courseThree from "../assets/img/courses/vt/henna.jpg";
import advanceFeature from "../assets/img/advance_feature_img.png";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* Hero section start */}
      <section className="banner_part">
        <div className="container" data-aos="fade-down" data-aos-delay={100}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-6">
              <div className="banner_text">
                <div className="banner_text_iner">
                  {/* <h5>Every child yearns to learn</h5> */}
                  <h1 style={{}}>Halar Institute of Emerging Technologies</h1>
                  <p style={{ fontSize: 24, fontStyle: "italic" }}>
                    Invent Yourself
                  </p>
                  <a href="#departments" className="btn_1">
                    View Course{" "}
                  </a>
                  <a href="#" className="btn_2">
                    Get Started{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section End */}
      {/* Features section Start */}
      <section className="feature_part">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3 align-self-center">
              <div className="single_feature_text">
                <h2 data-aos="fade-right" data-aos-delay={150}>
                  Awesome <br />
                  Feature
                </h2>
                <p>
                  "Unleash the Full Potential of Your Learning Adventure with
                  Our Rich Array of Cutting-Edge Features and Resources."
                </p>
                {/* <a href="#" class="btn_1">Read More</a> */}
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    <img src={backSvg} height="35%" width="100%" />
                  </span>
                  <h4 data-aos="fade-up" data-aos-delay={150}>
                    Better Future
                  </h4>
                  <p>
                    "Skilled Mentors drive our students toward a brighter
                    future."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    <img src={peopleSvg} height="35%" width="100%" />
                  </span>
                  <h4 data-aos="fade-up" data-aos-delay={150}>
                    Qualified Trainers
                  </h4>
                  <p>
                    "Expert trainers inspire and guide our students to
                    excellence."
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="single_feature_part single_feature_part_2">
                  <span className="single_service_icon style_icon">
                    <img src={bulbSvg} height="35%" width="100%" />
                  </span>
                  <h4 data-aos="fade-up" data-aos-delay={150}>
                    Carrer Oppurtunity
                  </h4>
                  <p>
                    "Unlock career doors with our industry-connected programs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features section end */}
      {/* About section start */}
      <section className="learning_part">
        <div className="container">
          <div className="row align-items-sm-center align-items-lg-stretch">
            <div className="col-md-7 col-lg-7">
              <div
                className="learning_img"
                data-aos="fade-right"
                data-aos-delay={150}
              >
                <img src={learningImg} alt="" />
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="learning_member_text">
                <h5>About us</h5>
                <h2 data-aos="fade-up-right" data-aos-delay={150}>
                  Learning with Love and Laughter
                </h2>
                <p>
                  "At our institute, 'Learning with Love and Laughter' is more
                  than just a motto; it's our core belief. We create an engaging
                  and enjoyable learning experience where students thrive
                  academically and personally, fueled by the passion and
                  laughter that fills our classrooms."
                </p>
                {/* <ul>
<li><span class="ti-pencil-alt"></span>Him lights given i heaven second yielding seas
gathered wear</li>
<li><span class="ti-ruler-pencil"></span>Fly female them whales fly them day deep given
night.</li>
</ul> */}
                <a href="/about" className="btn_1">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section end */}
      {/* Members Section Start */}
      {/* <section class="member_counter">
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-sm-6">
      <div class="single_member_counter">
        <span class="counter">1024</span>
        <h4>Students</h4>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single_member_counter">
        <span class="counter">110</span>
        <h4>Events</h4>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single_member_counter">
        <span class="counter">32</span>
        <h4>Courses</h4>
      </div>
    </div>
    <div class="col-lg-3 col-sm-6">
      <div class="single_member_counter">
        <span class="counter">23</span>
        <h4>Instructor</h4>
      </div>
    </div>
  </div>
</div>
    </section> */}
      {/* Member Section End */}
      {/* Department Section Start */}
      <section className="special_cource padding_top mb-5" id="departments">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="section_tittle text-left">
                {/* <p>Departments</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Popular Departments
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div
                data-aos="fade-up"
                data-aos-delay={150}
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  transition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img
                  src={courseOne}
                  className="special_img"
                  alt=""
                  height="50%"
                />
                <div className="special_cource_text">
                  <a href="/CS-Dept" className="btn_4">
                    IT Department
                  </a>
                  {/* <h4>$130.00</h4> */}
                  <a href="/CS-Dept">
                    <h3>CS/IT Department</h3>
                  </a>
                  <p />
                  {/* <div class="author_info">
            <div class="author_img">
              <img src="img/author/author_1.png" alt="" />
              <div class="author_info_text">
                <p>Conduct by:</p>
                <h5><a href="#">James Well</a></h5>
              </div>
            </div>
            <div class="author_rating">
              <div class="rating">
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"><img src="img/icon/star.svg" alt="" /></a>
              </div>
              <p>3.8 Ratings</p>
            </div>
          </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div
                data-aos="fade-up"
                data-aos-delay={150}
                className="single_special_cource"
                style={{
                  WebkitTransition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img src={courseTwo} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="dept-of-elp.html" className="btn_4">
                    Literature
                  </a>
                  {/* <h4>$160.00</h4> */}
                  <a href="dept-of-elp.html">
                    <h3>English Department</h3>
                  </a>
                  <p />
                  {/* <div class="author_info">
            <div class="author_img">
              <img src="img/author/author_2.png" alt="" />
              <div class="author_info_text">
                <p>Conduct by:</p>
                <h5><a href="#">James Well</a></h5>
              </div>
            </div>
            <div class="author_rating">
              <div class="rating">
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"><img src="img/icon/star.svg" alt="" /></a>
              </div>
              <p>3.8 Ratings</p>
            </div>
          </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div
                className="single_special_cource"
                data-aos="fade-up"
                data-aos-delay={150}
                style={{
                  WebkitTransition: "0.5s",
                  border: "1px solid transparent",
                }}
              >
                <img src={courseThree} className="special_img" alt="" />
                <div className="special_cource_text">
                  <a href="dept-of-vt.html" className="btn_4">
                    Training Department
                  </a>
                  {/* <h4>$140.00</h4> */}
                  <a href="dept-of-vt.html">
                    <h3>Vocational Training</h3>
                  </a>
                  <p />
                  {/* <div class="author_info">
            <div class="author_img">
              <img src="img/author/author_3.png" alt="" />
              <div class="author_info_text">
                <p>Conduct by:</p>
                <h5><a href="#">James Well</a></h5>
              </div>
            </div>
            <div class="author_rating">
              <div class="rating">
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"
                  ><img src="img/icon/color_star.svg" alt=""
                /></a>
                <a href="#"><img src="img/icon/star.svg" alt="" /></a>
              </div>
              <p>3.8 Ratings</p>
            </div>
          </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Course Section End  */}
      {/* Advance learning start */}
      <section className="advance_feature learning_part">
        <div className="container">
          <div className="row align-items-sm-center align-items-xl-stretch">
            <div className="col-md-6 col-lg-6">
              <div className="learning_member_text">
                <h5>Advance feature</h5>
                <h2 data-aos="fade-right" data-aos-delay={150}>
                  Our Advance Educator Learning System
                </h2>
                <p>
                  "At the heart of our institution lies 'Our Advanced Educator
                  Learning System.' It's a meticulously designed framework that
                  blends cutting-edge pedagogy with technology, ensuring
                  students receive the best in contemporary education. This
                  system empowers our educators to provide personalized learning
                  experiences, fostering critical thinking and creativity, and
                  equipping students with the skills they need to excel in an
                  ever-evolving world."
                </p>
                {/* <div class="row">
          <div class="col-sm-6 col-md-12 col-lg-6">
            <div class="learning_member_text_iner">
              <span class="ti-pencil-alt"></span>
              <h4>Learn Anywhere</h4>
              <p>
                There earth face earth behold she star so made void two
                given and also our
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-12 col-lg-6">
            <div class="learning_member_text_iner">
              <span class="ti-stamp"></span>
              <h4>Expert Teacher</h4>
              <p>
                There earth face earth behold she star so made void two
                given and also our
              </p>
            </div>
          </div>
        </div> */}
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div
                className="learning_img"
                data-aos="fade-down"
                data-aos-delay={150}
              >
                <img src={advanceFeature} alt="" height="120%" style={{}} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
