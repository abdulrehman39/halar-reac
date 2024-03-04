import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ChairmanImg from "../assets/img/administration/chairman.jpg";
import heroBg from "../assets/img/bg.jpg";

const ChairmanMessage = () => {
  return (
    <>
      <Header />
      {/* Hero Start Start */}
      <section
        className="breadcrumb breadcrumb_bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{ height: 430 }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    Chairman's Message
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
      {/* Admin section start */}
      <section className="learning_part" style={{ height: "min-content" }}>
        <div className="container">
          <div className="row align-items-sm-center align-items-lg-stretch align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <img
                src={ChairmanImg}
                alt="hanif memon"
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
                  Chairman
                </h5>
                <h2
                  style={{ marginBottom: "1%", fontStyle: "italic" }}
                  data-aos="fade-up"
                  data-aos-delay={150}
                >
                  Muhammad Hanif Memon
                </h2>
                <p>
                  This Institution Is The First Step Towards The Betterment Of
                  Youth Of Our Region. Providing The Best &amp; The Most
                  Advanced Education Is Our First &amp; Foremost Priority. The
                  Objective Is To Make The Students Able To Create Their Own
                  Identity In The Field That They Want To Pursue &amp; To Be
                  Able To Lead A Successful Life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Admin section end */}
      <Footer />
    </>
  );
};

export default ChairmanMessage;
