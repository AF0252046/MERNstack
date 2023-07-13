import React, { useState } from 'react'
import './style/fname.css';



function Updatecontact() {
  const [contact,setContact]=useState("");
const [ucontact,setUcontact]=useState("");


  async function submit(e){
  e.preventDefault();
  let result= await fetch("http://localhost:5000/update/contact",{
    method:'put',
    body:JSON.stringify({contact,ucontact}),
    headers:
    {'Content-Type':'application/json'}
  });
  let data= await result.json();
    console.log(data);
    if(data=result){
      alert('Updated Contact Successfully');
    }
}
  return (
    <div>
      <h1>Hii Update contact here</h1>
      <div className='fname'>
        <form>
        <div className='inn'>
            <div className='inputt'>
                <input type='number' placeholder='enter Last contact nnumber'
                value={contact} onChange={(e)=>setContact(e.target.value)}/><br/><br/> 
                <input type='number' placeholder='enter number for Update'
                value={ucontact} onChange={(e)=>setUcontact(e.target.value)}/><br/><br/> 
                <button onClick={submit}>Submit</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Updatecontact;
