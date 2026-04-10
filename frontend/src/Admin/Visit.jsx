import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Head from '../Components/Head';

function Visit() {
    const [name, setName] = useState("");
    const [enquirydate, setEnquiryDate] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [center, setCenter] = useState("");
    const [purpose, setPurpose] = useState("");
    const [remark, setRemark] = useState("");
    const [enqtypes, setEnqtypes] = useState("")

    const [visit, setVisit] = useState([])
    const getvisit = async () => {
        const res = await axios.get('http://localhost:5000/api/visitor/')
        if (res.data.msg == "Success") {
            setVisit(res.data.visit);
        }
    }
    useEffect(() => {
        getvisit()
    }, [])

    const deluser = async (id) => {
        const res = await axios.delete(`http://localhost:5000/api/visitor/${id}`);
        console.table(res.data)
        if (res.data.msg == "Delete") {
            window.alert("Visitor deleted")

            getvisit();

        }
        else {
            window.alert("something went wrong")
        }

    }


    const [editId, setEditId] = useState()
    const updatevisitor = async (e) => {
        e.preventDefault()
        const updateData = { name, contact, email, purpose, remark, center }
        const res = await axios.put(`http://localhost:5000/api/visitor/${editId}`, updateData)
        if (res.data.msg == "Update Success") {
            alert("data updated successfully")
            getvisit()

            
            setName("");
            setEmail("");
            setPurpose("");
            setRemark("");
            setContact("")
            setEditId();

        }
        else {
            alert("something went wrong")
        }
    }
    return (
        <>
            <div className="container-fluid">
                <Head/>
                <div className="row  ">
                    <div className="col-md-12">
                        <h3 className='mt-2'>Visitor Enquiries</h3>
                        <div className="table-responsive shadow rounded-2">
                            <table className='table table-bordered text-start' >
                                <thead>
                                    <tr>
                                        <th>Sr.no</th>
                                        <th>Enquiry Date</th>
                                        <th>Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Center</th>
                                        <th>Purpose</th>
                                        <th>Remark</th>
                                        <th>Enq Type</th>
                                        <th colSpan={2}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        visit.map((e, i) => (
                                            <tr key={e._id}>
                                                <td>{i + 1}</td>
                                                <td>{e.createdAt.split('T')[0]}</td>
                                                <td>{e.name}</td>
                                                <td>{e.contact}</td>
                                                <td>{e.email}</td>
                                                <td>{e.center}</td>
                                                <td>{e.purpose}</td>
                                                <td>{e.remark}</td>
                                                <td className={e.role=="Visitoro"?"bg-success btn text-white mt-2 mx-4":"bg-info btn text-white mt-2 mx-4"}>{e.role}</td>
                                                <td>
                                                    <button  className='btn btn-danger text-white'
                                                      
                                                        onClick={() => {
                                                             deluser(e._id)
                                                        }}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" className='form-control' onSubmit={updatevisitor}>
                            <div className="modal-body">
                                <label htmlFor="">Your Name:-</label> <br />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="">Your Mobile:-</label>
                                <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} />

                                <br />
                                <label htmlFor="">Your Email:-</label> <br />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                                <br />
                                <label htmlFor="">Purpose:-</label> <br />
                                <input type="text" value={purpose} onChange={(e) => setPurpose(e.target.value)} />
                                <br /> <br />
                                <input type="submit" value="Update" />
                            </div>
                        </form>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Visit
