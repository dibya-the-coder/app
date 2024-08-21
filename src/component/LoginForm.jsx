import {useRef, useState} from "react";
import "./css/loginform.css";
import PropType from "prop-types";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
    const emailRef = useRef('');
    const passwordRef= useRef('');
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();



  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try{
        const response = await axios.post(
            "http://localhost:3000/auth/login",
            {email:emailRef.current.value, password:passwordRef.current.value}
        );
        console.log(response);
        if (response.data.statusCode === 200) {
            setMessage(response.data.message.message);
            setStatus(200);
        }
        if (response.data.statusCode !== 200) {
            setMessage(response.data.message.message);
            setStatus(response.data.status);
        }
        if (response.data.statusCode === 200) {
            localStorage.setItem("access_token", response.data.access_token);
        }
    }catch (e) {
        console.log(e)
    }
  };

  return (
          <div className="container">
              <form
                  onSubmit={(event) => handleOnSubmit (event)}
                  className="form"
                  action=""
              >
                  {status === 200 ? (
                      <Navigate to={"/user/data"}/>
                  ) : message != null ? (
                      <h1>{message.replace ('"', "")}</h1>
                  ) : (
                      ""
                  )}

                  <div className="email">
                      <label id='e-lbl' htmlFor="email">Email</label>
                      <input ref={emailRef} placeholder='email' type="text" id='email'/>
                  </div>

                  <div className="password">
                      <label htmlFor="p-lbl">Password</label>
                      <input ref={passwordRef} placeholder='password' type="password" id='password'/>
                  </div>
                  <button type="submit">LOG IN</button>
                  <Link to={"/"}>don't have account? sign in?</Link>
              </form>
          </div>
  );
};
LoginForm.propTypes = {
    dataSet: PropType.array,
};

export default LoginForm;