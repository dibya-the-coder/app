import {useRef, useState} from 'react'
import './css/loginform.css'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';



const SignUpForm = () => {
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

const [confirm, setConfirm] = useState(null)
const [status, setStatus] = useState(200)


const handleOnSubmit = async (event)=>{
    event.preventDefault()
    try {
      const a = await axios.post('http://localhost:3000/auth/register', {username:usernameRef.current.value,email:emailRef.current.value,password:passwordRef.current.value})
      console.log (a)
    if(a.data.statusCode===201){setStatus(a.data.statusCode);console.log((a.data.statusCode))}
    else {setConfirm(a.data.data.message.replace("\"", ''))}
    } catch (error) {
      console.log(error)
    }
}

  return (
    <div className='container'>
      <form onSubmit={(event)=>handleOnSubmit(event)} className="form" action="">
      {status===201 ?<Navigate to={'/login'}/>:<h1>{confirm}</h1>}
        <div className="name">
        <label htmlFor="username">Name</label>
        <input ref={usernameRef} placeholder='name' type="text" id='username'/>
        </div>

        <div className="email"> 
        <label id='e-lbl' htmlFor="email" >Email</label>
        <input ref={emailRef} placeholder='email' type="text" id='email'/>
        </div>

        <div className="password">
        <label htmlFor="p-lbl">Password</label>
        <input ref={passwordRef} placeholder='password' type="password" id='password'/>
        </div>
        
        <button type='submit'>SIGN UP</button>
        <Link to={'/login'}>Already have an account, login?</Link>

    </form>
    
    </div>
  )
}

export default SignUpForm