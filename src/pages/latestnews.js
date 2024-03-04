import React from "react";
import HeaderTwo from "../components/headertwo";
import Footer from "../components/footer";
import BgImg from "../assets/img/news.jpg";

const LatestNews = () => {
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
            <div className="col-lg-12" style={{ height: 430, width: "100%" }}>
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2 data-aos="fade-down" data-aos-delay={150}>
                    Latest News
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
      {/* Gallery Section Start */}
      <section className="feature_part" style={{ marginTop: "3%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-xl-5">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Gallery
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
              marginTop: "-2%",
              marginBottom: "4%",
            }}
          >
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/magical event.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  GLIMPSE FROM "A MAGICAL EVENING OF LITERACY" | September 16,
                  2023
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.791047699689515"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/magical event2.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  GLIMPSE FROM "A MAGICAL EVENING OF LITERACY" | September 16,
                  2023
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.791047699689515"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/speech.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  SPEECH &amp; PRESENTATION SESSION | AFTERNOON BATCH | ELP |
                  SEP-2023
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.784250303702588"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/speech2.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  SPEECH &amp; PRESENTATION SESSION | AFTERNOON BATCH | ELP |
                  SEP-2023
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.784250303702588"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/orientation-elp.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  ORIENTATION SESSION | SEP - 23 ELP PROGRAM
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.781833230610962"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/mock-final.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  MOCK &amp; FINAL EXAMINATIONS | DIT/CIT &amp; ELP | AUG-23
                  <br />
                  <a
                    href="https://www.facebook.com/media/set?vanity=halar.iet&set=a.777429061051379"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/mock-final2.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  MOCK &amp; FINAL EXAMINATIONS | DIT/CIT &amp; ELP | AUG-23
                  <br />
                  <a
                    href="https://www.facebook.com/media/set?vanity=halar.iet&set=a.777429061051379"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/result.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  SUMMER SPARK 23 | RESULT ANNOUNCEMENT | All BATCHES
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.775564581237827"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="image-container">
                <img
                  src="assets/img/gallery/result2.jpg"
                  alt=""
                  width="280px"
                  height="200px"
                />
                <div className="hover-text">
                  SUMMER SPARK 23 | RESULT ANNOUNCEMENT | All BATCHES
                  <br />
                  <a
                    href="https://www.facebook.com/media/set/?vanity=halar.iet&set=a.775564581237827"
                    className="see-more-button"
                  >
                    See More<span className="arrow">➔</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section end */}
      {/* Results Section start */}
      <section className="feature_part" style={{ marginTop: "3%" }}>
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-lg-12">
              <div className="section_tittle text-center">
                {/* <p>popular courses</p> */}
                <h2 data-aos="fade-down" data-aos-delay={150}>
                  Results
                </h2>
              </div>
            </div>
            <h3 className="result-h2">Department Of CS/IT</h3>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>COURSES</th>
                    <th>Batch (3 to 5)</th>
                    <th>Batch (5 to 7)</th>
                    <th>Batch (7 to 9)</th>
                  </tr>
                </thead>
                <tbody data-aos="zoom-in" data-aos-delay={150}>
                  <tr>
                    <td>1</td>
                    <td>D.I.T</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>C.I.T</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>S.C</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="result-h2" style={{ marginTop: "5%" }}>
              Department Of ELP
            </h3>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>COURSES</th>
                    <th>Batch (3 to 5)</th>
                    <th>Batch (5 to 7)</th>
                    <th>Batch (7 to 9)</th>
                  </tr>
                </thead>
                <tbody data-aos="zoom-in" data-aos-delay={150}>
                  <tr>
                    <td>1</td>
                    <td>D.I.T</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>C.I.T</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>S.C</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="result-h2" style={{ marginTop: "5%" }}>
              Department Of VT
            </h3>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>COURSES</th>
                    <th>Batch (3 to 5)</th>
                    <th>Batch (5 to 7)</th>
                    <th>Batch (7 to 9)</th>
                  </tr>
                </thead>
                <tbody data-aos="zoom-in" data-aos-delay={150}>
                  <tr>
                    <td>1</td>
                    <td>D.I.T</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>C.I.T</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>S.C</td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                    <td>
                      <a className="table-a" href="/Latest-News">
                        Result
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* Results Section end */}
      <Footer />
    </>
  );
};

export default LatestNews;
