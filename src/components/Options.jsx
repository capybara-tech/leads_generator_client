import React, { useState } from "react";

const Options = () => {
  const [timeFrame, setTimeFrame] = useState("");

  return (
    <div>
      <input type="hidden" name="installation_date" value={timeFrame} />
      <button type="button" onClick={() => setTimeFrame("0-3 Months")}>
        <img src="/images/dummylogo.png" alt="0-3 months" />
      </button>
      <button type="button" onClick={() => setTimeFrame("3-6 Months")}>
        <img src="/images/dummylogo.png" alt="3-6 months" />
      </button>
    </div>
  );
};

export default Options