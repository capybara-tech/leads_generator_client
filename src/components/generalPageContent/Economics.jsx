import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Economics.style.css";
import Slider from "infinite-react-carousel";
import { Grid, Segment, Button, Image } from "semantic-ui-react";
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
          the financial ones will😃. <br /> For those who have already seen the
          light this is the icing on the 🍰!
        </p>
      </div>
      <div id="sliderCarousel">
        <Slider {...settings}>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Lower energy bills</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Sell excess electricity to the National Grid</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Government grants and financial support are up for grabs</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Increases the value of your property</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>An impressive return on investment (ROI)</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Solar panel prices have fallen by around 70% since 2010!</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
          <div className="economicsCard">
            <div className="cardContent">
              <p>Low maintenance</p>
            </div>
            <div className="economicsCardBottomBanner">
              <button className="cardButton">Tell me more</button>
            </div>
          </div>
        </Slider>
      </div>
      <Grid verticalAlign="middle" columns={2}>
        <Grid.Row id="propertyValueSection">
          <Grid.Column>
            <Image
              floated="left"
              id="propertyValueImg"
              src="/images/vector-creator.png"
            />
          </Grid.Column>
          <Grid.Column>
            <p className="titleBenefit">Increase the value of your property</p>
            <p>
              By 14% on average and up to a massive 38% in some (lucky)regions
              of the UK. More than a whopping £16,000 of cash if you sell up.
              These are figures from the Government Department of Energy and
              Climate Change which found that by making energy saving
              improvements to your property such as installing solar panels, you
              can secure these punchy property price increases
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="lowerEnergyBillsSection">
          <Grid.Column>
            <p className="titleBenefit">Save money with lower energy bills</p>
            <p>
              Between £85-220 each year, depending where the property you are
              looking to turn green is located and a 4Kw PV system(typical for a
              family home). These chunky savings come about as you will be
              meeting some of your own electricity needs. The amount saved
              monthly will be affected by: Whether you are large or small
              electricity user, don't worry neither us nor our installers make
              judgements! If no one is at home during the day a solar battery
              may be a good shout. This will store the electricity generated,
              meaning that it can be used during the evenings(when the sun has
              said goodbye) The type of solar panels. To up electricity
              production you can fit more panels or invest in high-efficiency
              ones.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image
              id="piggyBankImg"
              floated="right"
              src="/images/piggybank.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="sellToNationalGridSection">
          <Grid.Column>
            <Image
              id="sellBackToGridImg"
              floated="left"
              src="/images/pluto-remote-working.png"
            />
          </Grid.Column>
          <Grid.Column>
            <p className="titleBenefit">Make money doing nothing!</p>
            <p>
              Depending on your circumstances, the solar panels will generate
              more electricity than you can use. Cash in on this resource by
              selling it to the National Grid through a Smart Export Guarantee
              (SEG). Essentially properties with solar panels, low carbon and
              small scale carbon generators, are offered generous tariffs by
              electricity suppliers under the SEG for the electricity sold.
              Think of it as state-backed income for around 25 years plus, quite
              an investment!
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="longtermInvestmentSection">
          <Grid.Column>
            <p className="titleBenefit">A solid long-term investment</p>
            <p>
              A 3kW panel system(typically on smaller family homes) can save an
              impressive £1,000/year on electricity costs, double that for
              beefier systems. You will be earning around 5.5% yearly - the
              annual return of investment (ROI). With UK interest at record lows
              of 1%, you will receive far better returns than you would get by
              keeping the same cash in the bank. The techy stuff - think of ROI
              as the cash generated by the panels in relation to the initial
              cost of installing the solar system. So that you can see how we
              have got to the massive 5.5% figure - we calculated a supply and
              installation cost of £6,500 for the panels and £1,000/year saved
              for 25 years (the typical guarantee period for a solar system).
              This return does not take into consideration the other financial
              benefits such as the increase in property prices which would smash
              this percentage through the roof!
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image
              id="longtermInvestmentImg"
              floated="left"
              src="/images/LongtermInvestment.png"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
