import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
 

function Adlayout() {

   const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('admin')
    navigate('/login');
  }
  function validate() {
    if (!localStorage.getItem('admin')) {
      navigate('/login');
    }

  }

  useEffect(() => {
    validate();

  }, [])

  
  return (
    // <div>
    //   <div className="container-fluid">

    //     <div className="row bb py-3">
    //       <div className="col-md-3 d-flex gap-3">


    //         <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    //           <i className="fa-solid fa-bars"></i>
    //         </button>

    //         <div className="offcanvas offcanvas-start" data-bs-backdrop="true" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
    //           <div className="offcanvas-header">
    //             <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
    //             <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //           </div>
    //           <div className="offcanvas-body">
    //             <div>
    //               <div className="d-flex justify-content-center">
    //                  <img src="/spi.png" style={{height:'110px'}}/>
    //               </div>
                 
    //               <Link to={''} >DashBoard</Link>
    //               <br />
    //               <Link to={'viewenq'} >View Enq</Link>
    //               <br />
    //               <Link to={'center'} >Center</Link>
    //               <br />
    //               <Link to={'visit'}>View Visitor</Link>
    //               <br />
    //               <Link to={'user'}>User</Link>
    //               <br />
    //               <Link to ={'adenqu'}>Add Enquiries</Link>
    //             </div>
    //           </div>
    //         </div>


    //         <i className="fa-solid fa-bell mt-2"></i>
    //       </div>

    //       <div className="col-md-8 d-flex justify-content-end">

            
    //       </div>
    //     </div>



    //     <Outlet />

    //   </div>
    // </div>


      // <div className="container-fluid">
      //     <div className="row">
      //       <div className="col-md-3 p-3 shadow vh-100">
      //         <div className='d-flex justify-content-center w-50'>
      //           <img src="/spi.png" alt="" height={'100px'} />
      //         </div>
    
    
      //         <div className="d-flex flex-column align-items-start">
      //            <Link to={''} className='btn w-100 text-start mb-2'>
      //            <i className="fa-solid fa-chart-line me-2"></i>
      //            DashBoard</Link>
                 
      //              <Link to={'center'} className='btn w-100 text-start mb-2'>
      //              <i class="fa-solid fa-building me-2"></i>
      //              Center</Link>
                  
      //               <Link to={'user'} className='btn w-100 text-start mb-2'>
      //               <i class="fa-solid fa-user me-2"></i>
      //               User</Link>
                   
      //              <Link to={'viewenq'} className='btn w-100 text-start mb-2'>
      //              <i class="fa-regular fa-comment-dots me-2"></i>
      //              Enquiries</Link>
                  
      //              <Link to={'visit'} className='btn w-100 text-start mb-2'>
      //              <i class="fa-solid fa-users me-2"></i>
      //               Visitor</Link>

      //              <Link to ={'adenqu'} className='btn w-100 text-start mb-2'>
      //              <i class="fa-solid fa-phone-volume me-2"></i>
      //              Add Enquiries</Link>
    
      //         </div>
      //       <button className='btn bg-danger text-white ms-2' onClick={logout}>Logout</button>
      //       </div>
    
      //       <div className="col-md-9 p-3" style={{height:"100vh",overflow:"auto"}}>
      //         <Outlet />
      //       </div>
    
      //     </div>
      //   </div>

      <div className="container-fluid">
      <div className="d-md-none p-2 shadow">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileSidebar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className="row">

        <div className="col-md-3 p-3 shadow vh-100 d-none d-md-block">

          <div className='d-flex justify-content-center'>
            <img src="/spi.png" alt="" height="100px" />
          </div>

          <div className="d-flex flex-column align-items-start mt-3">

            <Link to={''} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-chart-line me-2"></i>
              DashBoard
            </Link>

            <Link to={'center'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-building me-2"></i>
              Center
            </Link>

            <Link to={'user'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-user me-2"></i>
              User
            </Link>

            <Link to={'viewenq'} className='btn w-100 text-start mb-2'>
              <i className="fa-regular fa-comment-dots me-2"></i>
              Enquiries
            </Link>

            <Link to={'visit'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-users me-2"></i>
              Visitor
            </Link>

            <Link to={'adenqu'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-phone-volume me-2"></i>
              Add Enquiries
            </Link>

          </div>
          <button className='btn bg-danger text-white ms-2' onClick={logout}>Logout</button>
    
        </div>

       {/* Ye Offcanvas hai  */}
        <div
          className="offcanvas offcanvas-start d-md-none "
          tabIndex="-1"
          id="mobileSidebar"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body ">

            <div className='d-flex justify-content-center'>
              <img src="/spi.png" alt="" height="100px" />
            </div>

            <div className="d-flex flex-column align-items-start mt-3">

             <Link to={''} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-chart-line me-2"></i>
              DashBoard
            </Link>

            <Link to={'center'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-building me-2"></i>
              Center
            </Link>

            <Link to={'user'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-user me-2"></i>
              User
            </Link>

            <Link to={'viewenq'} className='btn w-100 text-start mb-2'>
              <i className="fa-regular fa-comment-dots me-2"></i>
              Enquiries
            </Link>

            <Link to={'visit'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-users me-2"></i>
              Visitor
            </Link>

            <Link to={'adenqu'} className='btn w-100 text-start mb-2'>
              <i className="fa-solid fa-phone-volume me-2"></i>
              Add Enquiries
            </Link>

            </div>
            <button className='btn bg-danger text-white ms-2' onClick={logout}>Logout</button>
    
          </div>
        </div>

  
        <div className="col-12 col-md-9 p-3" style={{ height: "100vh", overflow: "auto" }}>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Adlayout
