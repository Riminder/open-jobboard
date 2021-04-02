
import React, { useState, useEffect, useRef } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef, changeLocation) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    { types: ['geocode'] }
  );
  autoComplete.setFields(['address_component', 'geometry']);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery, changeLocation)
  );
}

async function handlePlaceSelect(updateQuery, changeLocation) {
  const addressObject = autoComplete.getPlace();
  const location = {
    text: addressObject?.address_components?.[0].long_name,
    lat: addressObject?.geometry?.location.lat(),
    lng: addressObject?.geometry?.location.lng(),
    checked: true
  }
  const query = addressObject.formatted_address;
  updateQuery(query);
  if(location.text) {
    changeLocation(location)
  }
}

function SearchLocationInput(props) {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef, props.changeLocation)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Saisir une ville"
        // value={query}
        className="input"
      />
    </div>
  );
}

export default SearchLocationInput;