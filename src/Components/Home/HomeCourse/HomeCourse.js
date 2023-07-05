import React from "react";
import colorpalttes from "../../../images/Home/HomeCourse/colorpallateico.svg";
import globalico from "../../../images/Home/HomeCourse/globeicon.svg";
import ribbionico from "../../../images/Home/HomeCourse/ribbonicon.svg";
import book from "../../../images/Home/HomeCourse/book.png";
import bookone from "../../../images/Home/HomeCourse/book_one.png";
import booktwo from "../../../images/Home/HomeCourse/book_two.png";
import bookthree from "../../../images/Home/HomeCourse/book_three.png";
import bookfour from "../../../images/Home/HomeCourse/book_four.png";
import bookfive from "../../../images/Home/HomeCourse/book_five.png";
import booksix from "../../../images/Home/HomeCourse/book_six.png";
import booksonemain from "../../../images/Home/HomeCourse/courseone.png";
import bookstwomain from "../../../images/Home/HomeCourse/coursetwo.png";
import booksthreemain from "../../../images/Home/HomeCourse/coursethree.png";
import seeallarrow from "../../../images/Home/HomeCourse/seeallarrow.svg";
import { Fade, Slide } from "react-reveal";
import Link from "antd/es/typography/Link";
const HomeCourse = () => {
  return (
    <div className="coursebackgroundwrap">
      <div className="coursewrap">
        <div className="container">
          <div className="coursepart">
            <Fade left delay={100}>
              <h4>Explore Course</h4>
              <p>Ut sed eros finibus, placerat orci id, dapibus.</p>
            </Fade>
            <div className="coursemainwrap">
              <Fade left delay={100}>
                <div className="coursehead">
                  <img src={colorpalttes} alt="color palatte" />
                  <h6>Lorem Ipsum</h6>
                </div>
              </Fade>
              <div className="coursemainboxwrap">
                <Fade right delay={100}>
                  <div className="seealllink">
                    <Link className="d-flex align-items-center">
                      see all
                      <p>
                        <img src={seeallarrow} alt="see all" />
                      </p>
                    </Link>
                  </div>
                </Fade>
                <Slide up>
                  <div className="coursemainbox d-flex">
                    <div className="books">
                      <img src={book} alt="books" />
                    </div>

                    <div className="books">
                      <img src={bookone} alt="books" />
                    </div>

                    <div className="books">
                      <img src={booktwo} alt="books" />
                    </div>

                    <div className="books">
                      <img src={bookthree} alt="books" />
                    </div>

                    <div className="books">
                      <img src={bookfour} alt="books" />
                    </div>

                    <div className="books">
                      <img src={bookfive} alt="books" />
                    </div>

                    <div className="books">
                      <img src={booksix} alt="books" />
                    </div>

                    <div className="mainbooks">
                      <img src={booksonemain} alt="main book" />
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
            <div className="coursemainwrap">
              <Fade left delay={100}>
                <div className="coursehead">
                  <img src={globalico} alt="Aenean Facilisis" />
                  <h6>Aenean Facilisis</h6>
                </div>
              </Fade>
              <div className="coursemainboxwrap">
                <Fade right delay={100}>
                  <div className="seealllink">
                    <Link className="d-flex align-items-center">
                      see all
                      <p>
                        <img src={seeallarrow} alt="see all" />
                      </p>
                    </Link>
                  </div>
                </Fade>
                <Slide up>
                  <div className="coursemainbox d-flex">
                    <div className="books">
                      <img src={book} alt="books" />
                    </div>
                    <div className="books">
                      <img src={bookone} alt="books" />
                    </div>
                    <div className="books">
                      <img src={booktwo} alt="books" />
                    </div>
                    <div className="books">
                      <img src={bookthree} alt="books" />
                    </div>
                    <div className="mainbooks two">
                      <img src={bookstwomain} alt="main book" />
                    </div>
                    <div className="books">
                      <img src={bookfour} alt="books" />
                    </div>
                    <div className="books">
                      <img src={bookfive} alt="books" />
                    </div>
                    <div className="books">
                      <img src={booksix} alt="books" />
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
            <div className="coursemainwrap">
              <Fade left delay={100}>
                <div className="coursehead">
                  <img src={ribbionico} alt="Aenean Facilisis" />
                  <h6>Aenean Facilisis</h6>
                </div>
              </Fade>
              <div className="coursemainboxwrap">
                <Fade right delay={100}>
                  <div className="seealllink">
                    <Link className="d-flex align-items-center">
                      see all
                      <p>
                        <img src={seeallarrow} alt="see all" />
                      </p>
                    </Link>
                  </div>
                </Fade>
                <Slide up>
                  <div className="coursemainbox d-flex">
                    <div className="books">
                      <img src={book} alt="books" />
                    </div>
                    <div className="mainbooks three">
                      <img src={booksthreemain} alt="main book" />
                    </div>
                    <div className="books">
                      <img src={bookone} alt="books" />
                    </div>
                    <div className="books">
                      <img src={booktwo} alt="books" />
                    </div>
                    <div className="books">
                      <img src={bookthree} alt="books" />
                    </div>

                    <div className="books">
                      <img src={bookfour} alt="books" />
                    </div>
                    <div className="books">
                      <img src={bookfive} alt="books" />
                    </div>
                    <div className="books">
                      <img src={booksix} alt="books" />
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
