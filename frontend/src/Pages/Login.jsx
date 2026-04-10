import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const logcode = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const responce = await axios.post('http://localhost:5000/api/admin/login', user);
    console.log(responce);
    if (responce.data.msg == "success") {
      toast.success("Login Success");
      // localStorage.setItem('admin',responce.data.user);
      localStorage.setItem(responce.data.role, responce.data.id);
      setUsername("");
      setPassword("");
      if (responce.data.role === "admin") {
        navigate('/admin');
      }
      else if (responce.data.role == "manager") {
        navigate('/manager');
      }
      else {
        navigate('/counselor')
      }

    }
     else {
   toast.error(responce.data.msg)
    setPassword("");
  }

}
function showpass(){
  const t=document.querySelector('input[name=password]');
  if(t.type=="password"){ 
    t.type="text";
    eye.className="fa-solid fa-eye eye";
  }
  else{
    eye.className="fa-solid fa-eye-slash eye";
    t.type="password";
  }

}

const validate = () => {
  if (localStorage.getItem('admin')) {
    localStorage.removeItem('admin');
  }
  if (localStorage.getItem('manager')) {
    localStorage.removeItem('manager');
  }
  if (localStorage.getItem('counselor')) {
    localStorage.removeItem('counselor');
  }

}

useEffect(() => {
  validate()
}, []);
return (
  <>
    <div className="row m-0" style={{ backgroundColor: '#fffaf7', minHeight: '100vh' }}>
      <div className="col-sm-12">
        <div className="container">
          <div className="login-card">
            <img src="/spi.png" alt="CRM Logo" className='image' />
            <h5 className='text-center text-light'>CRM</h5>
            <div className="texticon mt-1">
              <h5>Welcome Back 👋</h5>
              <p className='text-muted'>Sign in to continue</p>

              {/* <div className="form-sec"> */}
              <form method='post' onSubmit={logcode}>
                <label className='text-dark'>Username *</label>
                <br />
                <input type="text" name='name' placeholder='Enter username' required className='mt-2' value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <div className="input-box">
                  <label className='mt-1 text-dark '>Password  *</label>
                  <br />
                  <input type="password" name='password' placeholder='Enter password' required className='mt-2' value={password} onChange={(e) => setPassword(e.target.value)} />
                 <span onClick={showpass}> <i id="eye" className='fa-solid fa-eye-slash eye'></i></span>
                </div>
                <button type='submit' className='btn w-100 logint text-white mt-2  px-5'  >
                  <i className='fa fa-sign-in-alt text-white'></i>
                  Sign In</button>
              </form>
              <div className="footer mt-4 me-2" style={{ backgroundColor: '#fff6ef', borderRadius: '10px' }}>
                <p className="text-center text-muted p-2">
                  Designed & Developed By <span className='so'>Softpro India Computer <br />
                    Technologies (P). Ltd.</span>
                </p>
              </div>

              {/* </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default Login
