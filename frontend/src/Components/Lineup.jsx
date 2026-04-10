import React from 'react'

function Lineup() {
  return (
    <>
    <div className="container-fluid py-4">

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">

          <div className="card shadow-sm p-4 rounded-4">

       
            <div className="row align-items-center mb-3">
              <div className="col-md-8">
                <h5 className="fw-bold mb-0">Enquiry Details</h5>
                <small className="text-muted">
                  Softpro House, Jankipuram, Lucknow
                </small>
              </div>
              <div className="col-md-4 text-end">
                <button className="btn btn-outline-secondary btn-sm">
                  Refresh
                </button>
              </div>
            </div>

            <hr />

            <h6 className="fw-semibold mb-3">Follow-Up Timeline</h6>

           
            <div className="timeline-container">

           
              <div className="row mb-4">
                <div className="col-md-1 d-flex flex-column align-items-center">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>

                <div className="col-md-11">
                  <div className="row">
                    <div className="col-md-7">
                      <h6 className="fw-semibold mb-1">Warm Enquiry</h6>
                    </div>
                    <div className="col-md-5 text-end">
                      <small className="text-muted">
                        24-03-2026 10:19 AM
                      </small>
                    </div>
                  </div>

                  <p className="mb-1 text-muted">hhh</p>

                  <small className="text-muted">
                    By: Saloni Mani | Next: 24-03-2026
                  </small>
                </div>
              </div>

             
              <div className="row mb-4">
                <div className="col-md-1 d-flex flex-column align-items-center">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>

                <div className="col-md-11">
                  <div className="row">
                    <div className="col-md-7">
                      <h6 className="fw-semibold mb-1">Warm Enquiry</h6>
                    </div>
                    <div className="col-md-5 text-end">
                      <small className="text-muted">
                        24-03-2026 10:17 AM
                      </small>
                    </div>
                  </div>

                  <p className="mb-1 text-muted">ggg</p>

                  <small className="text-muted">
                    By: Saloni Mani | Next: 24-03-2026
                  </small>
                </div>
              </div>

               
              <div className="row mb-4">
                <div className="col-md-1 d-flex flex-column align-items-center">
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>

                <div className="col-md-11">
                  <div className="row">
                    <div className="col-md-7">
                      <h6 className="fw-semibold mb-1">Hot Enquiry</h6>
                    </div>
                    <div className="col-md-5 text-end">
                      <small className="text-muted">
                        31-01-2026 02:01 PM
                      </small>
                    </div>
                  </div>

                  <p className="mb-1 text-muted">Test by Admin</p>

                  <small className="text-muted">
                    By: Dhirendra Patel | Next: 31-01-2026
                  </small>
                </div>
              </div>

              
              <div className="row mb-4">
                <div className="col-1 d-flex flex-column align-items-center">
                  <div className="dot"></div>
                </div>

                <div className="col-11">
                  <div className="row">
                    <div className="col-7">
                      <h6 className="fw-semibold mb-1">Cold Enquiry</h6>
                    </div>
                    <div className="col-5 text-end">
                      <small className="text-muted">
                        31-01-2026 02:00 PM
                      </small>
                    </div>
                  </div>

                  <p className="mb-1 text-muted">Test by Admin</p>

                  <small className="text-muted">
                    By: Dhirendra Patel | Next: 31-01-2026
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

export default Lineup
