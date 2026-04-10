import React from 'react'
import Head from '../Components/Head'

function Mgdash() {
  return (

    <>
      <div className="container-fluid ">
        <Head/>
      
        <div className="row aa align-items-stretch">
          <div className="col-md-12">
            <div className="row">

              <div className="col-md-7 col-12">
                <div className="rounded-4 bg-light shadow p-4">
                  <div className="row">
                    <div className=" col-12 col-md-4 d-flex flex-column justify-content-start align-items-start">
                      <p>welcome , <strong>Akshat Pathak</strong></p>
                      <p className='mb-0'>overview</p>
                      <h3>12 &nbsp; <span className='fs-6'>enquiries</span></h3>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-sm-end align-items-sm-end align-items-start">
                      <p className='text-muted'>Assigned</p>
                      <h3 className='mb-3'>2</h3>
                    </div>
                    <div className="col-12 col-md-4 ">
                      <p className='mb-2 text-muted'>Progress</p>
                      <div
                        style={{
                          height: "10px",
                          backgroundColor: "#ddd",
                          borderRadius: "20px",
                          overflow: "hidden"
                        }}
                      >
                        <div
                          style={{
                            width: "20%",
                            height: "100%",
                            backgroundColor: "blue",
                          }}
                        ></div>
                      </div>
                      <p>16%<span> assigned</span></p>
                    </div>
                  </div>
                  <div className="grid-box mt-3">
                    <div className="box shadow p-4">
                      <p>Today's follow-ups</p>
                      <h3>0</h3>
                      <p>Overdue:1</p>
                    </div>
                    <div className="box shadow p-4">
                      <p>workshop students</p>
                      <h3>0</h3>
                      <p>Recent:0</p>
                    </div>
                    <div className="box shadow p-4">
                      <p>Registered</p>
                      <h3>2</h3>
                      <p>Total conversions</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className=" col-12 col-md-12 mt-2 rounded-4 shadow py-2" style={{ backgroundColor: 'white' }}>
                      <p>Centers</p>
                      <h3>4</h3>
                      <p>Active centers</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 rounded-4 bg-light shadow mt-3 mt-md-0">
                <div className="d-flex justify-content-between align-items-center px-3">
                  <p className="py-3 fw-bold mb-0">Action Items</p>
                  <p className="mb-0 text-muted">what to do next</p>
                </div>
                <div className="row">
                  <div className="col-4 col-md-4">
                    <p>Leads</p>
                  </div>
                  <div className="col-4 col-md-4">
                    <h5>2 assigned</h5>
                    <p>Assigned across your centers</p>
                  </div>
                  <div className="col-4 col-md-4 d-flex justify-content-start justify-content-md-end px-3 ">
                    <p className='btn mb-5'>view <br />Enquires</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 col-md-4">
                    <p>Today</p>
                  </div>
                  <div className="col-4 col-md-4">
                    <h5>0 calls due</h5>
                    <p>Prioritise overdue first</p>
                  </div>
                  <div className="col-4  col-md-4 d-flex justify-content-md-end justify-content-start px-3">
                    <button className='btn btnn mb-3 '>Start Calls</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aa">
              <p className='fw-bold   my-4'>Center</p>
              <div className="card p-3 shadow-sm rounded-4" style={{ maxWidth: "350px" }}>


                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0 fw-bold">Softpro Noida Office</h6>
                    <small className="text-muted">Closed</small>
                  </div>


                  <div className="progress-circle">
                    <span>15%</span>
                  </div>
                </div>


                <div className="row mt-3 g-2">
                  <div className="col-6 col-md-6">
                    <div className="box p-2 text-start rounded-3">
                      <h6 className="mb-0">3</h6>
                      <small className="text-muted">Assigned</small>
                    </div>
                  </div>

                  <div className="col-6 col-md-6">
                    <div className="box p-2 text-center rounded-3">
                      <h6 className="mb-0">3</h6>
                      <small className="text-muted">Follow-ups</small>
                    </div>
                  </div>
                </div>


                <div className="box p-2 mt-2 rounded-3 text-start">
                  <h6 className="text-danger mb-0">10</h6>
                  <small className="text-muted">Enquiries</small>
                </div>


                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-warning w-50 text-white">
                    Open Enquiries
                  </button>
                  <button className="btn btn-light w-50 border">
                    Timeline
                  </button>
                </div>


                <div className="mt-3 list-box">

                  <div className="list-item p-2 mb-2 rounded-3">
                    <div className="d-flex justify-content-between">
                      <strong>Mayank Pal</strong>
                      <span className="text-success small">Registered</span>
                    </div>
                    <small className="text-muted">
                      by Akshat Pathak · 18 Feb, 11:17 AM
                    </small>
                  </div>

                  <div className="list-item p-2 rounded-3">
                    <div className="d-flex justify-content-between">
                      <strong>Mayank Pal</strong>
                      <span className="text-warning small">Hot Enquiry</span>
                    </div>
                    <small className="text-muted">
                      by Akshat Pathak · 18 Feb, 11:16 AM
                    </small>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mgdash
