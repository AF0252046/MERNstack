import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import './style/update.css'
function Update() {
  return (
    <div>
      <div className='all'>
      <div className="Buttn">
      <h1 style={{textAlign:"center",color:"red"}}>Employee Mnagement Syatem</h1>
        
        <NavLink to="/update/fname"><button className="button">Update First Name</button><br/><br/></NavLink>
        <NavLink to="/update/lname"><button className="button">Update Last Name</button><br/><br/></NavLink>
        <NavLink to="/update/email"><button className="button">Update Email</button><br/><br/></NavLink>
        <NavLink to="/update/contact"><button className="button">Update Contact number</button><br/><br/></NavLink>
        <NavLink to="/update/education"><button className="button">Update Qualification</button><br/><br/></NavLink>
        
        
        <div>
        <NavLink to="/"><button>Back To Home Page</button></NavLink>
        </div>
        </div>
        <div className='hii'>
        <div className='mainn'>
        <Outlet/>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Update;
