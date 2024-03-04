import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import heroBg from "../assets/img/bg.jpg";
import administratorImg from "../assets/img/administration/administrator.jpg";
import FemaleImg from "../assets/img/administration/female.png";
import MudassirImg from "../assets/img/administration/mudassir.jpg";

const Administration = () => {
  return (
    <>
      <Header />
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>Administration</h2>
                  <p>
                    H-IET<span>/</span>(INVENT YOURSELF)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Admin section start */}
      <section className="learning_part" style={{ height: "min-content" }}>
        <div className="container">
          <div className="row align-items-sm-center align-items-lg-stretch align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <img
                src={administratorImg}
                alt="nabeel memon"
                width="335px"
                height="355px"
                className="admin_img"
                style={{
                  transition: "0.3s",
                  borderRadius: "10px",
                  boxShadow: "2px 2px 20px #a1a1a1",
                  transform: "scale(0.99)",
                  transition: "0.9s",
                }}
                onMouseOver={(e) => {
                  // Access the target element using event parameter
                  e.target.style.borderRadius = "15px";
                  e.target.style.boxShadow = "10px 10px 20px #8a8787";
                  // You can also add other hover styles here
                }}
                onMouseOut={(e) => {
                  // Access the target element using event parameter
                  e.target.style.borderRadius = "10px";
                  e.target.style.boxShadow = "2px 2px 20px #a1a1a1";
                  // You can revert other styles to their initial values here
                }}
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="learning_member_text">
                <h5 style={{ fontWeight: "bold", marginTop: "7%" }}>
                  ADMINISTRATOR
                </h5>
                <h2
                  style={{ marginBottom: "1%", fontStyle: "italic" }}
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  Engr. Nabeel Ahmed
                </h2>
                {/* <p>
          This Institution Is The First Step Towards The Betterment Of
          Youth Of Our Region. Providing The Best & The Most Advanced
          Education Is Our First & Foremost Priority. The Objective Is To
          Make The Students Able To Create Their Own Identity In The Field
          That They Want To Persue & To Be Able To Lead A Successful Life.
        </p> */}
                <h6 style={{ marginTop: "10%" }}>
                  Contact:
                  <a href="mailto:admin@halariet.com"> admin@halariet.com</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admin section end */}
      {/* office section Start */}
      <section className="feature_part" style={{ marginTop: "-3%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Office Bearer
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
                      Ms. Aisha Hassan
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={50}
                    >
                      Assistant Admin &amp; Accounts
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
                        href="mailto:aisha.hassan@halariet.com"
                      >
                        aisha.hassan@halariet.com
                      </a>
                    </p>
                    <strong>BBA (Finance) -SALU</strong>
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
                      src={MudassirImg}
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
                      Mr. M. Mudassir
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Program Officer
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
                        href="mailto:muhammad.mudassir@halariet.com"
                      >
                        muhammad.mudassir@halariet.com
                      </a>
                    </p>
                    <strong>BS (Aerospace Science) -IST</strong>
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
                      Ms. Qurat-ul-ain
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      FDO
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
                        href="mailto:qurat.saleem@halariet.com"
                      >
                        qurat.saleem@halariet.com
                      </a>
                    </p>
                    <strong>ADS (Science) -SALU</strong>
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
      {/* office section end */}
      {/* examination section start */}
      <section className="feature_part" style={{ marginTop: "0%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2>
                  Director <br />
                  Examination's
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
                      Controller Of Examination
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
                      src={MudassirImg}
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
                      Mr. M. Mudassir
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Ass: Controller Of Examination
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
                        href="mailto:muhammad.mudassir@halariet.com"
                      >
                        muhammad.mudassir@halariet.com
                      </a>
                    </p>
                    <strong>BS (Aerospace Science) -IST</strong>
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
      {/* examination section end */}
      {/* Admission section start */}
      <section className="feature_part" style={{ marginTop: "0%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2>
                  Director <br />
                  Admission's
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
                      Ms. Aisha Hassan
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={50}
                    >
                      Admission Officer (Morning)
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
                        href="mailto:aisha.hassan@halariet.com"
                      >
                        aisha.hassan@halariet.com
                      </a>
                    </p>
                    <strong>BBA (Finance) -SALU</strong>
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
                      Ms. Qurat-ul-ain
                    </div>
                    <div
                      className="place"
                      data-aos="fade-up"
                      data-aos-delay={150}
                    >
                      Admission Officer (Evening)
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
                        href="mailto:qurat.saleem@halariet.com"
                      >
                        qurat.saleem@halariet.com
                      </a>
                    </p>
                    <strong>ADS (Science) -SALU</strong>
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
      {/* examination section end */}
      <Footer />
    </>
  );
};

export default Administration;
