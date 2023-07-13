import React, { useState } from 'react'
import './style/fname.css';


function Updatelname() {
  const [email,setEmail]=useState("");
const [ulname,setUlname]=useState("");
 async function submit(e){
    e.preventDefault();
    let result= await fetch("http://localhost:5000/update/lname",{
      method:'put',
      body:JSON.stringify({email,ulname}),
      headers:
      {'Content-Type':'application/json'}
    });
    let data= await result.json();
    console.log(data);
    if(data=result){
      alert('Updated Last Name Successfully');
    }
};
  return (
    <div>
      <h1>Here Update Last Name</h1>
      <div className='fname'>
        <form>
        <div className='inn'>
            <div className='inputt'>
                <input type='text' placeholder='Enter Email'
                value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/> 
                <input type='text' placeholder='enter Last Name for Update'
                value={ulname} onChange={(e)=>setUlname(e.target.value)}/><br/><br/> 
                <button onClick={submit}>Submit</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Updatelname;
