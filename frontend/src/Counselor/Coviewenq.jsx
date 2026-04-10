import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
function Coviewenq() {
    const [enq, setEnq] = useState([]);
    const [user, setUser] = useState([]);
    const [filteruser, setFilterUser] = useState([]);
    const [uid, setUid] = useState("");
    const [d, setd] = useState(true);
    const [rem, setRem] = useState("");
    const [EditId, setEditId] = useState([])
    const [selectedEnq, setSelectedEnq] = useState(null);
    const [status,setStatus] = useState("");
    const [nextdate,setNextDate] = useState("");
    const [programme,setProgramme] = useState("");
    const [remark,setRemark] = useState("");
    const [filterfollowup,setFilterFollowup] = useState([]);
    const [allenq,setAllEnq] = useState(0);
    const [asenq,setAsEnq] = useState(0);
    const [notasenq,setNotasEnq] = useState(0);

    const getnenq = async () => {
        const response = await axios.get('http://localhost:5000/api/enq')
        const response2 = await axios.get(`http://localhost:5000/api/user/${localStorage.getItem('counselor')}`)
        if (response.data.msg == "Success" && response2.data.msg == "success") {
            console.log(response.data.enq);
            var enquiries = response.data.enq.filter((a) => {
                return a.assignto ? a.assignto._id == localStorage.getItem('counselor') : a.center == response2.data.user.center;
            })
            console.log(enquiries)
            var allenq=enquiries.length;
            setAllEnq(allenq);
            var asenq=enquiries.filter((e)=>e.assignto).length;
            setAsEnq(asenq);
            var notasenq = allenq-asenq;
            setNotasEnq(notasenq);
            console.log(asenq,allenq,notasenq)
            setEnq(enquiries);

        }
    }


    useEffect(() => {
        getnenq();
        getuser();
    }, [])

    const getuser = async () => {
        const response = await axios.get('http://localhost:5000/api/user')
        if (response.data.msg == "success") {
            setUser(response.data.user);

        }
    }


   const assignfun = (e) => {
    // console.log(e);
    setEditId(e._id);
    var fu = user.filter((u) => {
      if (localStorage.getItem("counselor") == u._id) {
        return false;
      } else {
        return u.center == e.center;
      }
    });
    // console.log("Filtered users:", fu);
    setFilterUser(fu);
  };   


 const updateenq = async (e) => {
    e.preventDefault();
    const d = Date();
    const update = {
      assignto: uid,
      assignby: localStorage.getItem("counselor"),
      assigndate: d,
    };
    const res = await axios.put(
      `http://localhost:5000/api/enq/${EditId}`,
      update,
    );
    const assindata = {
      enqid: EditId,
      assignto: uid,
      assignby: localStorage.getItem("counselor"),
      assignbyModel: "user",
      remark: rem, 
    };
    const res2 = await axios.post(
      "http://localhost:5000/api/assign",
      assindata,
    );
    console.log(res2);
    if (res.data.msg == "update" && res2.data.msg === "success") {
      window.alert("data update ");
      setEditId(null);
      setUid("");
      setRem("");
      getnenq();
    } else {
      window.alert("something went wrong");
    }
  };



    const deluser = async (id) => {
        const res = await axios.delete(`http://localhost:5000/api/enq/${id}`)
        console.log(res);
        if (res.data.user == "delete success") {
            window.alert("enquiry deleted")
            getnenq();
        }
        else {
            window.alert("something went wrong")
        }
    }

const getfollowup = async(id)=>{
  const res =await axios.get('http://localhost:5000/api/followup');
  console.log(res);
  if(res.data.msg=="success"){
    const followupdata = res.data.followup;
    const fd = followupdata.filter((f)=>{
      return f.enqid._id == id;
    })
    setFilterFollowup(fd);
  } 
}

      const handleRowClick = (data) => {
    setSelectedEnq(data);
    if(data.assignto && data.assignto._id==localStorage.getItem('counselor')){
      setd(false)
    }
    else{
      setd(true)
    }
     getfollowup(data._id); 

    const offcanvas = new window.bootstrap.Offcanvas(
      document.getElementById("enqOffcanvas"),
    );
   
    offcanvas.show();
  };


  async function addfollowup(e){
    e.preventDefault();
    const followupdata = {'enqid':selectedEnq._id,'uid':localStorage.getItem('counselor'),status,nextdate,remark,programme};
    const res=await axios.post('http://localhost:5000/api/followup',followupdata);
    if(res.data.msg=="success"){
      toast.success("Follow Up Added Success");
      setStatus("")
      setNextDate("")
      setRemark("")
      setProgramme("")
      getfollowup(selectedEnq._id);
    }
    else{
      toast.error("Something Went Wrong");
    }

  }

  




    return (
        <>
            <div className="container-fluid">
  


  
  <div className="row shadow p-4 gap-4 rounded-5 mx-0">

    <div className="col-md-2 py-4">
      <div className="p-4">
        <h5 className="mb-3">Enquiries</h5>

        <div className="btn-group custom-toggle mt-4">
          <button className="btn bg-primary text-white">Table</button>
          <button className="btn">Cards</button>
        </div>
      </div>
    </div>

    <div className="col-md-3 py-4 border rounded-3">
      <p>Total Enquiries</p>
      <h3 className="text-muted">{allenq}</h3>
    </div>

    <div className="col-md-3 py-4 border rounded-3 shadow">
      <p>Assigned</p>
      <h3 style={{ color: 'green' }}>{asenq}</h3>
    </div>

    <div className="col-md-3 py-4 border rounded-3">
      <p>Not Assigned</p>
      <h3 style={{ color: 'orange' }}>{notasenq}</h3>
    </div>

  </div>


  {/* ================= FILTER ================= */}
  <div className="filter-container p-3 my-4 shadow rounded-3">
    <div className="row g-3">

      <div className="col-md-2">
        <label>Search</label>
        <input type="text" className="form-control" placeholder="Name, mobile..." />
      </div>

      <div className="col-md-2">
        <label>Status</label>
        <select className="form-select"><option>All</option></select>
      </div>

      <div className="col-md-2">
        <label>Assigned To</label>
        <select className="form-select"><option>All</option></select>
      </div>

      <div className="col-md-2">
        <label>Center</label>
        <select className="form-select"><option>All</option></select>
      </div>

      <div className="col-md-2">
        <label>Source</label>
        <select className="form-select"><option>All</option></select>
      </div>

      <div className="col-md-2">
        <label>Session</label>
        <select className="form-select"><option>All</option></select>
      </div>

      <div className="col-md-2">
        <label>Next Follow-Up</label>
        <select className="form-select"><option>All</option></select>
      </div>

      <div className="col-md-2">
        <label>From</label>
        <input type="date" className="form-control" />
      </div>

      <div className="col-md-2">
        <label>To</label>
        <input type="date" className="form-control" />
      </div>

      <div className="col-md-2 d-flex align-items-end">
        <button className="btn btn-outline-secondary w-100">Reset</button>
      </div>

    </div>
  </div>


  {/* ================= TABLE ================= */}
  <div className="row shadow p-4">

    {/* Buttons */}
    <div className="col-md-8 d-flex flex-wrap gap-1 pb-2">
      <button className="btn btn-outline-secondary btn-sm">Copy</button>
      <button className="btn btn-outline-secondary btn-sm">Excel</button>
      <button className="btn btn-outline-secondary btn-sm">PDF</button>
      <button className="btn btn-outline-secondary btn-sm">Column visibility</button>
      <button className="btn btn-outline-secondary btn-sm">Show 10 rows</button>
    </div>

    <div className="col-md-4 d-flex justify-content-md-end pb-2">
      <input type="search" className="form-control w-50" placeholder="Search..." />
    </div>

    {/* Table */}
    <div className="col-md-12">
      <div className="table-responsive">
        <table className="table table-hover align-middle">

          <thead className="table-light">
            <tr>
              <th>S.no</th>
              <th>Date</th>
              <th>Action</th>
              <th>Source</th>
              <th>Name</th>
              <th>College</th>
              <th>Center</th>
              <th>Program</th>
              <th>Assigned</th>
              <th>Status</th>
              <th>Next Follow</th>
            </tr>
          </thead>

          <tbody>
            {enq.map((e, i) => (
              <tr   key={i} onClick={() => {
                e.status=="u"?handleRowClick(e):toast.error("Enquiry is Deactive");
              }} style={{cursor: "pointer"}}  >
                <td>{i + 1}</td>
                <td>{e.createdAt?.split('T')[0]}</td>

                <td>
                  <div className="d-flex gap-2">
                    <a
                      href={`https://api.whatsapp.com/send?phone=${e.contactNumber}`}
                      target="_blank"
                      // className="btn btn-outline-warning btn-sm"
                    onClick={(e) => e.stopPropagation()}
                    className="btn btn-outline-warning"
                    >
                      WA
                    </a>

                    <br />
                     <a
                    href=""
                    className="btn btn-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Copy
                  </a>

                    {/* <button className="btn btn-primary btn-sm">Copy</button> */}

                   
                  </div>
                </td>

                <td>{e.source}</td>

                <td>
                  <b>{e.fullName}</b><br />
                  {e.contactNumber}<br />
                  {e.email}
                </td>

                <td>{e.college}</td>
                <td>{e.center}</td>
                <td>{e.forprogram || "_"}</td>
                <td>{e.assignto ? e.assignto.name : "Not Assigned"}</td>
                <td>{e.status=="u"?"Active":"Deactive"}</td>
                <td>{e.nextfollowupdate}</td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

  </div>

</div>





            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button> */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={updateenq}>
                            <div className="modal-body">

                                <div className="mb-3">
                                    {/* <input type="text" value={EditId}/> */}
                                    <label for="recipient-name" className="col-form-label">Assign / Transfer To:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                    <select className="" id="" value={uid} onChange={(e) => setUid(e.target.value)}>
                                        <option value="">--Not Assigned--</option>
                                        {
                                            filteruser.map((e) => (
                                                <option key={e._id} value={e._id}>{e.name}</option>
                                            ))
                                        }
                                    </select>

                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Message:</label>
                                    <textarea value={rem} onChange={(e) => setRem(e.target.value)} className="form-control" id="message-text" ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary" >Close</button> */}
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"> Assign</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


            {/* off canvas code by abbas sir */}
            <div 
  className="offcanvas offcanvas-end" 
  tabIndex="-1" 
  id="enqOffcanvas"
  style={{ width: "420px" }}
>
  <div className="offcanvas-header border-bottom">
    <div>
      <h5 className="mb-0">Enquiry Details</h5>
      <small className="text-muted">
        {selectedEnq?.course} • {selectedEnq?.center}
      </small>
    </div>

    <button 
      type="button" 
      className="btn-close" 
      data-bs-dismiss="offcanvas"
    ></button>
  </div>

  <div className="offcanvas-body">

    {selectedEnq && (
      <>
        {/* USER HEADER */}
        <div className="mb-3">
          <h6 className="mb-0">{selectedEnq.fullName}</h6>
          <small className="text-muted">
            {selectedEnq.course} • {selectedEnq.center}
          </small>

          <span className="badge bg-warning float-end">New</span>
        </div>

        <hr />

        {/* DETAILS */}
        <div className="mb-3">
          <p className="mb-1"><b>Mobile:</b> {selectedEnq.contactNumber}</p>
          <p className="mb-1"><b>Email:</b> {selectedEnq.email || "-"}</p>
          <p className="mb-1"><b>Course:</b> {selectedEnq.course}</p>
          <p className="mb-1"><b>Center:</b> {selectedEnq.center}</p>
          <p className="mb-1">
            <b>Assigned:</b> {selectedEnq.assignto?.name || "Not Assigned"}
          </p>
          <p className="mb-1">
            <b>Created:</b> {selectedEnq.createdAt?.split("T")[0]}
          </p>
        </div>

        {/* ACTION BUTTONS */}
     {
      selectedEnq.assignto &&
         <div className="d-flex gap-2 mb-3">
          <a 
            href={`tel:${selectedEnq.contactNumber}`} 
            className="btn btn-outline-primary w-100"
          >
            Call
          </a>

          <a 
            href={`https://api.whatsapp.com/send/?phone=${selectedEnq.contactNumber}`} 
            target="_blank"
            className="btn btn-outline-success w-100"
          >
            WhatsApp
          </a>

          <button type='button'  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal" onClick={()=>{
            assignfun(selectedEnq)
          }} className="btn btn-outline-warning w-100" disabled >
            Transfer
          </button>
        </div>
     }

        <hr />

        {/* FOLLOW-UP SECTION */}
        <h6>Add Follow-Up</h6>

        <div className='position-relative'>
         {
          d &&  <div style={{backgroundColor:"rgba(255,0,0,0.3)"}} className='d-flex justify-content-center align-items-center display-1 rounded-3 position-absolute w-100 h-100' >
          <i className="fa-solid fa-lock "></i>
        </div>
         }

        <form onSubmit={addfollowup} className='p-3'>
        <div className="mb-2">
          <label>Status</label>
          <select value={status} onChange={(e)=>setStatus(e.target.value)} className="form-control">
            <option>Follow Up</option>
            <option>Hot Enquiry</option>
            <option>Warm Enquiry</option>
            <option>Cold Enquiry</option>
            <option>Not Intrested</option>
            <option>Registered</option>
          </select>
        </div>

        <div className="mb-2">
          <label>Next Follow-Up Date</label>
          <input type="date"  value={nextdate} onChange={(e)=>setNextDate(e.target.value)} className="form-control" />
        </div>

        <div className="mb-2">
          <label>For Programme</label>
          <select   value={programme} onChange={(e)=>setProgramme(e.target.value)} className="form-control">
            <option>Select Programme</option>
            <option>Summer Training</option>
            <option>Vocational Training</option>
            <option>Industrial Training</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Remark</label>
          <textarea value={remark} onChange={(e)=>setRemark(e.target.value)}
            className="form-control" 
            placeholder="Write exact conversation notes..."
          ></textarea>
        </div>

        <input type="submit" value="Save Follow Up" className='btn btn-warning w-100 mb-3' />
        </form>
        
        </div>




        <hr />

        {/* TIMELINE */}
        <div className="d-flex justify-content-between align-items-center">
          <h6>Follow-Up Timeline</h6>
          <button className="btn btn-sm btn-outline-secondary">
            Refresh
          </button>
        </div>
{/* 
         {
                filterfollowup.map((f)=>(
                  <p>
                    {f.status}
                    <br />
                    {f.nextdate}
                    <br />
                    {f.remark}
                  </p>
                ))
              } */}

              <div className="timeline-container">

  {
    filterfollowup.map((f, i) => (

      <div className="row mb-4" key={i}>

        <div className="col-md-1 d-flex flex-column align-items-center">
          <div className="dot"></div>


          {i !== filterfollowup.length - 1 && (
            <div className="line"></div>
          )}
        </div>

        <div className="col-md-11">
          <div className="row">
            <div className="col-md-7">
              <h6 className="fw-semibold mb-1">{f.status}</h6>
            </div>
            <div className="col-md-5 text-end">
              <small className="text-muted">
                {f.createdAt}
              </small>
            </div>
          </div>
         <p className="mb-1 text-muted">{f.programme}</p>
          <p className="mb-1 text-muted">{f.remark}</p>

          <small className="text-muted">
            Next: {f.nextdate}
          </small>
        </div>

      </div>

    ))
  }

</div>
      </>
    )}

  </div>
</div>
        </>
    )
}

export default Coviewenq
