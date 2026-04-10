import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Addash from './Admin/Addash'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adviewenq from './Admin/Adviewenq'
import Adlayout from './Admin/Adlayout'
import Center from './Admin/Center'
import Visit from './Admin/Visit'
import Aduser from './Admin/Aduser'
import Mgdash from './Manager/Mgdash'
import Adenquiry from './Admin/Adenquiry'
import Couns from './Counselor/Couns'
import Counlayout from './Counselor/Counlayout'
import Counsdash from './Counselor/Counsdash'
import Counsenq from './Counselor/Counsenq'
import Coviewenq from './Counselor/Coviewenq'
import Mgviewenq from './Manager/Mgviewenq'
import Mglayout from './Manager/Mglayout'
import { ToastContainer } from 'react-toastify'
import Mgvisit from './Manager/Mgvisit'
import Mgsenq from './Manager/Mgsenq'
import CounChpass from './Counselor/CounChpass'
import CounProfile from './Counselor/CounProfile'
function App() {
return(
<>

  <div className="conatiner-fluid g-0">
      <ToastContainer />
        <BrowserRouter>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          
          <Route path='/admin/' element={ <Adlayout/> } >
            <Route path='' element={ <Addash/> } />
            <Route path='viewenq' element={ <Adviewenq/> } />
            <Route path='center' element={ <Center/> } />
            <Route path='visit' element={ <Visit/> } />
            <Route path='user' element={ <Aduser/> } />
            <Route path='adenqu' element={<Adenquiry/>}/>
          </Route>
          
          <Route path='/manager/' element={<Mglayout/>}>
            <Route path='' element={<Mgdash/>}/>
            <Route path='mgenq' element={<Mgviewenq/>}/>
            <Route path='mview' element={<Mgvisit/>}/>
            <Route path='msenq' element={<Mgsenq/>}/>
          </Route>

          <Route path='/counselor' element={<Counlayout/>}>
            <Route path="" element={<Counsdash/>}/>
            <Route path="changepassword" element={<CounChpass/>}/>
            <Route path='consenq'  element={<Counsenq/>}/>
            <Route path='coview' element={<Coviewenq/>}/>
            <Route path='myprofile' element={<CounProfile/>}/>
            {/* <Route path='csenq'  element={<Counsenq/>}/> */}
          </Route>
        </Routes>

      </BrowserRouter>
  </div>
  </>
)
  
}

export default App
