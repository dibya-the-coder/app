import {  Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpForm from "./component/SignUpForm";
import LoginForm from "./component/LoginForm";
import {useEffect, useState} from "react";
import Data from "./component/Data";
import Profile from "./component/Profile";
import DashBoard from "./pages/DashBoard";
import CreateBlog from "./component/CreateBlog";
import MyBlogs from "./component/MyBlogs";
import axios from "axios";

function App() {
  const [data, setdata] = useState([])

    useEffect(() => {
        async function fetchData() {
            const userData = await axios.get("http://localhost:3000/posts/currentUser", {headers:{Authorization: `Bearer ${localStorage.getItem("access_token")}`}});
            console.log(userData);
        }
        fetchData();
    })

  const setDataHandler = (newData)=>{
    setdata([...data, newData])
    console.log(data)
  }
  return (
    <Routes>
      <Route path="/" element={<SignUpForm fun={setDataHandler}/>} />
      <Route path="/login" element={<LoginForm dataSet={data}/>} />
      

        <Route path="data" element={ <Data/>}/>


      <Route path="/dashboard" element= {<DashBoard/>}>
        <Route path="" element={<Profile/>} />
        <Route path="create" element = {<CreateBlog/>}/>
        <Route path="blogs" element= {<MyBlogs/>}/>
      </Route>
    </Routes>
  );
}

export default App;
