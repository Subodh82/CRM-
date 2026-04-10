import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Head from '../Components/Head';

function Mgvisit() {

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
            toast.success("Visitor deleted")

            getvisit();

        }
        else {
            toast.error("something went wrong")
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
                                                <td>{e.enqtypes}</td>
                                                <td>
                                                    <button  className='btn bg-danger text-white'
                                                    
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
            {/*   */}
    </>
  )
}

export default Mgvisit
