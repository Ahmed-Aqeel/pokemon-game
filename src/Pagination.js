import React from 'react'
import "./App.css"
export default function Pagination({goToNextPage,goToPrevPage}) {
  return (
    <div>
      {goToPrevPage && <button className='btn' onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button className='btn' onClick={goToNextPage}>Next</button>}

    </div>
  )
}
