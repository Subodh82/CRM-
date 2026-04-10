import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
         <div className="row py-3" style={{backgroundColor:"#ff8c3c", borderRadius:'0px 0px 45px 45px'}}>
            <div className="col-md-1"></div>
            <div className="col-md-1 text-center justify-content-sm-center">
                <img src="/spi.png" alt="" id='spi-logo' className='spi'/>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <h5 className='algin-item-center mt-3 pt-2 text-white fw-bold'>
                   Softpro India Computer Technologies (P) Ltd.
                </h5>
            </div>
            <div className="col-md-4">
                <p className='nitt mt-3 text-center p-2'>
                  A Company Founded by Technocrats from IIT & IET
                </p>
            </div>
            <div className="col-md-1 text-center">
              <button className="btn btn-primary rounded-pill mt-4 p-2 shadow fw-bold">
              <Link to="/Login" className="text-white text-decoration-none">
                  Login
              </Link>
            </button>
            </div>
            <div className="col-md-1"></div>
        </div>
  )
}

export default Navbar
