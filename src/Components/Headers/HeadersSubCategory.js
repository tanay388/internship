import React from 'react'

import {
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material'

const HeadersSubCategory = ({subCategory, handleRadioChange2}) => {
  return (
    <div>
        <div className="Box-f">
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="categoryFilter"
                value={subCategory}
                onChange={handleRadioChange2}
                style={{
                  display: "flex !important",
                  flexFlow: "row",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <FormControlLabel
                  value="Upcoming"
                  control={<Radio />}
                  checked={subCategory === "Upcoming"}
                  className="RadioCategory inline"
                  label="Upcoming"
                />
                <FormControlLabel
                  value="Archived"
                  control={<Radio />}
                  className="RadioCategory inline"
                  label="Archived"
                />
                <FormControlLabel
                  value="All Time Favorites"
                  control={<Radio />}
                  className="RadioCategory inline"
                  label="All Time Favorites"
                />
              </RadioGroup>
            </div>
    </div>
  )
}

export default HeadersSubCategory