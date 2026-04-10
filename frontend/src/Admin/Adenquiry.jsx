import React, { useEffect, useState } from 'react'
import Head from '../Components/Head'
import axios from 'axios'
import { toast } from 'react-toastify';

function Adenquiry() {

  const[fullName,setFullName]=useState("")
  const[course,setCourse]=useState("");
  const[center,setCenter]=useState("");
  const[year,setYear]=useState("");
  const[email,setEmail]=useState("");
  const[source,setSource]=useState("");
  const[branch,setBranch]=useState("");
  const[college,setCollege]=useState("")
  const[contactNumber,setContactNumber]=useState("");
//  const[program,setProgram]=useState("");
const [forprogram, setForProgram] = useState("");
  
  const[centers,setCenters]=useState([])

  // const getcenter = async(e)=>{
  //   const res = await axios.get('http://localhost:5000/api/center/')
  //   if(res.data.msg=="Success"){
  //     var x = res.data.center;
  //     x = x.filter((e)=> e.status=="Active");
  //     setCenters(x)
  //   }
  // }
  // useEffect(()=>{
  //   getcenter()
  // },[])

  const getcenter = async () => {
        const res = await axios.get('http://localhost:5000/api/center/');
        console.log(res.data)
        if (res.data.msg == "Success") {
            var x = res.data.center;
            x = x.filter((e) => e.status === "Active");
            // console.log(x); 
            setCenters(x);
        }
    }

    useEffect(() => {
        getcenter();
        
    }, [])


  const postdata = async (e) => {
    e.preventDefault()
    const user = { center, source, fullName, college, branch, course, year, contactNumber, email , forprogram}
    console.log(user);
    const res = await axios.post('http://localhost:5000/api/enq/', user)
    if (res.data.msg == "success") {
      toast.success("Enquiry submitted successfull")
      setFullName("");
      setEmail("")
      setForProgram("");
      setCourse("");
      setSource("");
      setCollege("");
      setBranch("")
      setCenter("");
      setContactNumber("");
      setCourse("");
    }
  }

  return (
    <>
      <div className="container-fluid mt-2">
        <Head/>
        <div className="row">
          <div className="col-md-10 mx-auto">
            
            <form action="" onSubmit={postdata}>
            <div className="row rounded-2 shadow form-box pt-4 mt-4 p-3">
              <h4 className='text-center' >Student Enquiry</h4>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="floating-label">Location *</label>
                  <select className="custom-select" value={center} onChange={(e)=>setCenter(e.target.value)}>
                    <option>-- Select Center --</option>
                    {
                      centers.map((c) => (
                        <option key={c._id} value={c.name}>{c.name}</option>
                      ))
                    }
                  </select>
                </div>
                <br />
                <input type="text" placeholder='Full Name' className='custom-select1' value={fullName}  onChange={(e)=>setFullName(e.target.value)}/>
                <br /><br />
                <input type="text"  placeholder='Course' className='custom-select1' value={course} onChange={(e)=>setCourse(e.target.value)}/>
                 <br /><br />
                 <input type="text" placeholder='Year' className='custom-select1' value={year} onChange={(e)=>setYear(e.target.value)} />
                 <br /><br />
                 <input type="text" placeholder='Email' className='custom-select1'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="col-md-6 mt-4 mt-md-0">
                 <div className="form-group">
                  <label className="floating-label">Source</label>
                  <select className="custom-select"  value={source} onChange={(e)=>setSource(e.target.value)}>
                    <option>Walk-in</option>
                  
                  </select>
                </div>
                  <br />
                <input type="text" placeholder='College' className='custom-select1' value={college} onChange={(e)=>setCollege(e.target.value)}/>
                <br /><br />
                <input type="text" placeholder='Branch' className='custom-select1' value={branch} onChange={(e)=>setBranch(e.target.value)}/>
                <br /><br />
                <input type="text" placeholder='Contact Number*' className='custom-select1' value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)}/>
                <br /><br />
                  <div className="form-group">
                  <label className="floating-label">Program</label>
                  <select className="custom-select" placeholder='Select' value={forprogram} onChange={(e)=>setForProgram(e.target.value)}>
                    <option>Select Program</option>
                      <option>Summer Training</option>
                      <option>Vocational Training</option>
                      <option>Industrial Training</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 text-center">
                <button type="submit" className='
                btn bg-primary text-white rounded-5 px-3 p-1 mt-3' >Save Enquiry</button>
              </div>
            </div>
              </form >
          </div>
        </div>
      </div>
    </>
  )
}

export default Adenquiry
