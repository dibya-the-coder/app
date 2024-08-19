import {  Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpForm from "./component/SignUpForm";
import LoginForm from "./component/LoginForm";
import { useState } from "react";
import Data from "./component/Data";
import DataComponent from "./component/DataComponent";
import Profile from "./component/Profile";

function App() {
  const [data, setdata] = useState([])
  const setDataHandler = (newData)=>{
    setdata([...data, newData])
    console.log(data)
  }
  return (
    <Routes>
      <Route path="/" element={<SignUpForm fun={setDataHandler}/>} />
      <Route path="/login" element={<LoginForm dataSet={data}/>} />
      <Route path="/profile" element = {<Profile/>}  />
      
      <Route path="/user" element={<DataComponent/>} >
        <Route path="data" element={ <Data/>}/>
      </Route>\
    </Routes>
  );
}

export default App;
