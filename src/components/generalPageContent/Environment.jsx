import React, { useEffect } from "react";
import TextLoop from "react-text-loop";
import "./Environment.style.css";

const Environment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="environmentContent">
      <div id="environmentBanner">
        <p data-cy="title" id="environmentTitle">
          Help save our bruised planet <br />
          <span id="titleEnvironmentEmphasis">install solar </span>
        </p>
        <p id="environmentSubHeader">
          ...one of the most effective ways to reduce your mucky emissions.
        </p>
        <TextLoop interval={1750}>
          <div>
            <p className="environmentalBenefits">
              Harvest infinite and clean energy from the sun
            </p>
          </div>
          <div>
            <p className="environmentalBenefits">
              Reduce your property's thirst for fossil fuels
            </p>
          </div>
          <div>
            <p className="environmentalBenefits">
              Zero climate impact once installed
            </p>
          </div>
          <div>
            <p className="environmentalBenefits">
              Shrink you carbon footprint overnight
            </p>
          </div>
        </TextLoop>
      </div>
    </div>
  );
};

export default Environment;