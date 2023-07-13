import React, { useState } from 'react'
import './style/fname.css';
function Updateemail() {

  const [email,setEmail]=useState("");
  const [uemail,SetUemail]=useState("");

  async function sub(e){
    e.preventDefault();
    console.warn({email,uemail});
    let result= await fetch("http://localhost:5000/update/email",{
      method:'put',
      body: JSON.stringify({email,uemail}),
      headers:
      {'Content-Type':'application/json'},
    });
    let data= await result.json();
    console.log(data);
    if(data=result){
      alert('Updated Email Successfully');
    }
  }

  return (
    <div>
      <h1>Update email Here</h1>
      <div className='fname'>
        <form>
        <div className='inn'>
            <div className='inputt'>
                <input type='text' placeholder='enter Last email' name='data'
                value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/> 
                <input type='text' placeholder='enter Email for Update' name='udata'
                value={uemail} onChange={(e)=>SetUemail(e.target.value)}/><br/><br/> 
                <button onClick={sub}>Submit</button>
            </div>
        </div>  
        </form>
      </div>
    </div>
  )
}

export default Updateemail;
