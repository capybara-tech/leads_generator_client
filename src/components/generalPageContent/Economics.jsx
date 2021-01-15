import React, { useEffect } from "react";
import "./Economics.style.css";
import Slider from "infinite-react-carousel";

const Economics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    accessibility: false,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 3000,
    duration: 1000,
    initialSlide: true,
    shift: 200,
    slidesToShow: 5,
    centerPadding: 15,
    swipe: false,
    dots: true,
  };

  return (
    <div id="economicsContent">
      <div id="economicsBanner">
        <p data-cy="title" id="economicsTitle">
          Figures which won't
          <br /> disappoint
        </p>
        <p>
          If the environmental benefits of solar panels has not convinced you,
          the financial ones will :). <br /> For those than have already seen
          the light this is the icing on the cake
        </p>
      </div>
      <div id="sliderCarousel">
        <Slider {...settings}>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Lower energy bills</p>
            </div>
            <button className="cardButton">Tell me more</button>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Sell excess electricity to the National Grid</p>
            </div>
            <button className="cardButton">Tell me more</button>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Government grants and financial support are up for grabs</p>
            </div>
            <button className="cardButton">Tell me more</button>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Increases the value of your property</p>
            </div>{" "}
            <button className="cardButton">Tell me more</button>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>An impressive return on investment (ROI)</p>
            </div>
            <button className="cardButton">Tell me more</button>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Solar panel prices have fallen by around 70% since 2010!</p>
            </div>
            <button className="cardButton">Tell me more</button>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Low maintenance</p>
            </div>{" "}
            <button className="cardButton">Tell me more</button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Economics;
