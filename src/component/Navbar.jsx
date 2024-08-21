import {Link, useNavigate} from 'react-router-dom';
import './css/navbar.css';
import {useEffect, useState} from "react";
import axios from "axios";

const Navbar = () => {
    const navigate = useNavigate();
    const [authorized, setAuthorized] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('http://localhost:3000/posts/currentUser',{headers:{Authorization: `Bearer ${localStorage.getItem('access_token')}`}});
            console.log(data)
            if(data.data.statusCode === 200) {setAuthorized(true)} else setAuthorized(false);
        }
        fetchData();
    }, []);



const logout = () => {
    localStorage.removeItem('access_token');
    setAuthorized(false)
    navigate('/login');
}
  return (
    <div className='nav'>
        <div>LOGO</div>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>sign up</Link></li>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/data'>data</Link></li>
            </ul>
        </div>
        <div className='nav-button-box'>
            {authorized === true? <Link to={'/dashboard'}><button className='nav-button'>dashboard</button></Link>:null}
          <button  className={'nav-button'} onClick={()=>logout()}>Log out</button>
        </div>
    </div>
  );
}

export default Navbar;