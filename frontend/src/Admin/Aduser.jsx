import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Head from '../Components/Head';

function Aduser() {
    const [centers, setCenters] = useState([]);

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [center, setCenter] = useState("")
    const [status, setStatus] = useState("u")
    const [data, setData] = useState([])


    const adusercode = async (e) => {
        e.preventDefault();
        const user = { name, number, email, role, center };
        const res = await axios.post('http://localhost:5000/api/user/', user);
        if (res.data.msg == "success") {
            window.alert("User Added");
            setName("");
            setEmail("");
            setNumber("");
            setRole("");
            setCenter("");

            getuser();

        }
        else {
            window.alert("Something Went Wrong");
            setRole("");
            setCenter("");
        }
    }


    const getuser = async () => {
        const res = await axios.get('http://localhost:5000/api/user/')
        console.log(res.data);
        if (res.data.msg == "success") {
            setData(res.data.user)

        }
    }
    useEffect(() => {
        getuser()
    }, [])

    async function changeStatus(id,st){
        const res=await axios.put(`http://localhost:5000/api/user/${id}/${st}`);
        if(res.data.msg=="success"){
            toast.success("Status Updated");
            getuser();
        }
        else{
            toast.error("Something Went Wrong");
        }
    } 
    const getcenter = async () => {
        const res = await axios.get('http://localhost:5000/api/center/');
        console.log(res.data)
        if (res.data.msg == "Success") {
            var x = res.data.center;
            x = x.filter((e) => e.status === "Active");
            setCenters(x);
        }
    }

    useEffect(() => {
        getcenter();
    }, [])


    // Edit vala kaam hai yee
    const [editId, setEditid] = useState(null);
    const updateUser = async (e) => {
        e.preventDefault()
        const visiter = { name, email, number, role, center, status }
        const res = await axios.put(`http://localhost:5000/api/user/${editId}`, visiter)
        if (res.data.msg == "success") {
            window.alert("data up-date")
            setEditid(null);
            setName("");
            setEmail("");
            setNumber("");
            setRole("");
            setCenter("")
            getuser()
        }
        else {
            window.alert("something went wrong")
        }
    }

    // delete vala section hai
    const deluser = async (id) => {
        const res = await axios.delete(`http://localhost:5000/api/user/${id}`)
        if (res.data.msg == "success") {
            window.alert("data delete succesfull")
            getuser();
        }
    }
    return (
        <>
            <div className="container-fluid">
                <Head/>
                <div className="row mt-4">
                    <div className="card shadow-sm p-4 rounded-4">
                        <h5>Create New User</h5>
                        <form onSubmit={editId ? updateUser : adusercode} className=' '>
                            <div className="row">
                                <div className="col-md-3">
                                    <label className="form-label">Full Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Email <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Mobile</label>
                                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} name="" id="" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Role</label>
                                    <select name="" className='form-control' value={role} onChange={(e) => setRole(e.target.value)} id="">
                                        <option value="">--select role--</option>
                                        <option value="manager">Manager</option>
                                        <option value="counselor">Counselor</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label className="form-label">Select Center</label>
                                    <select name="" className='form-control' value={center} onChange={(e) => setCenter(e.target.value)} id="">
                                        <option value="">--select center--</option>
                                        {
                                            centers.map((c) => (
                                                <option key={c._id} value={c.name}>{c.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="row my-4">
                                    <div className="col-md-2 d-flex justify-content-sm-start">
                                        <input type="submit" value="Add User" className='mx-auto d-block w-100' />
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

                <div className="row shadow-lg py-4 rounded-2">
                    <h3  >Existing User</h3>
                    <div className="col-md-8 d-flex flex-wrap gap-1 pb-2 py-4">
                        <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Copy</button>
                        <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Excel</button>
                        <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>PDF</button>
                        <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Column visibility</button>
                        <button className='botn rounded-1 border border-2 border-secondary px-2 py-1 text-muted'>Show 10 rows</button>
                    </div>
                    <div className="col-md-4  d-flex justify-content-md-end pb-2">
                        <label htmlFor="" className='pt-2 pe-2'>Search: </label><input type="search" className='w-50 px-md-2 rounded-1 form-control' />

                    </div>
                    <div className="col-12 col-md-12">
                        <div className="table-responsive">
                            <table className='table table-hover'>
                                <thead style={{ textAlign: 'center' }}>
                                    <tr>
                                        <th>Sr.no</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Role</th>
                                        <th>Center</th>
                                        <th>Status</th>
                                        <th colSpan={3}>Action</th>
                                    </tr>
                                </thead>

                                <tbody style={{ textAlign: 'center' }}>
                                    {
                                        data.map((u, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{u.name}</td>
                                                <td>{u.email}</td>
                                                <td>{u.number}</td>
                                                <td>{u.role}</td>
                                                <td>{u.center}</td>
                                                <td><small> {u.status === "u" ? "Active" : "Deactive"} </small> </td>
                                                <td><button onClick={()=>{ changeStatus(u._id,u.status) }} className={`btn ${u.status=="u"?"btn-danger":"btn-success"} text-white`}>{u.status === "u" ? "Deactive" : "Active"}</button></td>
                                                <td><button className='btn bg-warning text-white' onClick={() => {
                                                    setName(u.name);
                                                    setEmail(u.email);
                                                    setNumber(u.number);
                                                    setRole(u.role);
                                                    setCenter(u.center);
                                                    setEditid(u._id)
                                                }}>Edit</button></td>
                                                <td><button className='btn bg-danger text-white' onClick={() => {
                                                    deluser(u._id);
                                                }}>Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aduser
