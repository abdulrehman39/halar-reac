import React from "react";
import Footer from "../components/footer";
import learningImg from "../assets/img/learning_img.png";
import aboutUsImage from "../assets/img/about/about-us.jpeg";
import mission from "../assets/img/about/mission.jpg";
import HeaderTwo from "../components/headertwo";

const AboutPage = () => {
  return (
    <>
      <HeaderTwo />
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${aboutUsImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    What We Are?
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
      {/* Features section Start */}
      {/* <section class="feature_part">
    <div class="container">
<div class="row">
  <div class="col-sm-6 col-xl-3 align-self-center">
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
  </div>
  <div class="col-sm-6 col-xl-3">
    <div class="single_feature">
      <div class="single_feature_part">
        <span class="single_feature_icon"><img src="assets/img/back.svg" height="35%" width="100%" /></span>
        <h4>Better Future</h4>
        <p>
          Set have great you male grasses yielding yielding first their
          to called deep abundantly Set have great you male
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-xl-3">
    <div class="single_feature">
      <div class="single_feature_part">
        <span class="single_feature_icon"><img src="assets/img/people.svg" height="35%" width="100%" /></span>
        <h4>Qualified Trainers</h4>
        <p>
          Set have great you male grasses yielding yielding first their
          to called deep abundantly Set have great you male
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-xl-3">
    <div class="single_feature">
      <div class="single_feature_part single_feature_part_2">
        <span class="single_service_icon style_icon"><img src="assets/img/lightbulb.svg" height="35%"
            width="100%" /></span>
        <h4>Job Oppurtunity</h4>
        <p>
          Set have great you male grasses yielding yielding first their
          to called deep abundantly Set have great you male
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  </section> */}
      {/* Features section end */}
      {/* About section start */}
      <section className="learning_part">
        <div className="container">
          <div className="row align-items-sm-center align-items-lg-stretch">
            <div className="col-md-6 col-lg-6">
              <div className="learning_img">
                <img
                  src={learningImg}
                  alt=""
                  data-aos="fade-right"
                  data-aos-delay={150}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="learning_member_text">
                <h5>About Institute</h5>
                <h2
                  style={{ marginBottom: "0%" }}
                  data-aos="fade-down"
                  data-aos-delay={150}
                >
                  Halar Insitute of Emerging Technologies
                </h2>
                <p style={{ marginTop: "1%" }}>
                  A Great initiative is taken by Halar Memon Jamaat of Sukkur.
                  Which Established a Institute in November 2019.
                </p>
                {/* <h2 style="margin-top: 10%; margin-bottom: 2%; font-style: italic;">Director's Message</h2>
      <p>
        This Institution Is The First Step Towards The Betterment Of
        Youth Of Our Region. Providing The Best & The Most Advanced
        Education Is Our First & Foremost Priority. The Objective Is To
        Make The Students Able To Create Their Own Identity In The Field
        That They Want To Persue & To Be Able To Lead A Successful Life.
      </p> */}
                {/* <ul>
<li><span class="ti-pencil-alt"></span>Him lights given i heaven second yielding seas
gathered wear</li>
<li><span class="ti-ruler-pencil"></span>Fly female them whales fly them day deep given
night.</li>
</ul> */}
                {/* <a href="#" class="btn_1">Read More</a> */}
              </div>
            </div>
          </div>
          <div
            className="row align-items-sm-center align-items-lg-stretch"
            style={{ marginTop: "15%" }}
          >
            <div className="col-md-6 col-lg-6">
              <div className="learning_img">
                <img src={mission} alt="" width="100%" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="learning_member_text">
                {/* <h5>About us</h5> */}
                <h3
                  style={{ marginBottom: "2%", fontStyle: "italic" }}
                  data-aos="fade-down"
                  data-aos-delay={150}
                >
                  Vision
                </h3>
                <p>
                  Provideing The Best Education To Diverse Communities With
                  Quality Teaching, Services, Incubations &amp; Engagement.
                </p>
                <h3
                  style={{
                    marginTop: "10%",
                    marginBottom: "2%",
                    fontStyle: "italic",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  Mission
                </h3>
                <p style={{ marginBottom: "9%" }}>
                  Develop World Class Best Institution With Excellence In
                  Academic, Industry &amp; Social Exposure To Students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section end */}

      <Footer />
    </>
  );
};

export default AboutPage;
