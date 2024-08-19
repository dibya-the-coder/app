import { useState } from 'react'
import './loginform.css'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';



const SignUpForm = () => {
  
const [formData, setFormData] = useState()
const [confirm, setConfirm] = useState(null)
const [status, setStatus] = useState(200)

const handleOnChange =(event)=>{
    setFormData({...formData, [event.target.id] : event.target.value})
    setConfirm(null)
}

const handleOnSubmit = async (event)=>{
    event.preventDefault()
    try {
      const a = await axios.post('http://localhost:3000/auth/signup', formData)
      console.log (a)
    if(a.data.status==201){setStatus(a.data.status)}
    else {setConfirm(JSON.stringify(a.data.payload.message))}
    } catch (error) {
      console.log(error.data.error)
    }
}

  return (
    <div className='container'>
      <form onSubmit={(event)=>handleOnSubmit(event)} onChange={(event)=>handleOnChange(event)} className="form" action="">
        <div className="name">
        <label htmlFor="n-lbl">name</label>
        <input placeholder='name' type="name" id='name'/>
        </div>

        <div className="email"> 
        <label id='e-lbl' htmlFor="email" >Email</label>
        <input placeholder='email' type="text" id='email'/>
        </div>

        <div className="password">
        <label htmlFor="p-lbl">Password</label>
        <input placeholder='password' type="password" id='password'/>
        </div>
        
        <button type='submit'>SIGN UP</button>
        <Link to={'/login'}>Already have an account, login?</Link>

    </form>
    {status==201 ?<Navigate to={'/login'}/>:<p>{confirm}</p>}
    </div>
  )
}

SignUpForm.propTypes = {
  fun :PropTypes.func
};

export default SignUpForm