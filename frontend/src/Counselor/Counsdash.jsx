import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Counsdash() {

  return (
  <>
  <div className="container-fluid">
        

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="row rounded-3 shadow pb-1">
              <div className="col-md-4">
                <h4>Complete Reports</h4>
                <span>Quick snapshot of progress--what you did & what's next</span>
              </div>
              <div className=" col-md-2">
                <select className="form-select">
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>
              <div className=" col-md-2">
                <input type="date" className="form-control" />
              </div>

              <div className=" col-md-2">
                <input type="date" className="form-control" />
              </div>

              <div className="col-12 col-md-2 d-flex gap-2">
                <button className="btn btn-warning w-100 btn-small">Apply</button>

                <button className="btn btn-secondary w-100 btn-small ">
                  Reset
                </button>
              </div>

            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="row aa g-3 mt-3">
              <div className="col-md-7 col-12">
                <div className="rounded-4 bg-light shadow p-3 h-100">
                  <div className="row g-2">
                    <div className=" col-12 col-md-4 d-flex flex-column justify-content-start align-items-start">
                      <p className='mb-1'>welcome , <strong>Saloni Mani</strong></p>
                      <p className='mb-1 text-muted'>overview</p>
                      <h3 className="mb-0">7 &nbsp; <span className='fs-6'>enquiries</span></h3>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column justify-content-sm-end align-items-sm-end align-items-start">
                      <p className='text-muted mb-1'>Assigned</p>
                      <h3 className='mb-3'>2</h3>
                    </div>
                    <div className="col-12 col-md-4 ">
                      <p className='mb-1 text-muted'>Progress</p>
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
                  <div className="grid-box mt-3 ">
                    <div className="box shadow p-4">
                      <p className="mb-1 small">Today's follow-ups</p>
                      <h3 className="mb-0">0</h3>
                      <small>Overdue:1</small>
                    </div>
                    <div className="box shadow p-4">
                      <p className="mb-1 small">workshop students</p>
                      <h3 className="mb-0">0</h3>
                      <small>Recent:0</small>
                    </div>
                    <div className="box shadow p-4">
                      <p className="mb-1 small">Registered</p>
                      <h3 className="mb-0">2</h3>
                      <small>Total conversions</small>
                    </div>
                  </div>
                  <div className="row px-2">
                    <div className=" col-12 col-md-12 mt-2 rounded-4 shadow py-2" style={{ backgroundColor: 'white' }}>
                      <p className="mb-1">Centers</p>
                      <h3 className="mb-0">4</h3>
                      <small>Active centers</small>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 rounded-4 bg-light shadow mt-3 mt-md-0 h-100">
                <div className="d-flex justify-content-between align-items-center px-3">
                  <p className="py-3 fw-bold mb-0">Action Items</p>
                  <p className="mb-0 text-muted">what to do next</p>
                </div>
                <div className="row">
                  <div className="col-4 col-md-4">
                    <p className='px-3'>Follow-ups</p>
                  </div>
                  <div className="col-4 col-md-4">
                    <h6> <b>0 follows-ups done</b></h6>
                    <p>In Progress: <span style={{ color: 'red' }}>1</span></p>
                  </div>
                  <div className="col-4 col-md-4 d-flex justify-content-start justify-content-md-end px-3 ">
                    <p className='btn mb-5 text-center'>My Follow-ups</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 col-md-4">
                    <p className='px-3'>Leads</p>
                  </div>
                  <div className="col-4 col-md-4">
                    <h6><b>1 assigned</b></h6>
                    <small>Assigned across your center</small>
                  </div>
                  <div className="col-4  col-md-4 d-flex justify-content-md-end justify-content-start px-3">
                    <button className='btn btnn mb-3 text-center me-4'>View <br />Enquiries</button>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-4 col-md-4">
                    <p className='px-3'>Today</p>
                  </div>
                  <div className="col-4 col-md-4">
                    <h6><b>0 calls due</b></h6>
                    <small>Prioritise overdue first</small>
                  </div>
                  <div className="col-4  col-md-4 d-flex justify-content-md-end justify-content-start px-3">
                    <button className='btn btnn mb-3 me-4 '>Start Calls</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row g-3">


              <div className="col-12 col-md-8">
                <div className="bg-white rounded-4 shadow p-3 d-flex flex-column flex-md-row justify-content-between align-items-center">


                  <div className="d-flex align-items-center gap-3">

                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#f1f1f1",
                        fontWeight: "bold"
                      }}
                    >
                      0%
                    </div>

                    <div>
                      <p className="mb-1 fw-semibold">Your Progress</p>
                      <p className="mb-0">0 follow-ups</p>
                      <small className="text-muted">
                        Assigned: 1 | In Progress: 1
                      </small>
                    </div>

                  </div>

                  {/* Button */}
                  <button className="btn btn-warning text-white mt-3 mt-md-0 px-3">
                    My Tasks
                  </button>

                </div>
              </div>

              {/* 🔹 Right Card */}
              <div className="col-12 col-md-4">
                <div className="bg-white rounded-4 shadow p-3">

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <p className="mb-0 fw-semibold">Status Breakdown</p>
                    <small className="text-muted">Last: 20 Mar</small>
                  </div>

                  {/* Box */}
                  <div
                    className="p-3 rounded-3"
                    style={{
                      border: "2px solid orange",
                      width: "120px"
                    }}
                  >
                    <small className="text-danger fw-semibold">Hot Enquiry</small>
                    <h5 className="mb-0">1</h5>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
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

export default Counsdash
