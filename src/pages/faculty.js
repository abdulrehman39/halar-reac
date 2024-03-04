import React from "react";
import HeaderTwo from "../components/headertwo";
import Footer from "../components/footer";
import facultyImg from "../assets/img/faculty.jpg";
import FemaleImg from "../assets/img/faculty/female.png";
import ShaheerImg from "../assets/img/faculty/shaheer.jpg";
import SaadatImg from "../assets/img/faculty/saadat.jpg";
import SaqibImg from "../assets/img/faculty/saqib.jpg";
import RiazImg from "../assets/img/faculty/riaz.jpg";
import AnasImg from "../assets/img/faculty/anas.png";
import ShakoorImg from "../assets/img/faculty/shakoor.png";
import TalhaImg from "../assets/img/faculty/talha.jpg";

const FacultyHiet = () => {
  return (
    <>
      <HeaderTwo />
      {/* Hero Start Start */}
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${facultyImg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430, width: "100%" }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    Faculty
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
      {/* Faculty section Start */}
      <section className="feature_part" style={{ marginTop: "3%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Faculty Of CS/IT
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              marginTop: "-5%",
              marginBottom: "4%",
            }}
          >
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={ShaheerImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Mr. Shaheer Idrees
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Lecturer
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:shaheer.memon@halariet.com"
                      >
                        shaheer.memon@halariet.com
                      </a>
                    </p>
                    <strong>
                      BS (CS) -VU &amp; Diploma in <br />
                      3D Animation &amp; VFX (SIBA)
                    </strong>
                  </div>
                  {/* <div class="icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                 </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={FemaleImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Ms. Atiya Hassan
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Lecturer
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:atiya.hassan@halariet.com"
                      >
                        atiya.hassan@halariet.com
                      </a>
                    </p>
                    <strong>
                      BS (IT) -SALU
                      <br />
                      MS(CS/IT) Countinued (SALU)
                    </strong>
                  </div>
                  {/* <div class="icons">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
               </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={SaadatImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Mr. Saadat Memon
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Instructor (Visiting)
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:saadat.memon@halariet.com"
                      >
                        saadat.memon@halariet.com
                      </a>
                    </p>
                    <strong>BS (CS) -SALU</strong>
                  </div>
                  {/* <div class="icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                 </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={SaqibImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Mr. Syed Saqib Ali
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Instructor
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:syed.saqib@halariet.com"
                      >
                        syed.saqib@halariet.com
                      </a>
                    </p>
                    <strong>BS (CS) -SALU</strong>
                  </div>
                  {/* <div class="icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                 </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={RiazImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Engr M. Riaz Ali
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Instructor (Visiting)
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:muhammad.riaz@halariet.com"
                      >
                        muhammad.riaz@halariet.com
                      </a>
                    </p>
                    <strong>BE (EE) -SIBA</strong>
                  </div>
                  {/* <div class="icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                 </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={AnasImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Mr. Anas Qadri
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Teaching Assistant
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:anas.qadri@halariet.com"
                      >
                        anas.qadri@halariet.com
                      </a>
                    </p>
                    <strong>Diploma in I.T (SBTE)</strong>
                  </div>
                  {/* <div class="icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                 </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature_part" style={{ marginTop: "1%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Faculty Of ELP
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              marginTop: "-5%",
              marginBottom: "4%",
            }}
          >
            {/* <div class="col-sm-6 col-xl-3 align-self-center">
         <div class="single_feature_text">
            <h2>
               Awesome <br />
               Feature
            </h2>
            <p>
               Set have great you male grass yielding an yielding first their
               you're have called the abundantly fruit were man
            </p>
            <a href="#" class="btn_1">Read More</a>
         </div>
      </div> */}
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={ShakoorImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Mr. Abdul Shakoor Kalhoro
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={50}
                    >
                      Lecturer
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact:</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:abdul.shakoor@halariet.com"
                      >
                        abdul.shakoor@halariet.com
                      </a>
                    </p>
                    <strong>Master in English Linguistics (SALU)</strong>
                  </div>
                  {/* <div class="icons">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                 </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={TalhaImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Mr. Talha Bhatti
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Lecturer
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact:</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:talha.bhatti@halariet.com"
                      >
                        talha.bhatti@halariet.com
                      </a>
                    </p>
                    <strong>Master in English literature (UoK)</strong>
                  </div>
                  {/* <div class="icons">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
               </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={FemaleImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Ms. Unza Siddiqui
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Instructor (Visiting)
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "-5%" }}
                  >
                    <p style={{ color: "black" }}>
                      <strong>Contact:</strong>
                      <br />
                      <a
                        style={{ color: "black" }}
                        href="mailto:unza.siddiqui@halariet.com"
                      >
                        unza.siddiqui@halariet.com
                      </a>
                    </p>
                    <strong>MA (English) SALU</strong>
                  </div>
                  {/* <div class="icons">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
               </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="feature_part"
        style={{ marginTop: "1%", marginBottom: "1%" }}
      >
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Faculty Of VT
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              alignItems: "center",
              alignContent: "center",
              marginTop: "-5%",
              marginBottom: "4%",
              justifyContent: "center",
            }}
          >
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={FemaleImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Ms. Hafeeza Arsalan
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Lecturer (Beautician)
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "20%" }}
                  >
                    {/* <p style="color: black">
              <strong>Contact:</strong>
              <br /><a
                style="color: black"
                href="mailto:unza.siddiqui@halariet.com"
                >unza.siddiqui@halariet.com</a
              >
            </p> */}
                    <strong>Diploma in Beautician (SBTE)</strong>
                  </div>
                  {/* <div class="icons">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
               </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="single_feature">
                <div className="card-container" style={{ marginTop: 30 }}>
                  <div className="wrapper">
                    <img
                      style={{ marginTop: "12%" }}
                      src={FemaleImg}
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay={450}
                    />
                    <div
                      style={{ marginTop: "-5%" }}
                      className="title"
                      data-aos="fade-down"
                      data-aos-delay={150}
                    >
                      Ms. Sehrish Waseem
                    </div>
                    <div
                      className="place"
                      style={{ lineHeight: 1, marginTop: "-5px" }}
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Sewing Artist <br />
                      Lecturer - <br />
                      (Stitching &amp; Dress Making)
                    </div>
                  </div>
                  <div
                    className="content text-center"
                    style={{ marginTop: "6%" }}
                  >
                    {/* <p style="color: black">
              <strong>Contact:</strong>
              <br /><a
                style="color: black"
                href="mailto:unza.siddiqui@halariet.com"
                >unza.siddiqui@halariet.com</a
              >
            </p> */}
                    <strong>Diploma in VT (NANTCC)</strong>
                  </div>
                  {/* <div class="icons">
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
               </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Faculty section end */}
      <Footer />
    </>
  );
};

export default FacultyHiet;
