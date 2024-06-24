import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/Admin-Layout';
import { AdminContacts } from './pages/Admin-Contact';
import { AdminUsers } from './pages/Admin-Users';
import { AdminUpdate } from './pages/Admin-Update';


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/register' element={<Register/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='*' element={<Error></Error>}></Route>


        <Route path='/admin' element={<AdminLayout></AdminLayout>}>
           <Route path='users' element={<AdminUsers></AdminUsers>}></Route>
           <Route path='contacts' element={<AdminContacts></AdminContacts>}></Route>
           <Route path='users/:id/edit' element={<AdminUpdate></AdminUpdate>}></Route>
        </Route>
        <Route></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;