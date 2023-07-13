import React, { useState } from 'react'
import{toast} from'react-toastify'
import './style/insert.css';
import { NavLink } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
function Insert() {
const [fname,setFname]=useState("");
const [lname,setLname]=useState("");
const [email,setEmail]=useState("");
const [number,setNumber]=useState("");
const [edu,setEdu]=useState("");


 const  hii = async (e)=>{
  e.preventDefault();
  console.log("hii");
    console.warn({fname,lname,email,number,edu});
    let result= await fetch("http://localhost:5000",{
      method:'post',
      body: JSON.stringify({fname,lname,email,number,edu}), 
      headers:
      {'Content-Type':'application/json'},
    });
    let data=await result.json()
    console.warn(data);
    if(data=result){
      alert('data Inserted Successfully');
    }

  };
  return (
    <div>
      <div className='allpage'>
      <div className='form'>
      <form >
        <div className='inputs'>
        <input type='text' placeholder='Enter Name' 
        value={fname} onChange={(e)=>setFname(e.target.value)}/><br/><br/>
        <input type='text' placeholder='Enter lastName'
        value={lname} onChange={(e)=>setLname(e.target.value)}/><br/><br/>
        <input type='text' placeholder='Enter Email' 
        value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <input type='number'placeholder=' Contact No.'
        value={number} onChange={(e)=>setNumber(e.target.value)}/><br/><br/>
        <input type='text' placeholder='Qualification' 
        value={edu} onChange={(e)=>setEdu(e.target.value)}/><br/><br/>
        </div>
        <div className='butn'>
        <input type='submit' value='Submit' onClick={hii} />
        <input type='reset' value='Reset'/>
        </div>
      </form>
      <div>
        <NavLink to="/"><button>Back To Home Page</button></NavLink>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Insert;
