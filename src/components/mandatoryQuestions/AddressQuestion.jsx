import React, { useState } from "react";
import MidPageSubmitOrContinue from "./MidPageSubmitOrContinue";
import "./AddressQuestion.style.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import scriptLoader from "react-async-script-loader";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";
import { Popup, Icon } from "semantic-ui-react";

const AddressQuestion = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const components = [<MidPageSubmitOrContinue />];
  const [index, setIndex] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const searchOptions = {
    componentRestrictions: { country: ["SE"] },
  };

  if (isScriptLoaded && isScriptLoadSucceed) {
    return (
      <>
        <div id="addressQuestion">
          <input
            type="hidden"
            name="latitude"
            defaultValue="90.0000"
            value={coordinates.lat}
          />
          <input
            type="hidden"
            name="longitude"
            defaultValue="45.0000"
            value={coordinates.lng}
          />
          <input type="hidden" name="location" value={address} />

          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            searchOptions={searchOptions}
            shouldFetchSuggestions={address.length >= 2}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div id="addressQuestionDiv">
                <div id="questionForAddress">
                  <p>
                    {" "}
                    <img
                      id="addressQuestionImage"
                      src="/images/questionLogo.png"
                      alt="address question"
                    />{" "}
                    {""}Lastly, the address intend on turning green?
                  </p>
                  <input
                    id="fieldAddress"
                    onChange={(e) => setAddress(e.target.value)}
                    name="address"
                    {...getInputProps({})}
                  />
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active
                        ? "#70af85"
                        : "#fffff4",
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <button
                    id="moveOnMobile"
                    type="button"
                    onMouseDown={async (e) => {
                      setIndex(0);
                    }}
                  >
                    Move on to next section
                  </button>
        </div>
        {components[index]}
      </>
    );
  } else {
    return (
      <>
        {" "}
        <div id="addressQuestion">
          <div id="questionForAddress">
            <h3>
              Lastly the <span id="addressWord">address</span> intend on turning
              green?
            </h3>
            <Field
              id="fieldAddress"
              name="address"
              component="input"
              type="text"
              placeholder="Address"
            />
            <br />
          </div>
          <Scrolllink
            to="telephoneQuestion"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <button id="backToTelephoneQ">Back</button>
          </Scrolllink>
          <Scrolllink
            to="midPageSubmitOrContinue"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            <Popup
              trigger={<Icon size="big" name="angle right" id="nextToIconQ" />}
              content="Next question"
              inverted
              position="bottom center"
            />
          </Scrolllink>
        </div>
        ;
      </>
    );
  }
};

export default scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
])(AddressQuestion);
