import React, { useEffect, useState } from 'react'
import { NavLink,Outlet} from 'react-router-dom';
import './style/update.css';

function Fetch() {
  return (
    <>
    <div className='all'>
    <div className="Buttn">
    <h1 style={{textAlign:"center",color:"red"}}>Employee Mnagement Syatem</h1>
      
      <NavLink to='/fetch/allusers'><button className="button">Fetch All User Details</button><br/><br/></NavLink>
      <NavLink to='/fetch/singlee'><button className="button">Fetch  User Details</button><br/><br/></NavLink>

      
      <div>
      <NavLink to="/"><button className='button'>Back To Home Page</button></NavLink>
      </div>
      </div>
      <div className='hii'>
      <div className='mainn'>
      <Outlet/>
      </div>
      </div>
     
      <div className='hii'>
        <div className='mainn'>
        <Outlet/>
        </div>
        </div>
      </div>
    </>
  )
}

export default Fetch;
