import React from "react";

import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const RadioButtonGroup = ({category, handleRadioChange}) => {
  return (
    <div className="Box-f">
      <RadioGroup
        aria-labelledby="demo-error-radios"
        name="categoryFilter"
        value={category}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="ALL_EVENTS"
          control={<Radio />}
          checked={category === "ALL_EVENTS"}
          className="RadioCategory"
          label="All Events"
        />
        <FormControlLabel
          value="WEBINAR"
          control={<Radio />}
          className="RadioCategory"
          label="Webinar"
        />
        <FormControlLabel
          value="WORKSHOP"
          control={<Radio />}
          className="RadioCategory"
          label="Workshops"
        />
        <FormControlLabel
          value="BOOTCAMP_EVENT"
          control={<Radio />}
          className="RadioCategory"
          label="Bootcamp Events"
        />
        <FormControlLabel
          value="CODING_EVENT"
          control={<Radio />}
          className="RadioCategory"
          label="Coding Events"
        />
      </RadioGroup>
    </div>
  );
}

export default RadioButtonGroup;
