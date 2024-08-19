import { useState } from 'react'
import './loginform.css'
import PropType from 'prop-types'
import axios from 'axios'
import { Link } from 'react-router-dom'


const LoginForm = () => {
const [formData, setFormData] = useState()
const [confirm, setConfirm] = useState(null)

const handleOnChange =(event)=>{
    setFormData({...formData, [event.target.id] : event.target.value})
    setConfirm(null)
}

const handleOnSubmit = async (event)=>{
    event.preventDefault()
    const response = await axios.post('http://localhost:3000/auth/login', formData)
    if(response.data.status == 200) setConfirm(response.data.message)
    if(response.data.status != 200) setConfirm(response.data.message.message)
    if(response.data.status == 200){
      localStorage.setItem('access_token', response.data.access_token)
    }
}

  return (
    <div className='container'>
      <form onSubmit={(event)=>handleOnSubmit(event)} onChange={(event)=>handleOnChange(event)} className="form" action="">
        <div className="email"> 
        <label id='e-lbl' htmlFor="email" >Email</label>
        <input placeholder='email' type="text" id='email'/>
        </div>

        <div className="password">
        <label htmlFor="p-lbl">Password</label>
        <input placeholder='password' type="password" id='password'/>
        </div>

        <button type='submit'>LOG IN</button>
        <Link to={'/'}>don't have account? sign in?</Link>
    </form>
    {confirm && <p>{JSON.stringify(confirm)}</p>}
    </div>
  )
}
LoginForm.propTypes = {
  dataSet: PropType.array
}


export default LoginForm