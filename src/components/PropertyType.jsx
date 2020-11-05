import React, { useState } from 'react'

const PropertyType = () => {
  const [propertyType, setPropertyType] = useState("");

  return (
        <div>
          <h2>What type of property?</h2>
          <input type="hidden" name="property_type" value={propertyType} />
          <button id="houseIcon" type="button" onClick={() => setPropertyType("house")}>
            <img src="/images/dummylogo.png" alt="house°" />
          </button>
          <button id="apartmentIcon" type="button" onClick={() => setPropertyType("apartment")}>
            <img src="/images/dummylogo.png" alt="apartment" />
          </button>
          <button id="terracedSemiDetachedIcon" type="button" onClick={() => setPropertyType("terraced_semi_detached")}>
            <img src="/images/dummylogo.png" alt="terraced semi detached" />
          </button>
          <button id="barnIcon" type="button" onClick={() => setPropertyType("barn")}>
            <img src="/images/dummylogo.png" alt="barn" />
          </button>
          <button id="commercialIcon" type="button" onClick={() => setPropertyType("commercial")}>
            <img src="/images/dummylogo.png" alt="commercial" />
          </button>
          <button id="agriculturalIcon" type="button" onClick={() => setPropertyType("agricultural")}>
            <img src="/images/dummylogo.png" alt="agricultural" />
          </button>
          <button id="otherPropertyIcon" type="button" onClick={() => setPropertyType("other")}>
            <img src="/images/dummylogo.png" alt="other property" />
          </button>
        </div>
  )
}

export default PropertyType