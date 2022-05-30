import React from 'react'

import {
  Pagination,
} from '@mui/material'

const BottomPagination = ({responsedata, page, handleRadioChangePage}) => {
  return (
    <div>
        <Pagination
            count={responsedata.page_count}
            variant="outlined"
            page={page}
            onChange={handleRadioChangePage}
          />
    </div>
  )
}

export default BottomPagination