import React, { useState } from 'react'
import './style/delete.css'
import { NavLink } from 'react-router-dom';

function Delete() {

  const [email,setEmail]=useState("");


   async function del(e){
    e.preventDefault();

    let result= await fetch("http://localhost:5000/delete",{
      method:'delete',
      body:JSON.stringify({email}),
      headers:
      {'Content-Type':'application/json'}
    });
    let data= await result.json();
    console.log(data);
    if(data=result){
      alert('data Deleted Successfully');
    }
    
  }
  return (
    <div>
      <h1 style={{textAlign:"center",color:"red"}}> Delete Employee Here</h1>
    <div className='alldel'>
      <div className='del'>
      <h1 style={{color:'red'}}> Delete Employee</h1><br/>
        <form>
          <input type='text' placeholder='Enter Email Of Employee'
          value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
          <button onClick={del}>Delete Employee</button><br/><br/>
          <NavLink to="/"><button style={{backgroundColor:'skyblue'}}>Back To Home</button></NavLink> 
         </form>
      </div>
      </div>
    </div>
  )
}

export default Delete;