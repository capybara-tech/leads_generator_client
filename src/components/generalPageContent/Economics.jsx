import React, { useEffect } from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import "./Economics.style.css";
import {
  Grid,
  Segment,
  Button,
  Image,
  Divider,
  Header,
  Icon,
} from "semantic-ui-react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Economics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [focus, setFocus] = React.useState(false);

  return (
    <div id="economicsContent">
      <div id="economicsBanner">
        <p data-cy="title" id="economicsTitle">
          Figures which <span id="titleEmphasis">won't</span>
          <br /> disappoint
        </p>
        <p id="economicsSubHeader">
          If the environmental benefits of solar panels has not convinced you,
          the seven financial ones will<span aria-label="" role="img">😃</span>. For those who have already seen
          what's what this is the icing on the <span aria-label="" role="img">🍰</span>!
        </p>
        <TextLoop interval={1750}>
          <div>
            <p className="financialBenefits">Lower energy bills</p>
          </div>
          <div>
            <p className="financialBenefits">
              Sell excess electricity to the National Grid
            </p>
          </div>
          <div>
            <p className="financialBenefits">
              Government grants and financial support are up for grabs
            </p>
          </div>
          <div>
            <p className="financialBenefits">
              Increases the value of your property
            </p>
          </div>
          <div>
            <p className="financialBenefits">
              An impressive return on investment (ROI)
            </p>
          </div>
          <div>
            <p className="financialBenefits">
              Solar panel prices have fallen by around 70% since 2010!
            </p>
          </div>
          <div>
            <p className="financialBenefits">Low maintenance</p>
          </div>
        </TextLoop>
      </div>
      <Grid verticalAlign="middle" columns={2}>
        <Grid.Row id="lowerEnergyBillsSection">
          <Grid.Column>
            <p className="titleBenefit">Save money with lower energy bills</p>
            <p className="mainCategoryContent">
              Between <span className="highlightedWord">£85-220/year</span>,
              depending where the property you are looking to turn green is
              located and a 4Kw PV system(typical for a family home). These
              <span className="highlightedWord"> chunky savings</span> come
              about as you will be meeting some of your own electricity needs.
              The amount saved monthly will be affected by:{" "}
            </p>
            <ul>
              <li>
                {" "}
                <span>
                  Whether you are large or small electricity user, don't worry
                  neither us nor our installers make judgements! If no one is at
                  home during the day a solar battery may be a good shout. This
                  will store the electricity generated, meaning that it can be
                  used during the evenings(when the sun has said goodbye){" "}
                </span>
              </li>{" "}
              <br />
              <li>
                {" "}
                <span>
                  The type of solar panels. To up electricity production you can
                  fit more panels or invest in high-efficiency ones
                </span>{" "}
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <Image id="piggyBankImg" src="/images/piggybank.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="sellToNationalGridSection">
          <Grid.Column>
            <Image
              id="sellBackToGridImg"
              src="/images/pluto-remote-working.png"
            />
          </Grid.Column>
          <Grid.Column>
            <p className="titleBenefit">Make money doing nothing!</p>
            <p className="mainCategoryContent">
              Depending on your circumstances,{" "}
              <span className="highlightedWord">
                solar panels will generate more electricity than you can use.
              </span>{" "}
              Cash in on this resource by selling it to the National Grid
              through a Smart Export Guarantee (SEG). Essentially properties
              with solar panels, low carbon and small scale carbon generators,
              are offered generous tariffs by electricity suppliers under the
              SEG for the electricity sold.
            </p>
            <p>
              Think of it as{" "}
              <span className="highlightedWord">
                state-backed income for around 25 years plus
              </span>
              , quite an investment!
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="grantsAndFinancialSupportSection">
          <Grid.Column>
            <p className="titleBenefit">
              Government schemes and financial support
            </p>
            <p className="mainCategoryContent">
              There are currently two government schemes you can take advantage
              of:{" "}
            </p>
            <ul>
              <li>
                {" "}
                <span>
                  The Smart Export Guarantee - will{" "}
                  <span className="highlightedWord">pay you</span> for excess
                  electricity which you produce and hits the National Grid
                </span>
              </li>{" "}
              <br />
              <li>
                <span>
                  The Renewable Heat Incentive - you will{" "}
                  <span className="highlightedWord">
                    receive quarterly payments over a massive 7 years
                  </span>{" "}
                  to help homeowners pay for solar thermal panels, a renewable
                  heat technology
                </span>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <Image
              id="grantsAndFinancialSupportImg"
              src="/images/grantsAndSupport.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="parallax"></div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="longtermInvestmentSection">
          <Grid.Column>
            <Image
              id="longtermInvestmentImg"
              src="/images/LongtermInvestment.png"
            />
          </Grid.Column>
          <Grid.Column>
            <p className="titleBenefit">A solid long-term investment</p>
            <p className="mainCategoryContent">
              A 3kW panel system(typically on smaller family homes) can{" "}
              <span className="highlightedWord">
                save an impressive £1,000/year
              </span>{" "}
              on electricity costs, double that for beefier systems.{" "}
            </p>
            <p className="mainCategoryContent">
              You will be{" "}
              <span className="highlightedWord">
                earning around 5.5% yearly
              </span>{" "}
              - the annual return of investment (ROI). With UK interest at
              record lows of 1%, you will receive far better returns than you
              would get by keeping the same cash in the bank.
            </p>
            <p className="mainCategoryContent">
              This return does not take into consideration the other financial
              benefits such as the increase in property prices which would smash
              this percentage through the roof!
            </p>
            <Divider horizontal>
              <Header as="h4">
                <Icon name="cogs" />
                The techy stuff
              </Header>
            </Divider>
            <p className="subContent">
              Think of ROI as the cash generated by the panels in relation to
              the initial cost of installing the solar system. So that you can
              see how we have got to the massive 5.5% figure - we calculated a
              supply and installation cost of £6,500 for the panels and
              £1,000/year saved for 25 years (the typical guarantee period for a
              solar system).
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="propertyValueSection">
          <Grid.Column>
            <p className="titleBenefit">Increase the value of your property</p>
            <p className="mainCategoryContent">
              <span className="highlightedWord">By 14% on average</span> and up
              to a massive 38% in some (lucky)regions of the UK. More than a
              whopping £16,000 of cash if you sell up.
            </p>
            <p className="mainCategoryContent">
              These are{" "}
              <span className="highlightedWord">
                figures from the Government Department of Energy and Climate
                Change
              </span>{" "}
              which found that by making energy saving improvements to your
              property such as installing solar panels, you can secure these
              punchy property price increases.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image id="propertyValueImg" src="/images/vector-creator.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="priceFallenSection">
          <Grid.Column>
            {" "}
            <Image
              id="priceFallenImg"
              floated="right"
              src="/images/pluto-presenting-chart.png"
            />
          </Grid.Column>
          <Grid.Column>
            {" "}
            <p className="titleBenefit">
              Solar panels prices - 70%(on average) cheaper than in 2010!
            </p>
            <p className="mainCategoryContent">
              As solar panels have become more popular the{" "}
              <span className="highlightedWord">
                prices have dramatically fallen.
              </span>{" "}
              The beauty of supply and demand.{" "}
            </p>
            <p className="mainCategoryContent">
              You're looking at about £6,500 for a typical 4kW solar PV system,
              for an average family home. Quite an expensive investment but you
              win when all figures are taken into consideration, not to mention
              the environmental benefits too!
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="lowMaintenanceSection">
          <Grid.Column>
            {" "}
            <p className="titleBenefit">
              Everyone's favourite - low maintenance
            </p>
            <p className="mainCategoryContent">
              Solars panels aren't like kids -{" "}
              <span className="highlightedWord">
                you don't have to constantly keep an eye on them.
              </span>{" "}
            </p>
            <p className="mainCategoryContent">
              As it frequently rains in the UK, the solar panels are kept
              sufficiently clean by nature. The panels are installed at an angle
              and have a smooth surface meaning that debris also glides straight
              off. To ensure that the panels are working at their best they
              should not be obstructed after installation.
            </p>
            <p className="mainCategoryContent">
              Solar panels are work horses, with a{" "}
              <span className="highlightedWord">
                long working life - in excess 40 years and most often come with
                a 25 year guarantee, pretty impressive!
              </span>
            </p>
          </Grid.Column>
          <Grid.Column>
            {" "}
            <Image id="lowMaintenanceImg" src="/images/kidPourWater.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment raised id="solSpanaInNumbers">
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
        <div id="conclusionEconomics">
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