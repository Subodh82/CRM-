import React from 'react'
import Chpass from '../Components/Chpass'

function CounChpass() {
  return (
    <div>
      <h3>Counselor</h3>
      <Chpass id={localStorage.getItem('counselor')} role="counselor" />
    </div>
  )
}

export default CounChpass
