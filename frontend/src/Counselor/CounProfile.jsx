import React, { useEffect, useState } from 'react'
import bg1 from '../assets/bg1.webp'
import a1 from '../assets/a1.webp'
import {toast} from 'react-toastify'
import axios from 'axios';
function CounProfile() {
    const [user , setUser] = useState({});
    const [check , setCheck] = useState(false);
    const [qua,setQua] = useState("");
    const [skill,setSkill] = useState("");
    const [exp,setExp] = useState("");
    const [address,setAddress] = useState("");
    const getuser = async ()=>{
        const res = await axios.get(`http://localhost:5000/api/user/${localStorage.getItem('counselor')}`);
        if(res.data.msg=="success"){
            setUser(res.data.user);
            setQua(res.data.user.qua || "")
            setSkill(res.data.user.skill|| "")
            setExp(res.data.user.exp|| "")
            setAddress(res.data.user.address||"")
        }
    }
    async function updateProfile(){
        if(check){
            const datauser = {qua,exp,skill,address};
            const res = await axios.put(`http://localhost:5000/api/user/${localStorage.getItem('counselor')}`,datauser);
            if(res.data.msg=="success"){
                toast.success("Update Success"); 
                getuser();
            }
            else{
                toast.error("Something Went Wrong");
            }
        }
    }
   async function uploadPic(p) {
  if (p) {
    const formData = new FormData();
    formData.append("profilePic", p);   // 👈 important

    try {
      const res = await axios.patch(
        `http://localhost:5000/api/user/${localStorage.getItem('counselor')}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res);

      if (res.data.msg === "success") {
        toast.success("Pic Uploaded");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error uploading image");
    }
  } else {
    toast.error("No Image Selected");
  }
}
    useEffect(()=>{
        getuser();
    },[])
  return (
   <>
   <div className="row py-4" style={{backgroundImage:`url(${bg1})`, height:"85vh", backgroundSize:"Cover", overflow:"auto"}}>
    <div className="col-md-5  p-3 mx-auto rounded-4 shadow-lg" style={{backgroundColor:"white" }}>
       <div className='position-relative '>
         <img src={a1} className='w-50 h-25 mx-auto  d-block rounded-5 shadow'style={{filter:`drop-shadow(5px 5px 10px grey)`}} alt="" />
         <label htmlFor="profilePic" className='bg-danger'>
        <i className="fa fa-pen position-absolute py-2 bg-info text-primary  rounded-circle" style={{right:"28%", bottom:"14%", width:"30px",boxShadow:"2px 2px 5px inset grey, 2px 2px 5px grey"}}></i>
         </label>
         <input type="file" onChange={(e)=>{uploadPic(e.target.files[0])}} style={{display:"none"}} name="" id="profilePic" />
       </div>
        <div className="row mt-5 ms-3">
            <div className="col-md-12">
                <h6>Name : {user.name}</h6>
            </div>
            <div className="col-md-12">
                <h6>Mobile : {user.number}</h6>
            </div>
      
            <div className="col-md-12">
                <h6>Email : {user.email}</h6>
            </div>
            <div className="col-md-12">
                <h6>Role : {user.role}</h6>
            </div>
        
            <div className="col-md-12 " >
                <h6>Center : {user.center}</h6>
            </div>
            <div className="col-md-12 " >
                <h6>Qualification : {check? <input className='w-100' type="text" value={qua} onChange={(e)=>setQua(e.target.value)} /> : qua || "---" }</h6>
            </div>
            <div className="col-md-12 " >
                <h6>Skills : {check? <input className='w-100' type="text" value={skill} onChange={(e)=>setSkill(e.target.value)} /> : skill || "---" }</h6>
            </div>
            <div className="col-md-12 " >
                <h6>Experience  : {check? <input className='w-100' type="text" value={exp} onChange={(e)=>setExp(e.target.value)} /> : exp || "---" }</h6>
            </div>
            <div className="col-md-12 " >
                <h6>Address  : {check? <textarea className='w-100' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} ></textarea> : address || "---" }</h6>
            </div>
        </div>
           <div className="row">
             <div className="col-md-12 " >
                <button onClick={()=>{setCheck(!check); updateProfile() } }  className='btn btn-warning form-control mt-5' >Update</button>
            </div>
           </div>
    </div>
    <div className="col-md-6 mx-auto" >
        <div className="row h-50 pb-2">
            <div className="col-md-12 p-3 rounded-3 shadow-lg" style={{backgroundColor:"white"}}></div>
        </div>
        <div className="row  h-50 pt-2">
            <div className="col-md-12 p-3 rounded-3 shadow-lg" style={{backgroundColor:"white"}}></div>
        </div>
    </div>
   </div>
   </>
  )
}
export default CounProfile
