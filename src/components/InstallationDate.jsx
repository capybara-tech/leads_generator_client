import React, { useState } from "react";

const InstallationDate = () => {
  const [timeFrame, setTimeFrame] = useState("");

  return (
    <div>
      <h2>When are you looking for installation?</h2>
      <input type="hidden" name="installation_date" value={timeFrame} />
      <button id="zeroToThreeMonthsIcon" type="button" onClick={() => setTimeFrame("0-3 Months")}>
        <img src="/images/dummylogo.png" alt="0-3 months" />
      </button>
      <button id="threeToSixMonthsIcon" type="button" onClick={() => setTimeFrame("3-6 Months")}>
        <img src="/images/dummylogo.png" alt="3-6 months" />
      </button>
      <button id="sixToTwelveMonthsIcon"type="button" onClick={() => setTimeFrame("6-12 Months")}>
        <img src="/images/dummylogo.png" alt="6-12 months" />
      </button>
      <button id="notSure" type="button" onClick={() => setTimeFrame("Not sure")}>
        <img src="/images/dummylogo.png" alt="Not sure" />
      </button>
    </div>
  );
};

export default InstallationDate