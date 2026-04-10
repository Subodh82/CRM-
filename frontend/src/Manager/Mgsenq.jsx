import React from 'react'
import Head from '../Components/Head'

function Mgsenq() {
  return (
    <div>
      <div className="container-fluid mt-2">
              <Head/>
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                  
                  <div className="row rounded-2 shadow form-box pt-4 mt-4">
                    <h4 className='text-center' >Student Enquiry</h4>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="floating-label">Location *</label>
                        <select className="custom-select">
                          <option>-- Select Center --</option>
                          <option>Center 1</option>
                          <option>Center 2</option>
                        </select>
                      </div>
                      <br />
                      <input type="text" placeholder='Full Name' className='custom-select1'/>
                      <br /><br />
                      <input type="text"  placeholder='Course' className='custom-select1'/>
                       <br /><br />
                       <input type="text" placeholder='Year' className='custom-select1'/>
                       <br /><br />
                       <input type="text" placeholder='Email' className='custom-select1'/>
                    </div>
      
                    <div className="col-md-6 mt-4 mt-md-0">
                       <div className="form-group">
                        <label className="floating-label">Source</label>
                        <select className="custom-select">
                          <option>Walk-in</option>
                          <option>Center 1</option>
                          <option>Center 2</option>
                        </select>
                      </div>
                        <br />
                      <input type="text" placeholder='College' className='custom-select1'/>
                      <br /><br />
                      <input type="text" placeholder='Branch' className='custom-select1'/>
                      <br /><br />
                      <input type="text" placeholder='Contact Number*' className='custom-select1'/>
                      <br /><br />
                        <div className="form-group">
                        <label className="floating-label">Program</label>
                        <select className="custom-select" placeholder='Select'>
                          <option>Select Program</option>
                          <option>Center 1</option>
                          <option>Center 2</option>
                        </select>
                      </div>
                    </div>
      
                    <div className="col-md-12 text-center">
                      <button value="submit" className='
                      btn bg-primary text-white rounded-5 px-3 p-1'>Save Enquiry</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Mgsenq
