import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Counlayout() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('counselor')
  }
  function validate(){
    if(!localStorage.getItem('counselor')){
      toast.error("Please Login")
      navigate('/login')
    }
  }

  useEffect(()=>{
    validate();
  },[])



  return (
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

            <Link to="consenq" className='btn w-100 text-start mb-2'>
              <i className="fa-regular fa-comment-dots me-2"></i>Add Enquiries
            </Link>

            <Link to="coview" className="btn w-100 text-start mb-2">
              <i className="fa-solid fa-eye me-2"></i> Enquiry View
            </Link>

          </div>
        </div>



        <div className="col-md-9 p-3">

 <div className="row px-2 pb-3">
          <div className="col-md-12 rounded-3 shadow ms-auto d-flex justify-content-between pb-0 p-2">
            <p className='py-2 px-2 pb-0'><i className="fa-regular fa-bell"></i></p>
            {/* <p className='py-2 px-2 pb-0'><i className="fa-solid fa-circle-user"></i></p> */}
            <p className='py-2 px-2 pb-0 ' >
             <div class="dropdown">
  <button class="btn btn-outline-warning rounded-circle py-1 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="fa fa-user "></i>
  </button>
  <ul class="dropdown-menu">
    <li><Link to={'myprofile'} class="dropdown-item" href="#"><i class="fa-solid fa-user"></i> Profile</Link></li>
    <li><Link to={'changepassword'} class="dropdown-item" href="#"><i class="fa-solid fa-key"></i> Change Password</Link></li>
    <li><Link to={'/login'} class="dropdown-item" onClick={()=>{
      logout()
      toast.success("Logout Success");
    }}  href="#"> <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout </Link></li>
  </ul>
</div>
            </p>

{/* Modal */}
           

          </div>
        </div>


          <Outlet />
        </div>

      </div>
    </div>
    
  )
}

export default Counlayout