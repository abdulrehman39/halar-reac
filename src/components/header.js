import React from "react";
import logo from "../assets/img/logo/logo.png";

const Header = () => {
  return (
    <>
      {/* Header start */}
      <header className="main_menu home_menu hide-navbar" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                {/* <a class="navbar-brand logo_1" href="index.html">
        <img src="assets/img/logo-1.png" alt="logo" height="40px" width="150px" />
      </a>
      <a class="navbar-brand logo_2" href="index.html">
        <img src="assets/img/logo.png" alt="logo" height="40px" />
      </a>   */}
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="logo" height="40px" width="150px" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse main-menu-item justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center justify-content-center">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="/About">
                          What We Are?
                        </a>
                        <a className="dropdown-item" href="/Chairman">
                          Chairman's Message
                        </a>
                        <a className="dropdown-item" href="/Director">
                          Director's Message
                        </a>
                        <a className="dropdown-item" href="/Faculty">
                          Faculty of <br />
                          H-IET
                        </a>
                        <a className="dropdown-item" href="/Administration">
                          Administration
                        </a>
                      </div>
                    </li>
                    {/* <li class="nav-item">
              <a class="nav-link" href="#">Admission</a>
            </li> */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Departments
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="/CS-Dept">
                          Department of <br />
                          CS/Information Technology
                        </a>
                        <a className="dropdown-item" href="/ELP-Dept">
                          Department of <br />
                          English Language Program
                        </a>
                        <a className="dropdown-item" href="/VT-Dept">
                          Department of <br />
                          Vocational Training
                        </a>
                      </div>
                    </li>
                    {/* <li class="nav-item">
            <a class="nav-link" href="blog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Events.html">Events</a>
          </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="/Latest-News">
                        Latest News!
                      </a>
                    </li>
                    {/* <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                     </a>
                     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="single-blog.html">Single blog</a>
                        <a class="dropdown-item" href="elements.html">Elements</a>
                     </div>
                  </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="/Contact">
                        Contact
                      </a>
                    </li>
                    {/* <li class="nav-item dropdown d-sm-block d-lg-block">
            <a class="nav-link dropdown-toggl" href="" id="navbarDropdown" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <button class="btn_1" href="#">E-Portal</button>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href=""><button class="btn_2" style="padding: 5px 20px;" id="form-open" href="#">Student-Portal</button></a>
              <a class="dropdown-item" href=""><button class="btn_2" style="padding: 5px 20px;" id="form-open" href="#">Teachers-Portal</button></a>
            </div>
          </li> */}
                    <li className="d-sm-block d-lg-block">
                      <button
                        className="btn_1"
                        style={{ padding: "8px 15px", fontSize: 13 }}
                        id="student-form-open"
                        href="#"
                      >
                        Student-Portal
                      </button>
                    </li>
                    <li className="d-sm-block d-lg-block">
                      <button
                        className="btn_2"
                        style={{
                          padding: "8px 15px",
                          marginLeft: 20,
                          marginRight: "-43px",
                          fontSize: 13,
                        }}
                        id="teacher-form-open"
                        href="#"
                      >
                        Teacher-Portal
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header end */}
    </>
  );
};

export default Header;
