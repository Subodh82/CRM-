import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
function Addash() {

  
  const[enq,setEnq]=useState([]);
  const[user,setUser]=useState("");
  const[center,setCenter]=useState([]);
  const[followup,setFollowup]=useState([]);
  const[assign,setAssign]=useState("");


  // const navigate = useNavigate()
  // function logout() {
  //   localStorage.removeItem('admin')
  //   navigate('/login');
  // }
  // function validate() {
  //   if (!localStorage.getItem('admin')) {
  //     navigate('/login');
  //   }

  // }

  


  const getAdmin = async(e)=>{
    const res = await axios.get('http://localhost:5000/api/admin/stats');
    if(res.data.msg=="success"){
      const enq = res.data.allenq;
      const user = res.data.user;
      const center = res.data.center;
      const followup = res.data.followup;
      const assign = res.data.assign;

      console.log(enq);
      setCenter(center);
      setEnq(enq);
      setUser(user);
      setFollowup(followup);
      setAssign(assign);
      console.log(followup)
    }

  }
  useEffect(() => {
    getAdmin()
  }, [])

// get center api


  
  
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-md-12">
            <div
              className="d-flex justify-content-between align-items-center bg-white shadow p-3"
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ cursor: 'pointer', color: '#64748b' }}>
                <i className="fa-regular fa-bell"></i>
              </div>

              <div style={{ cursor: 'pointer' }}>
                <i className="fa-regular fa-user"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row bb g-3 p-2 align-items-center mt-2 shadow">

          <div className="col-md-4">
            <h5>Complete Reports</h5>
            <p className="mb-0">
              Quick snapshot of progress — what you did & what's next
            </p>
          </div>

          <div className=" col-md-8">
            <div className="row g-2 align-items-center justify-content-center">

              <div className="col-6 col-md-2">
                <select className="form-select">
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>

              <div className="col-6 col-md-3">
                <input type="date" className="form-control" />
              </div>

              <div className="col-6 col-md-3">
                <input type="date" className="form-control" />
              </div>

              <div className="col-12 col-md-4 d-flex flex-column flex-md-row">
                <button className="btn ap flex-fill p-2">Apply</button>
                <button className="btn btn-secondary flex-fill p-2">
                  Reset
                </button>
              </div>

            </div>
          </div>

        </div>


        {/* <div className="row g-3 mt-2">
          <div className="col-md-8 shadow rounded-2">
            <div className="card p-4 border-0">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
                <div className="mb-3 mb-md-0">
                  <p className="mb-1" style={{ fontSize: '15px', color: '#64748b' }}>
                    Welcome, <b style={{ color: '#1e293b' }}>Yashi Asthana</b>
                  </p>
                  <p className="text-muted mb-1" style={{ fontSize: '14px' }}>Overview</p>
                  <h3 className="mb-0 d-flex align-items-baseline gap-2" style={{ fontWeight: '800', color: '#1e293b' }}>
                    25 <span className="text-muted" style={{ fontSize: '16px', fontWeight: 'normal' }}>enquiries</span>
                  </h3>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  <div className="text-center">
                    <span className="text-muted" style={{ fontSize: '13px' }}>Assigned</span>
                    <h4 className="mb-0 mt-1" style={{ fontWeight: '800', color: '#1e293b' }}>3</h4>
                  </div>
                  <div style={{ width: "160px" }}>
                    <span className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>Progress</span>
                    <div className="progress" style={{ height: "8px", borderRadius: "10px", backgroundColor: "#f1f5f9" }}>
                      <div className="progress-bar" style={{ width: "12%", backgroundColor: "#20c997", borderRadius: "10px" }}></div>
                    </div>
                    <div className="text-end mt-1">
                      <span className="text-muted" style={{ fontSize: '12px' }}>12% assigned</span>
                    </div>
                  </div>

                </div>

              </div>
              <div className="row g-3">

                <div className="col-md-3 col-6">
                  <div className="stat-card shadow p-3 h-100 bg-white" style={{ border: '1px solid #f1f5f9', borderRadius: '12px' }}>
                    <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Today's follow-ups</p>
                    <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>0</h3>
                    <small className="text-muted" style={{ fontSize: '12px' }}>
                      Overdue: <span className="text-danger fw-bold">2</span>
                    </small>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="stat-card p-3 h-100 bg-white shadow" style={{ border: '1px solid #f1f5f9' }}>
                    <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Workshop students</p>
                    <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>0</h3>
                    <small className="text-muted" style={{ fontSize: '12px' }}>Recent: 0</small>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="stat-card p-3 h-100 shadow bg-white" style={{ border: '1px solid #f1f5f9', borderRadius: '12px' }}>
                    <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Registered</p>
                    <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>2</h3>
                    <small className="text-muted" style={{ fontSize: '12px' }}>Total conversions</small>
                  </div>
                </div>

                <div className="col-md-3 col-6">
                  <div className="stat-card p-3 h-100 bg-white shadow" style={{ border: '1px solid #f1f5f9', borderRadius: '12px' }}>
                    <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Centers</p>
                    <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>4</h3>
                    <small className="text-muted" style={{ fontSize: '12px' }}>Active centers</small>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="col-md-4 mb-4 ">
            <div className="card shadow p-4 border-0 h-100" style={{ borderRadius: '16px' }}>

              <div className="mb-4">
                <h5 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '2px' }}>Action Items</h5>
                <small className="text-muted" style={{ fontSize: '13px' }}>What to do next</small>
              </div>

              <div className="d-flex align-items-center justify-content-between mb-4 pb-3" style={{ borderBottom: '1px solid #f1f5f9' }}>


                <div className="d-flex align-items-center gap-3">

                  <div className="bg-light text-secondary fw-bold rounded text-center d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '13px' }}>
                    Leads
                  </div>

                  <div>
                    <h6 className="mb-1" style={{ fontWeight: '700', color: '#1e293b', fontSize: '14px' }}>3 Assigned</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.2' }}>Assigned across<br />your center</p>
                  </div>
                </div>


                <button
                  className="btn btn-sm"
                  style={{ border: '1px solid #cbd5e1', color: '#3b82f6', fontWeight: '600', borderRadius: '8px', fontSize: '12px', padding: '6px 12px' }}
                >
                  View <br /> Enquiries
                </button>

              </div>


             <div className="d-flex flex-wrap align-items-center justify-content-between">


                <div className="d-flex align-items-center gap-3">

                  <div className="bg-light text-secondary fw-bold rounded text-center d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', fontSize: '13px' }}>
                    Today
                  </div>

                  <div>
                    <h6 className="mb-1" style={{ fontWeight: '700', color: '#1e293b', fontSize: '14px' }}>0 calls due</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.2' }}>Prioritise Overdue<br />first</p>
                  </div>
                </div>


                <button
                  className="btn btn-sm text-white" 
                  style={{ backgroundColor: '#f9871d', border: 'none', fontWeight: '600', borderRadius: '8px', fontSize: '13px', padding: '10px 16px' }}
                >
                  Start calls
                </button>

              </div>

            </div>
          </div>
        </div> */}
        <div className="row g-4"> 
        <div className="col-lg-8 col-md-12">
          <div className="card p-4 border-0 h-100" style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-4">
              <div>
                <p className="mb-1" style={{ fontSize: '15px', color: '#64748b' }}>
                  Welcome, <b style={{ color: '#1e293b' }}>Yashi Asthana</b>
                </p>
                <p className="text-muted mb-1" style={{ fontSize: '14px' }}>Overview</p>
                <h3 className="mb-0 d-flex align-items-baseline gap-2" style={{ fontWeight: '800', color: '#1e293b' }}>
                 {enq.length}  <span className="text-muted" style={{ fontSize: '16px', fontWeight: 'normal' }}>enquiries</span>
                </h3>
              </div>

              <div className="d-flex align-items-center gap-4">
                <div className="text-center flex-shrink-0">
                  <span className="text-muted" style={{ fontSize: '13px' }}>Assigned</span>
                  <h4 className="mb-0 mt-1" style={{ fontWeight: '800', color: '#1e293b' }}>{assign}</h4>
                </div>
                <div style={{ width: "160px" }}>
                  <span className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>Progress</span>
                  <div className="progress" style={{ height: "8px", borderRadius: "10px", backgroundColor: "#f1f5f9" }}>
                    <div className="progress-bar" style={{ width: "12%", backgroundColor: "#20c997", borderRadius: "10px" }}></div>
                  </div>
                  <div className="text-end mt-1">
                    <span className="text-muted" style={{ fontSize: '12px' }}>12% assigned</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="row g-3">
              <div className="col-md-3 col-6">
                <div className="p-3 h-100 bg-white" style={{ border: '1px solid #f1f5f9', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Today's follow-ups</p>
                  <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>{followup.length}</h3>
                  <small className="text-muted" style={{ fontSize: '12px' }}>
                    Overdue: <span className="text-danger fw-bold">2</span>
                  </small>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="p-3 h-100 bg-white" style={{ border: '1px solid #f1f5f9', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Workshop students</p>
                  <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>0</h3>
                  <small className="text-muted" style={{ fontSize: '12px' }}>Recent: 0</small>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="p-3 h-100 bg-white" style={{ border: '1px solid #f1f5f9', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Registered</p>
                  <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>2</h3>
                  <small className="text-muted" style={{ fontSize: '12px' }}>Total conversions</small>
                </div>
              </div>

              <div className="col-md-3 col-6">
                <div className="p-3 h-100 bg-white" style={{ border: '1px solid #f1f5f9', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <p className="text-muted mb-2" style={{ fontSize: '13px' }}>Centers</p>
                  <h3 className="mb-1" style={{ fontWeight: '800', color: '#1e293b' }}>{center.filter((e)=>e.status=="Active").length}</h3>
                  <small className="text-muted" style={{ fontSize: '12px' }}>Active centers</small>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card p-4 border-0 h-100" style={{ borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            
            <div className="mb-4">
              <h5 style={{ fontWeight: '700', color: '#1e293b', marginBottom: '2px' }}>Action Items</h5>
              <small className="text-muted" style={{ fontSize: '13px' }}>What to do next</small>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid #f1f5f9' }}>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light text-secondary fw-bold rounded text-center d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px', fontSize: '13px' }}>
                  Leads
                </div>
                <div>
                  <h6 className="mb-1" style={{ fontWeight: '700', color: '#1e293b', fontSize: '14px' }}>3 Assigned</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.2' }}>Assigned across<br/>your center</p>
                </div>
              </div>
              <button className="btn btn-sm flex-shrink-0" style={{ border: '1px solid #cbd5e1', color: '#3b82f6', fontWeight: '600', borderRadius: '8px', fontSize: '12px', padding: '8px 12px' }}>
                View Enquiries
              </button>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3">
                <div className="bg-light text-secondary fw-bold rounded text-center d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px', fontSize: '13px' }}>
                  Today
                </div>
                <div>
                  <h6 className="mb-1" style={{ fontWeight: '700', color: '#1e293b', fontSize: '14px' }}>0 calls due</h6>
                  <p className="text-muted mb-0" style={{ fontSize: '12px', lineHeight: '1.2' }}>Prioritise Overdue<br/>first</p>
                </div>
              </div>
              <button className="btn btn-sm text-white flex-shrink-0" style={{ backgroundColor: '#f9871d', border: 'none', fontWeight: '600', borderRadius: '8px', fontSize: '13px', padding: '10px 16px' }}>
                Start calls
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>

        <div className="row py-5">
          <h5 className='fw-bold'>Centers</h5>

          {
            center.map((c)=>(
              <div className="col-md-4">
                <div className="crm-card">
                    <div
                        className="d-flex align-items-center justify-content-between p-3 bg-white"
                        style={{ maxWidth: '450px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                    >


                        <div style={{ flex: 1, paddingRight: '15px' }}>
                            <h6 className="mb-0" style={{ fontWeight: '600', color: '#334155', fontSize: '16px', lineHeight: '1.4' }}>
                                {c.name}
                            </h6>
                        </div>


                        <div className="d-flex align-items-center" style={{ gap: '15px' }}>


                            <div className="d-flex flex-column align-items-center text-center">
                                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Closed</span>
                                <strong style={{ fontSize: '18px', color: '#1e293b', lineHeight: '1.2' }}>0</strong>
                                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>(0%)</span>
                            </div>


                            <div
                                className="d-flex justify-content-center align-items-center rounded-circle"
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#f1f5f9',
                                    fontWeight: '700',
                                    color: '#1e293b',
                                    fontSize: '16px'
                                }}
                            >
                                0%
                            </div>

                        </div>

                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h3>1</h3>
                            <p>Assigned</p>
                        </div>

                        <div className="stat">
                            <h3>{followup.filter((e)=>e.enqid && e.enqid.center == c.name).length}</h3>
                            <p>Follow-ups</p>
                        </div>
                    </div>


                    <div className="enquiries">
                         <h3 style={{fontWeight:'800'}}>{enq.filter(e => e?.center === c.name).length}</h3>
                        <p>Enquiries</p>
                    </div>



                    <div className="card-buttons">
                        <button className="open">Open Enquiries</button>
                        <button className="timeline">Timeline</button>
                    </div>
                    <p className='mt-3 empt'>No recent follows-ups</p>
                </div>
            </div>
            ))
          }

        </div>
     



    </>
  )
}

export default Addash
