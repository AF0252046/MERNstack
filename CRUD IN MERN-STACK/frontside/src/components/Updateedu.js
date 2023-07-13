import React, { useState } from 'react'
import './style/fname.css';



function Updateedu() {

const [email,setEmail]=useState("");
const [uedu,setUedu]=useState("");

async function submit(e){
    e.preventDefault();

    let result=  await fetch("http://localhost:5000/update/qualification",{
      method:'put',
      body:JSON.stringify({email,uedu}),
      headers:
      {'Content-Type':'application/json'}
    });
    let data= await result.json();
    console.log(data);
    if(data=result){
      alert('Updated Qualification Successfully');
    }
}
  return (
    <div>
      <h1>Hi Update Qualification Here</h1>
      <div className='fname'>
        <form>
        <div className='inn'>
            <div className='inputt'>
                <input type='text' placeholder='Enter Email'
                value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/> 
                <input type='text' placeholder='enter Qualification for Update'
                value={uedu} onChange={(e)=>setUedu(e.target.value)}/><br/><br/> 
                <button onClick={submit}>Submit</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Updateedu;
