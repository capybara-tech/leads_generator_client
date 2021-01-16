import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Economics.style.css";
import Slider from "infinite-react-carousel";
import { Grid, Segment, Button } from "semantic-ui-react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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

  const [focus, setFocus] = React.useState(false);

  return (
    <div id="economicsContent">
      <div id="economicsBanner">
        <p data-cy="title" id="economicsTitle">
          Figures which won't
          <br /> disappoint
        </p>
        <p>
          If the environmental benefits of solar panels has not convinced you,
          the financial ones will😃. <br /> For those who have already seen
          the light this is the icing on the 🍰!
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
      <Segment id="solSpanaInNumbers">
        <Grid verticalAlign="middle" columns={4}>
          <Grid.Row>
            <Grid.Column>
              <div>
                <CountUp
                  start={focus ? 0 : null}
                  end={220}
                  duration={4}
                  redraw={true}
                  prefix={"£"}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span className="numbers" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>average lower energy bills</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <CountUp
                  start={focus ? 0 : null}
                  end={14}
                  duration={4}
                  redraw={true}
                  suffix={"%"}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span className="numbers" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>increased property price</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <CountUp
                  start={focus ? 0 : null}
                  end={5.5}
                  duration={4}
                  redraw={true}
                  suffix={"%"}
                  decimals={1}
                  decimal="."
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span className="numbers" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>

                <p>average yearly return of invest</p>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <CountUp
                  start={focus ? 0 : null}
                  end={70}
                  duration={4}
                  redraw={true}
                  suffix={"%"}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span className="numbers" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <p>price reduction since 2010</p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <div id="economicsBottomBanner">
        <div id="concultionEconomics">
          <p>It's easy, get up to three quotes now...</p>
          <Button as={Link} to={{ pathname: "/quotes" }} id="economicsButton">
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Economics;