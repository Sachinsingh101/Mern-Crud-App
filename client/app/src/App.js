// import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar.js';
import Adduser from './components/adduser';
import Getallusers from './components/alluser';
import Edituser from './components/edituser.js'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Adduser/>}/>
        <Route path="/get" element={<Getallusers/>}></Route>
        <Route path={`/Edit/:id`} element={<Edituser/>}></Route>
      </Routes>
    </>
  );
}

export default App;
