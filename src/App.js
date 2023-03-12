
import './App.css';
import Login from './Components/Login';
import Splashscreen from './Components/Splashscreen';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import {Route, Routes} from "react-router-dom";
import Category from './Components/Category';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    
<Route path="/Splashscreen" element={ <Splashscreen/>}></Route>
<Route path="/Login" element={<Login/>}></Route>
<Route path="/Signup" element={<Signup/>}></Route>
<Route path="/" element={<Login/>}></Route>
<Route path="/Category" element={<Category/>}></Route>
    </Routes>
   
    <div className="App">
     
     
    </div>
    </>
  );
}

export default App;
