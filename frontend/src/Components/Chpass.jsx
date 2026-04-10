import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Chpass(p) {
    const [cpass,setCpass] = useState("");
    const [npass,setNpass] = useState("");
    const [conpass,setConpass] = useState("");
    const [user,setUser] = useState({});
    const navigate = useNavigate();
    const chcode = async(e)=>{
        e.preventDefault();
        console.log(p);
        if(p.role!="admin"){
            const res =await  axios.get(`http://localhost:5000/api/user/${p.id}`)
            if(res.data.msg=="success"){
                setUser(res.data.user)
                var opass = res.data.user.password;
            }
            if(opass && opass!=cpass){
                toast.error("Wrong Password");
                setCpass("");
                setNpass("");
                setConpass("");
            }
            else if(opass == npass){
                toast.error("Don't Use Previous Password");
                setNpass("");
                setConpass("");
            }
            else if(npass != conpass){
                toast.error("Confirm Password Not Match")
                setNpass("");
                setConpass("");
            }
            else{
                if(p.role!="admin"){
                    const data ={"password":npass};
                    const res2=await axios.put(`http://localhost:5000/api/user/${p.id}`,data);
                    if(res2.data.msg=="success"){
                        toast.success("Password Change");
                        navigate('/login');
                    }
                    else{
                        toast.error("Something Went Wrong");
                        setCpass("")
                        setNpass("")
                        setConpass("")
                    }   
                }
            }
        }
    }
  return (
    <>
    <form action="" onSubmit={chcode} className='w-50 p-5 rounded-3 bg-info mx-auto my-5 shadow-lg'>
        <h4>Change Password</h4>
        <input className='form-control' placeholder='Current Password' value={cpass} onChange={(e)=>setCpass(e.target.value)} type="password" name="" id="" />
        <br />
        <input className='form-control' placeholder='New Password' value={npass} onChange={(e)=>setNpass(e.target.value)} type="password" name="" id="" />
        <br />
        <input className='form-control' placeholder='Confirm Password' value={conpass} onChange={(e)=>setConpass(e.target.value)} type="password" name="" id="" />
        <br />
        <input type="submit" className='btn btn-warning form-control' value="Change Password" />
    </form>
    
    </>
  )
}

export default Chpass
