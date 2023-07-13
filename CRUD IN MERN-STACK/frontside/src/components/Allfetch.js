import React, { useEffect, useState } from 'react'

  function Allfetch() {

    const [data,setData]=useState([]);
    
        async  function Sub(){
          let result= await  fetch("http://localhost:5000");
          let datat= await result.json();
          setData(datat);
          console.log(data);
         
        }
       useEffect(()=>{
        Sub();
       })

  return (
    <div>
        <h1>All Employee Details</h1><br/><br/>
        <div style={{paddingLeft:'180px'}}>
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
      
    </div>
  )
}

export default Allfetch;
