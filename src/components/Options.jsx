import React, { useState } from "react";

const Options = () => {
  const [timeFrame, setTimeFrame] = useState("");

  return (
    <div>
  <input name="installation_date" value={timeFrame}/>
      <button type="button" onClick={() => setTimeFrame(timeFrame + "0-3 Months")}>
        <img src="/images/dummylogo.png" />
      </button>
      <button type="button" onClick={() => setTimeFrame(timeFrame + "3-6 Months")}>
        <img src="/images/dummylogo.png" />
      </button>
    </div>
  );
};

export default Options;
