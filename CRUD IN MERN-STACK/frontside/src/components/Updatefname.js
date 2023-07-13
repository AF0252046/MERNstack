import React, { useState } from 'react'
import './style/fname.css';



function Updatefname() {
  const [email,setEmail]=useState("");
const [ufname,setUfname]=useState("");


async function submit(e){
      e.preventDefault();
      let result= await fetch("http://localhost:5000/update/fname",{
        method:'put',
        body:JSON.stringify({email,ufname}),
        headers:
        {'Content-Type':'application/json'}

      });
      let data= await result.json();
    console.log(data);
    if(data=result){
      alert('Updated First Name Successfully');
    }
}
  return (
    <div>
      <h1>Hii Update First name here</h1>
      <div className='fname'>
        <form>
        <div className='inn'>
            <div className='inputt'>
                <input type='text' placeholder='Enter Email'
                value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/> 
                <input type='text' placeholder='enter first Name for Update'
                value={ufname} onChange={(e)=>setUfname(e.target.value)}/><br/><br/> 
                <button onClick={submit}>Submit</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Updatefname;
