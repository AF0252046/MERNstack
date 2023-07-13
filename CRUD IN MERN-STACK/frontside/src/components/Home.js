import React from "react";
import './style/homee.css';
import { Link,NavLink } from "react-router-dom";
function Home(){
    return(
        <>
        <h1 style={{textAlign:"center",color:"red"}}>Employee Mnagement Syatem</h1>
        <div className="Butt">
        <NavLink to="/insert"><button className="button">Add New Employee</button><br/><br/></NavLink>
        <NavLink to="/update"><button className="button">Update Employee's Detail</button><br/><br/></NavLink>
        <NavLink to="/delete"><button className="button">delete Employee</button><br/><br/></NavLink>
        <NavLink to="/fetch"><button className="button">Fetch All Employees Details</button><br/><br/></NavLink>
        </div>
        </>
    )
}
export default Home;
