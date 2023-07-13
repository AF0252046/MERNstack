import React, { useState } from 'react'

function Fetchone() {

    const [email,setEmail]=useState("");
    const [data,setData]=useState([]);

    async function sub(e){
        e.preventDefault();

        var requests={ method:'get',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json'
        },
        params:{email},
      }
        let result= await fetch("http://localhost:5000/single",requests);
        
        let datat= await result.json();
        setData(datat)
        console.log(data);
    }
  return (
    <>
    <div>
      
      <input type='text' placeholder='Enter Email'
      value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <button onClick={sub}>Fetch</button>
    </div>
    <div>
    <table border='1' style={{width:"500px"}}>
      <tbody>
      <tr>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>Contact No.</td>
        <td>Qualification</td>
      </tr>
      {
        data.map((item)=>
         <tr>
         <td>{item.id}</td>
         <td>{item.fname}</td>
         <td>{item.lname}</td>
         <td>{item.email}</td>
         <td>{item.number}</td>
         <td>{item.edu}</td>
       </tr>
        )
      }
      </tbody>
    </table>
    </div>

    </>
  )
}

export default Fetchone
