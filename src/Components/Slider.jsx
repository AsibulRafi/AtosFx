import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import sliderImg1 from "../assets/sliderImg1.png";
import sliderImg2 from "../assets/sliderImg2.jpg";
import sliderImg3 from "../assets/sliderImg3.jpg";
import sliderImg4 from "../assets/sliderImg4.jpg";
import sliderImg5 from "../assets/sliderImg5.jpg";
import sliderIcon1 from "../assets/sliderIcon1.png";
import sliderIcon2 from "../assets/sliderIcon2.png";
const Slider = () => {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  return (
    <section className="slider">
      <Carousel
        breakPoints={breakPoints}
        autoPlaySpeed={5000}
        enableAutoPlay={true}
      >
        <div className="slider__single">
          <div className="slider__single-content">
            <div className="slider__single-content-info">
              <h2>
                Super-fast speed in the <br />
                execution of orders, with
                <br /> millions of orders
                <br /> executed so far
              </h2>
              <hr />
              <img src={sliderIcon1} alt="icon" className="icon1" />
              <hr />
              <Link to="/" className="slider__single-content-info-btn">
                Click Here
              </Link>
            </div>
            <div className="slider__single-content-img">
              <img src={sliderImg1} alt="sliderImg" />
            </div>
          </div>
        </div>
        <div className="slider__single">
          <div className="slider__single-content row-reverse">
            <div className="slider__single-content-info">
              <h4>24 Hours By</h4>
              <hr />
              <img src={sliderIcon2} alt="icon" className="icon2" />
              <hr />
              <div className="btn-flex">
                <Link to="" className="slider__single-content-info-btn">
                  Click Here
                </Link>
                <p>For live assistance</p>
              </div>
            </div>
            <div className="slider__single-content-img">
              <img src={sliderImg2} alt="sliderImg" />
            </div>
          </div>
        </div>
        <div className="slider__single">
          <div className="slider__single-content">
            <div className="slider__single-content-info">
              <h2>
                The financial market can be
                <br /> very volatile - control it with
                <br /> our webtrader
              </h2>
              <hr />

              <Link to="/" className="slider__single-content-info-btn">
                Start Trade
              </Link>
              <hr />
            </div>
            <div className="slider__single-content-img">
              <img src={sliderImg3} alt="sliderImg" />
            </div>
          </div>
        </div>
        <div className="slider__single">
          <div className="slider__single-content">
            <div className="slider__single-content-info">
              <h2>
                The AtosFX Meta Trader Four <br />
                provides the optimal platform <br />
                for making the most out of
                <br /> Forex trading
              </h2>
              <hr />

              <Link to="/" className="slider__single-content-info-btn">
                Download Here
              </Link>
              <hr />
            </div>
            <div className="slider__single-content-img">
              <img src={sliderImg4} alt="sliderImg" />
            </div>
          </div>
        </div>
        <div className="slider__single">
          <div className="slider__single-content row-reverse">
            <div className="slider__single-content-info">
              <h2>
                TAKE ON THE MARKET WITH <br /> OUR INNOVATIVE POWERFUL
                <br /> PLATFORMS
              </h2>
              <hr />
              <div className="btn-flex">
                <Link to="" className="slider__single-content-info-btn">
                  TRY IT FOR FREE
                </Link>
                <p>
                  Trade on the go with our
                  <br /> unique mobile platform
                </p>
              </div>
              <hr />
            </div>
            <div className="slider__single-content-img">
              <img src={sliderImg5} alt="sliderImg" />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
