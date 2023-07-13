import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Insert from './components/Insert';
import Update from './components/Update';
import Delete from './components/Delete';
import Fetch from './components/Fetch';
import Updatefname from './components/Updatefname';
import Updatelname from './components/Updatelname';
import Updateemail from './components/Updateemail';
import Updatecontact from './components/Updatecontact';
import Updateedu from './components/Updateedu';
import Allfetch from './components/Allfetch';
import Fetchone from './components/Fetchone';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>     
      <Route path="/" element={<Home/>}/>
      <Route path="/insert" element={<Insert/>}/>
      <Route path="/update/" element={<Update/>}>
        <Route path='fname' element={<Updatefname/>}/>
        <Route path='lname' element={<Updatelname/>}/>
        <Route path='email' element={<Updateemail/>}/>
        <Route path='contact' element={<Updatecontact/>}/>
        <Route path='education' element={<Updateedu/>}/>
      </Route>
      <Route path="/delete" element={<Delete/>}/>
      <Route path="/fetch/" element={<Fetch/>}>
        <Route path='allusers' element={<Allfetch/>}/>
        <Route path='singlee' element={<Fetchone/>}/>
      </Route>
    </Routes> 
    </BrowserRouter>
   
  );
}

export default App;
