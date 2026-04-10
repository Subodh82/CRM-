import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Dropdown } from "bootstrap";
import Head from '../Components/Head';
function Adviewenq() {
    const [enq, setEnq] = useState([]);
    const[user,setUser]=useState([]);
    const[filteruser,setFilterUser]=useState([]);
    const[uid,setUid]=useState("");
    const[rem,setRem]=useState("");
    const[EditId,setEditId]=useState([])
    const [filterfollowup,setFilterFollowup] = useState([]);
 
    const [selectedEnq, setSelectedEnq] = useState(null);
    

    const getnenq = async () => {
        const response = await axios.get('http://localhost:5000/api/enq')
        if (response.data.msg == "Success") {
            setEnq(response.data.enq);

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


    const assignfun = (e)=>{
        console.log(e);
        setEditId(e._id);
       var fu =  user.filter((u)=>{
            return u.center == e.center && u.status=='u';
        });
        console.log("Filtered users:", fu);
        setFilterUser(fu);
    }


    const updateenq = async(e)=>{
        e.preventDefault();
        const d = Date()
     const update = {'assignto':uid,'assignby':localStorage.getItem('admin'),assigndate:d};
     const res = await axios.put(`http://localhost:5000/api/enq/${EditId}`,update);
     const assigndata = {'enqid':EditId,'assignto':uid,'assignby':localStorage.getItem('admin'),'assignbyModel':'admin','remark':rem};
     const res2 = await axios.post('http://localhost:5000/api/assign',assigndata);
       if(res.data.msg=="update" && res2.data.msg=="success"){
        window.alert("data update");
        setEditId("")
        setUid("")
        setRem("")
        getnenq();
       }
       else{
        window.alert("something went wrong")
       }

    }

    const deluser = async(id)=>{
    const res = await axios.delete(`http://localhost:5000/api/enq/${id}`)
    console.log(res);
      if(res.data.user=="delete success"){
        window.alert("enquiry deleted")
         getnenq();
      }
      else{
        window.alert("something went wrong")
      }
    }

  const getfollowup = async (id) => {
    const res = await axios.get('http://localhost:5000/api/followup');
    console.log(res);
    if (res.data.msg == "success") {
      const followupdata = res.data.followup;
      const fd = followupdata.filter((f) => {
        return f.enqid._id == id;
      })
      setFilterFollowup(fd);
    }
  }

    
const handleRowClick = (data) => {
    setSelectedEnq(data);
    setEditId(data._id);

    const modal = new window.bootstrap.Modal(document.getElementById('exampleModal1'));
    modal.show();
};

    return (
        <>
        <div className="container-fluid">
          <Head/>
          <div className="row">
            <div className="col-md-12">
               <h4>View All Enquires</h4>
                   <table className='table   table-light'  >
                <thead>
                    <tr>
                        <th>S.no</th>
                        <td>Date</td>
                        <th>Action</th>
                        <th>Source</th>
                        <th>Name</th>
                        <th>College</th>
                        <th>Center</th>
                        <th>For Program</th>
                        <th>Assigned</th>
                        <th>Status</th>
                        <th>Next Follow-in</th>
                        {/* <th>Purpose</th> */}

                    </tr>
                </thead>
                <tbody>
                    {
                        enq.map((e, i) => (
                      <tr key={i} onClick={() => handleRowClick(e)} style={{ cursor: "pointer" }} >

                                <td>{i + 1}</td>
                                <td>{e.createdAt.split('T')[0]}</td>
                                <td>
                                    <div className='d-flex gap-2'>
                                    <a href={`https://api.whatsapp.com/send?phone=${e.contactNumber} `} target='_blank' className="btn btn-outline-warning"
                                    onClick={e=>e.stopPropagation()}
                                    >WA</a>
                                    <br />
                                    <a href="" className='btn btn-primary'>Copy</a>
                                    <br />
                                            
                                    <div className="dropdown">
                                        <button className="btn btn-secondary  " type="button" data-bs-toggle="dropdown" onClick={e=>e.stopPropagation()} aria-expanded="false">
                                         <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                        <ul className="dropdown-menu">

                                           { e.status=="u"  && <li><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"   
                                            onClick={(event) => {
                                                    event.stopPropagation();
                                                    assignfun(e);
                                                }}>Assign</button></li>}


                                            <li><button className='btn bg-danger text-white' onClick={()=>{
                                                deluser(e._id)
                                            }}><i className="fa fa-trash text-white"></i>Delete</button></li>                                    
                                            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                        </ul>
                                    </div>
                                    </div>


                                    {/* <div className="dropdown d-inline">
                                        <a className="btn btn-secondary " data-bs-toggle="dropdown"  href="#" role="button" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li> <button className='btn bg-danger text-white'><i className="fa fa-edit text-white"></i>Edit</button></li>
                                            <li> <button className='btn bg-danger text-white'><i className="fa fa-trash text-white"></i>Delete</button></li>
                                            <li> <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
                                            </li>
                                        </ul>
                                    </div> */}

                                </td>
                                <td>
                                    {e.source}
                                </td>
                                <td>
                                    <b> {e.fullName}</b>
                                    <br />
                                    {e.contactNumber}
                                    <br />
                                    {e.email}

                                </td>

                                <td>{e.college}</td>
                                <td>{e.center}</td>
                                <td>{e.forprogram || "_"}</td>
                                <td>{e.assignto? e.assignto.name :"Not Assigned"}</td>
                                <td>{e.status=="u"?"Active":"Deactive"}</td>
                                <td>{e.nextfollowupdate}</td>

                                <td> </td>
                {/* <td> <i className="fa fa-trash text-danger "></i> </td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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
                                    <select className="" id="" value={uid} onChange={(e)=>setUid(e.target.value)}>
                                        <option value="">--Not Assigned--</option>
                                        {
                                             filteruser.map((e)=>(
                                                <option key={e._id} value={e._id}>{e.name}   {e.role=="manager"?"{m}":"{c}"} </option>
                                            ))
                                        }
                                    </select>
                                   
                                </div>
                                <div className="mb-3">
                                     <label for="message-text" className="col-form-label">Message:</label>
            <textarea value={rem} onChange={(e)=>setRem(e.target.value)}className="form-control" id="message-text" ></textarea>
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

            {/* Modal by abbas sir */}
            <div className="modal fade" id="exampleModal1" tabIndex="-1">
  <div className="modal-dialog modal-xl modal-dialog-centered">
    <div className="modal-content">

      {/* HEADER */}
      <div className="modal-header">
        <div>
          <h5 className="modal-title">
            Enquiry #{selectedEnq?._id?.slice(-4)} - {selectedEnq?.fullName}
          </h5>
          <small className="text-muted">
            {selectedEnq?.course} • {selectedEnq?.center}
          </small>
        </div>
        <button className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* FILTER SECTION */}
      <div className="px-3 pt-2 d-flex gap-2">
        <input type="date" className="form-control" />
        <input type="date" className="form-control" />
        <button className="btn btn-warning">Apply Date Filter</button>
        <button className="btn btn-outline-secondary">Reset</button>
      </div>

      {/* STATUS CARDS */}
      <div className="row px-3 mt-3">
        <div className="col-md-3">
          <div className="card p-2">
            <small>Assigned To</small>
            <b>{selectedEnq?.assignto?.name || "Not Assigned"}</b>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-2">
            <small>Status</small>
            <b>{selectedEnq?.status || "New"=="u"?"Active":"Deactive"}</b>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-2">
            <small>Next Follow-up</small>
            <b>{selectedEnq?.nextfollowupdate || "-"}</b>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-2">
            <small>Total Followups</small>
            <b>0</b>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="row p-3">

        {/* LEFT SIDE - USER INFO */}
        <div className="col-md-5">
          <div className="card p-3">
            <h5>
              {selectedEnq?.fullName}
              <span className="badge bg-warning ms-2">New</span>
            </h5>

            <hr />

            <p><b>Mobile:</b> {selectedEnq?.contactNumber}</p>
            <p><b>Email:</b> {selectedEnq?.email}</p>
            <p><b>Course:</b> {selectedEnq?.course}</p>
            <p><b>Center:</b> {selectedEnq?.center}</p>
            <p><b>Created:</b> {selectedEnq?.createdAt?.split("T")[0]}</p>

            <div className="d-flex gap-2 mt-3">
              <a
                href={`tel:${selectedEnq?.contactNumber}`}
                className="btn btn-outline-primary w-50"
              >
                Call
              </a>

              <a
                href={`https://api.whatsapp.com/send/?phone=${selectedEnq?.contactNumber}`}
                target="_blank"
                className="btn btn-outline-success w-50"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TIMELINE */}
        <div className="col-md-7">
          <div className="card p-3">
            <div className="d-flex justify-content-between">
              <h6>Follow-up Timeline</h6>
              <button className="btn btn-sm btn-outline-secondary">Refresh</button>
            </div>


            <p className="text-muted mt-3">
              No follow-ups in selected range.
            </p>
          </div>
        </div>

      </div>

      {/* ASSIGN SECTION */}
      <form onSubmit={updateenq}>
        <div className="p-3 border-top">

          <div className="row">
            <div className="col-md-6">
              <label>Assign To</label>
              <select
                className="form-control"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
              >
                <option value="">-- Not Assigned --</option>
                {user.map((u) => (
                  <option key={u._id} value={u._id}>
                    {u.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label>Note</label>
              <textarea
                className="form-control"
                value={rem}
                onChange={(e) => setRem(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="text-end mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Assign Enquiry
            </button>
          </div>

        </div>
      </form>

    </div>
  </div>
</div>
        </>
    )
}

export default Adviewenq
