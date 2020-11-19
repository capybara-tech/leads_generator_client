import React, { useState } from "react";
import PropertyType from "./PropertyType";
import "./InstallationDate.style.css";
import { Link as Scrolllink } from "react-scroll";
import { Grid } from "semantic-ui-react";

const InstallationDate = () => {
  const [timeFrame, setTimeFrame] = useState("");
  const components = [<PropertyType />];
  const [index, setIndex] = useState("");

  return (
    <>
      <div id="installationDate">
        <input type="hidden" name="installation_date" value={timeFrame} />
        <Grid id="installationIcons">
        <p id="moveOnToIconsOpening">
          Thank you, from now on you just have to click some icons to get a more
          accurate quote or you can choose to submit right now
        </p>
        <h3 id="questionForInstallationDate">When are you looking for <span id="installationWord">installation</span>?</h3>
          <Grid.Row relaxed columns={4}>
            <Grid.Column>
              <Scrolllink
                to="propertyType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="buttonIcons"
                  id="zeroToThreeMonthsIcon"
                  type="button"
                  onClick={() => setTimeFrame("0-3 Months")}
                >
                  <img
                    className="imgInstallationDateIcons"
                    src="/images/dummylogo.png"
                    alt="0-3 months"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="propertyType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="buttonIcons"
                  id="threeToSixMonthsIcon"
                  type="button"
                  onClick={() => setTimeFrame("3-6 Months")}
                >
                  <img
                    className="imgInstallationDateIcons"
                    src="/images/dummylogo.png"
                    alt="3-6 months"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="propertyType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="buttonIcons"
                  id="sixToTwelveMonthsIcon"
                  type="button"
                  onClick={() => setTimeFrame("6-12 Months")}
                >
                  <img
                    className="imgInstallationDateIcons"
                    src="/images/dummylogo.png"
                    alt="6-12 months"
                  />
                </button>{" "}
              </Scrolllink>
            </Grid.Column>
            <Grid.Column>
              <Scrolllink
                to="propertyType"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-40}
                duration={1500}
                onMouseDown={async (e) => {
                  setIndex(0);
                }}
              >
                <button
                  className="buttonIcons"
                  id="notSure"
                  type="button"
                  onClick={() => setTimeFrame("Not sure")}
                >
                  <img
                    className="imgInstallationDateIcons"
                    src="/images/dummylogo.png"
                    alt="Not sure"
                  />
                </button>
              </Scrolllink>
            </Grid.Column>{" "}
          </Grid.Row>
        </Grid>
        <br />
        <Scrolllink
          to="addressQuestion"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-0}
          duration={1500}
        ><button id="backToAddressQ">Back</button>
          
        </Scrolllink>
        <Scrolllink
          id="installationDateSkip"
          to="propertyType"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-40}
          duration={1500}
          onMouseDown={async (e) => {
            setIndex(0);
          }}
        ><button id="skipToPropertyTypeQ">Skip</button>
          
        </Scrolllink>
      </div>

      {components[index]}
    </>
  );
};

export default InstallationDate;
