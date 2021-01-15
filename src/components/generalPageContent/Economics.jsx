import React, { useEffect } from "react";
import "./Economics.style.css";

const Economics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="economicsContent">
      <div id="economicsBanner">
        <p  data-cy="title" id="economicsTitle">Figures which won't<br/> disappoint</p>
        <p>
          If the environmental benefits of solar panels has not convinced you, the financial ones will :). <br/> For those
          than have already seen the light this is the icing on the cake
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Economics;
