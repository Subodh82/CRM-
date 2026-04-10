import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Lineup from '../Components/Lineup';

function Center() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("");

    const [getcenter, setgetcenter] = useState([])
    const getcent = async () => {
        const res = await axios.get('http://localhost:5000/api/center')
        if (res.data.msg == "Success") {
            setgetcenter(res.data.center);
        }
    }
    useEffect(() => {
        getcent()
    }, [])

    const deluser = async (id) => {
        const response = await axios.delete(`http://localhost:5000/api/center/${id}`)
        if (response.data.msg == "Success") {
            window.alert("delete enquiry succesfull")
            getcent();
        }
        else {
            window.alert("something went wrong")
        }
    }
    //  const [editId, setEditId] = useState(null);
    const [editId, setEditId] = useState(null);
    const updateCenter = async (e) => {
        e.preventDefault();
        const center = { name, address, status };
        const response = await axios.put(`http://localhost:5000/api/center/${editId}`, center);
        if (response.data.msg == "Success") {
            window.alert("Form edited")
            setEditId(null);
            setName("");
            setAddress("");
            setStatus("")
            getcent();
        }
    }
    async function changeStatus(id, st) {
        const res = await axios.put(`http://localhost:5000/api/center/${id}/${st}`)
        if (res.data.msg == "Success") {
            toast.success("Status Updated");
            getcent();
        }
        else {
            toast.error("Something Went Wrong");
        }

    }
    async function savecenter(e) {
        e.preventDefault();

        const center = { name, address, status };
        const response = await axios.post('http://localhost:5000/api/center', center);
        if (response.data.msg == "Success") {
            window.alert("Center Added Success");
            setName("");
            setAddress("");
            setStatus("");
            getcent();
        }
        else {
            window.alert("Something Went Wrong");
            setStatus("");
        }
    }


    return (
        <>


            <div className="container-fluid">
                <div className="row my-4">
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

                <div className="row">
                    <div className="col-md-12">
                        {/* <div className=" p-4 rounded-3 shadow-lg mt-4"> */}

                        <form method="post" onSubmit={editId ? updateCenter : savecenter} className='my-3 w-100 mx-auto'>
                            <div className="row g-3 align-items-end shadow p-4  rounded-3">
                                <h5 className="mb-4 fw-semibold">Create New Center</h5>

                                {/* Center Name */}
                                <div className="col-md-4">
                                    <label className="form-label">
                                        Center Name <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter center name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                {/* Location */}
                                <div className="col-md-4">
                                    <label className="form-label">
                                        Location <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter full location"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                {/* Status */}
                                <div className="col-md-2">
                                    <label className="form-label">Status</label>
                                    <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                        <option>Select Status</option>
                                        <option>Active</option>
                                        <option>Deactive</option>
                                    </select>
                                </div>

                                {/* Button */}
                                <div className="col-md-2">
                                    <input type="submit" value="Save Center" className="buttonh  w-75" />
                                </div>

                            </div>
                        </form>

                        {/* </div> */}

                        <div className="row mt-5 shadow-lg">
                            <h4 className='p-2'>Existing Centers</h4>
                            <div className="col-md-8 d-flex flex-wrap gap-1 pb-2 py-4">
                                <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Copy</button>
                                <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Excel</button>
                                <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>PDF</button>
                                <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Column visibility</button>
                                <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Show 10 rows</button>
                            </div>
                            <div className="col-md-4 d-flex justify-content-md-end pb-2">
                                <label htmlFor="" className='pt-2 pe-2'>Search: </label><input type="search" className='w-50 px-md-2 rounded-1 form-control' />
                            </div>
                            <div className="col-12 col-md-12 h-100" style={{ overflow: 'auto' }}>

                                <div className='table-responsive'>
                                    <table className='table table-bordered text-center'>
                                        <thead>
                                            <tr className='botn'>
                                                <th>Sr.no</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th colSpan={2}>Status</th>
                                                <th colSpan={2}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                getcenter.map((e, i) => (
                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{e.name}</td>
                                                        <td>{e.address}</td>
                                                        <td> <small style={{ color: `${e.status == "Active" ? "green" : "red"}` }} >{e.status}</small> </td>
                                                        <td><button onClick={() => { changeStatus(e._id, e.status) }} className={`btn btn-sm ${e.status == "Active" ? "btn-danger" : "btn-success"}`}> {e.status == "Active" ? "Deactive" : "Active"}</button></td>
                                                        <td><button className='btn' onClick={() => {
                                                            setName(e.name);
                                                            setAddress(e.address)
                                                            setStatus(e.status)
                                                            setEditId(e._id)
                                                        }}><i className="fa-solid fa-pen-to-square"></i></button> </td>

                                                        <td>
                                                            <button className='btn' onClick={() => {
                                                                deluser(e._id)
                                                            }}><i className="fa fa-trash text-danger "></i></button>
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
                </div>
                  
            </div>
        </>
    )
}

export default Center
