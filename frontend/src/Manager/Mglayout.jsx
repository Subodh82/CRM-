import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Mglayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          {/* ================= SIDEBAR ================= */}
          <div className="col-md-3 p-3 shadow vh-100">
            <div className='d-flex justify-content-center w-50'>
              <img src="/spi.png" alt="" height={'100px'} />
            </div>
            <div className="d-flex flex-column align-items-start">
         
                     <Link to='' className='btn w-100 text-start mb-2'>
                       <i className="fa-solid fa-chart-line me-2"></i> Dashboard
                     </Link>
         
                     <Link to="mgenq" className='btn w-100 text-start mb-2'>
                       <i className="fa-regular fa-comment-dots me-2"></i> Enquiries
                     </Link>
         
                     <Link to="mview" className="btn w-100 text-start mb-2">
                       <i className="fa-solid fa-users  me-2"></i>View Visitor
                     </Link>
                     
                     <Link to ={'msenq'} className='btn w-100 text-start mb-2'>
                                        <i class="fa-solid fa-phone-volume me-2"></i>
                                        Add Enquiries</Link>
                   </div>
          </div>
          
               <div className="col-md-9 p-3 ">
                   <Outlet/>
               </div>
       
        </div>
      </div>
    </>
  )
}

export default Mglayout

