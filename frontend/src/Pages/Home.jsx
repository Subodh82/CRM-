import React, { useEffect } from 'react'
import Card1 from '../Components/Card1'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'


function Home() {
  const [fullName, setFullName] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [role, setRole] = useState("Student");
  const [center, setCenter] = useState("");
  const [status, setStatus] = useState("u");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [remark, setRemark] = useState("");
  const[address,setAddress]=useState("");


   const [centers, setCenters] = useState([]);



  const addenq = async (e) => {
    e.preventDefault();
    const enq = { fullName, college, course, branch, year, contactNumber, email, purpose, role, center, status };
    console.log(enq);
    const responce = await axios.post('http://localhost:5000/api/enq', enq);
    if (responce.data.msg == "success") {
      
  Swal.fire({
  title: 'Added!',
  text: 'Do you want to continue',
  icon: 'success',
  confirmButtonText: 'Cool'
})
      setFullName("");
      setCollege("");
      setCourse("");
      setBranch("");
      setYear("");
      setContactNumber("");
      setEmail("");
      setPurpose("");
      setRole("Student");
      setCenter("");
    }

  }

const addvisitor = async(e)=>{
  e.preventDefault()

  const visitData = {name,contact,email,purpose,remark,role,center,address}
  const res = await axios.post('http://localhost:5000/api/visitor/',visitData)
  if(res.data.msg=="Success"){
    window.alert("visito added");
    setName("");
    setContact("");
    setEmail("");
    setPurpose("")
    setRemark("");
    setRole("Student");
    setCenter("")
    setAddress("");

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

 


  let FormData;
  if (role === "Student") {
    FormData = (


      <>
      
        <div className="row mt-2 p-3">
          <div className="col-sm-6">
            <label htmlFor="" className='ms-3'>Full Name</label>
            <div className='input-icon'>
              <i className="fa-solid fa-user"></i>
              <input type="text" value={fullName} onChange={(e) => { setFullName(e.target.value) }} placeholder='e.g. subodh' />
            </div>
          </div>
          <div className="col-sm-6">
            <label htmlFor="" className='ms-3'>College</label>
            <div className='input-icon'>
              <i className="fa-solid fa-building"></i>
              <input type="text" value={college} onChange={(e) => { setCollege(e.target.value) }} placeholder='Your College Name' />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Course</label>
            <div className='input-icon'>
              <i className="fa-solid fa-graduation-cap"></i>
              <input type="text" value={course} onChange={(e) => { setCourse(e.target.value) }} placeholder='e.g., B.Tech / BCA / MCA' />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Branch</label>
            <div className='input-icon'>
              <i className="fa-solid fa-sitemap"></i>
              <input type="text" value={branch} onChange={(e) => { setBranch(e.target.value) }} placeholder='e.g., CSE / IT / ECE' />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Year</label>
            <div className='input-icon'>
              <i className="fa-solid fa-calendar"></i>
              <input type="text" value={year} onChange={(e) => { setYear(e.target.value) }} placeholder='e.g., 4th Year"' />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Contact Number </label>
            <div className='input-icon'>
              <i className="fa-solid fa-phone"></i>
              <input type="tel" value={contactNumber} onChange={(e) => { setContactNumber(e.target.value) }} placeholder='10-digit mobile' />
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Email</label>
            <div className='input-icon'>
              <i className="fa-solid fa-envelope"></i>
              <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='e.g., sub@gmail.com"' />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Purpose </label>
            <div className='input-icon'>
              <i className="fa-solid fa-list-check"></i>
              <select name="" id="" value={purpose} onChange={(e) => { setPurpose(e.target.value) }}>
                <option value="">- Select Purpose -</option>
                <option >Enquiry</option>
                <option >Registration </option>
                <option >Reporting</option>
                <option >Certificate Work</option>
              </select>
            </div>
          </div>
        </div>
      </>
    )
  }
  else if (role === "Visitoro") {
    FormData = (
      <>
        {/* 2 */}
        <form action="" onSubmit={addvisitor}>
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Name</label>
            <div className='input-icon'>
             <i className="fa-solid fa-id-badge"></i>
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Visitor name' />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Contact</label>
            <div className='input-icon'>
             <i className="fa-solid fa-phone"></i>
              <input type="text" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder='10-digit mobile' />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Email</label>
            <div className='input-icon'>
              <i className="fa-regular fa-envelope"></i>
              <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='name@examplegmailcom' />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Purpose </label>
            <div className='input-icon'>
              <i className="fa-solid fa-list-check"></i>
              <input type="tel" value={purpose} onChange={(e) => { setPurpose(e.target.value) }} placeholder='eg. Purpose of visit' />
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="row p-3">

          <div className="col-md-12">
            <label htmlFor="" className='ms-3'>Remark </label>
            <div className='input-icon'>
              <i class="fa-regular fa-comment-dots"></i>
              <input type="text" value={remark} onChange={(e) => { setRemark(e.target.value) }}  placeholder='Any remark (optional)'/>
            </div>
          </div>
        </div>
        </form>
      </>
    )
  }
    else if (role === "Visitorp"){
       FormData = (
      <>
        {/* 2 */}
        {/*      */}
        <form action="">
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Name</label>
            <div className='input-icon'>
             <i className="fa-solid fa-id-badge"></i>
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Visitor name' />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Contact</label>
            <div className='input-icon'>
             <i className="fa-solid fa-phone"></i>
              <input type="text" value={contact} onChange={(e) => { setContact(e.target.value) }} placeholder='10-digit mobile' />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="row p-3">
          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Email</label>
            <div className='input-icon'>
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Visitor email address' />
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="" className='ms-3'>Address</label>
            <div className='input-icon'>
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} placeholder='Visitor email address' />
            </div>
          </div>

        </div>
        </form>
        {/* 4 */}
        {/* <div className="row p-3">

          <div className="col-md-12">
            <label htmlFor="" className='ms-3'>Address</label>
            <div className='input-icon'>
              <i class="fa-regular fa-comment-dots"></i>
              <input type="text" value={remark} onChange={(e) => { setRemark(e.target.value) }}  placeholder='Any remark (optional)'/>
            </div>
          </div>
        </div> */}
      </>
    )

    }
  return (
    <>
      <Navbar />
      <div className="container">

        <div className="row mt-5 shadow " id='main'>
          <div className="col-lg-4 order-2 order-lg-1 ps-4">
            <h5 className='ps-2 mt-4 fw-bold'>Contact Us</h5>
            <div className='icon'>
              <i className="fa-solid fa-phone-volume fa-shake"></i>  Call: +91 7080102006, 7080462022
              <br />
              <i className="fa-solid fa-envelope fa-bounce"></i>  Email: hr@softproindia.in
            </div>
            {/* card */}
            <Card1 head=' Softpro Head Office' par='Softpro Tower, Near New Hanuman Temple, Kapoorthala, Aliganj,' par1='Lucknow - 226006.' str='Mobile Number: +91 7080102007' />
            {/* card 2 */}
            <Card1 head='  Softpro House Lucknow' par='3/213, Sector J, Jankipuram, Kursi Rd,' par1='Near Gudamba Thana, Lucknow' par2='Uttar Pradesh-226026.' str='Mobile Number:  +91 7080462022' />
            {/* card 3 */}
            <Card1 head='  Softpro Full Stack Academy' par='1/6, Vastu Khand, Gomtinagar,' par1='Lucknow -226010.' str='Mobile Number:   +91 7080422022' />
            {/* card 4 */}
            <Card1 head='  Softpro Noida Office' par='Creatons Business Park,' par1='Ground Floor, H - 35, Sec 63,' par2='Noida Gautam Buddha Nagar, UP - 201301.' str='Mobile Number:   +91 7080102006' />
          </div>
          <div className="col-lg-8 order-1 order-lg-2 ps-4 mt-4 mb-5">
            
            {/* <form onSubmit={role === "Visitoro" ? addvisitor : addenq}> */}
            <form onSubmit={role === "Student" ? addenq : addvisitor}>
              <div id='right-b'>
                <div className='right'>
                  <div className='enquiry-form pt-4 p-3'>
                    <span><i className="fa-regular fa-comment-dots fs-3"></i> <span id='enq'>Enquiry Form</span>  </span>
                    <hr />
                    <label htmlFor="" className='ms-3'>You are a ?</label>
                    <div className='input-icon'>
                      <i className="fa-solid fa-table-cells-large"></i>
                      <select value={role} onChange={(e) => { setRole(e.target.value) }} name="" id="">
                        <option value="Student">Student</option>
                        <option value="Visitoro">Visitor (Official)</option>
                        <option value="Visitorp">Visitor (Personal)</option>
                      </select>
                    </div>
                    {/* 2 form */}
                    <label htmlFor="" className='ms-3'>You are at ?</label>
                    <div className='input-icon'>
                      <i className="fa-solid fa-table-cells-large"></i>
                      {/* <select name="" value={center} onChange={(e) => { setCenter(e.target.value) }} id="">
                        <option value="">-- Select Center --</option>
                        <option >Softpro Noida Office</option>
                        <option >Softpro Full Stack Academy, Gomtinagar, Lucknow </option>
                        <option >Softpro House, Jankipuram, Lucknow</option>
                        <option >Softpro Tower, Kapoorthala, Lucknow</option>
                      </select> */}
                      <select name="" className='form-control' value={center} onChange={(e) => setCenter(e.target.value)} id="">
                    <option value="">--select center--</option>
                    {
                        centers.map((c) => (
                            <option key={c._id} value={c.name}>{c.name}</option>
                        ))
                    }
                </select>
                    </div>
                  </div>
                  <hr />
                </div>
                {/* 3 section after 2 */}
                <div className='stuinfo shadow'>
                  {role === "Visitoro" ? "Visitor Information" : role === "Student" ? "Student Information" : "VisitorP Information" }
                </div>

                {FormData}
                <div className="row">
                  <div className="col-md-12  d-flex justify-content-end pe-4 mb-2 ">
                    <button type='submit' className='btn btn-custom logint text-white'>
                      <i className="fa-solid fa-user-check text-white"></i> Submit Details
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
