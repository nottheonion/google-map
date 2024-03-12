import { Input, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import { setCurrentLocation } from "../store/LocationSlice";
import { useDispatch } from "react-redux";

const AutoComplete = () => {
  const inputRef = useRef();
  const dispatch = useDispatch()

  useEffect(() => {
    const options = {
      fields: ["address_components", "geometry", "icon", "name"],
      types: ["establishment"]
    };

    const autoCompleteRef = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autoCompleteRef.addListener("place_changed", () => {
      const place = autoCompleteRef.getPlace()
      dispatch(setCurrentLocation({ 
        name: place.name, 
        coordinate: `${place.geometry.location.lat()},${place.geometry.location.lng()}`
      }))
    });
  }, []);

  return (
    <>
      <Typography>Enter address:</Typography>
      <Input inputRef={inputRef} sx={{ width: 1000 }} />
    </>
  );
};

export default AutoComplete;