import React, { useEffect } from "react";
import "./Economics.style.css";
import Slider from "infinite-react-carousel";

const Economics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    accessibility: false,
    adaptiveHeight: true,
    arrows: false,
    arrowsBlock: false,
    autoplay: true,
    autoplaySpeed: 1000,
    centerPadding: 30,
    className: "hello",
    duration: 100,
    initialSlide: true,
    shift: 10,
    slidesToShow: 5,
    swipe: false,
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
      <div>
        <Slider {...settings}>
          <div>
            <h3>Lower energy bills</h3>
          </div>
          <div>
            <h3>Sell excess electricity to the National Grid</h3>
          </div>
          <div>
            <h3>Government grants and financial support are up for grabs</h3>
          </div>
          <div>
            <h3>Increases the value of your property</h3>
          </div>
          <div>
            <h3>An impressive return on investment (ROI)</h3>
          </div>
          <div>
            <h3>
              Solar panel prices have fallen by around 70% since 2010, quite a
              bargain now!
            </h3>
          </div>
          <div>
            <h3>Low maintenance</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Economics;