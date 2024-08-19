import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
        <div>LOGO</div>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>sign up</Link></li>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/user/data'>data</Link></li>
            </ul>
        </div>
        <div className='nav-button-box'>
          <Link to={'/profile'}><button className='nav-button'>profile</button></Link>
          <button  className={'nav-button'} onClick={()=>{localStorage.removeItem('access_token')}}>Log out</button>
        </div>
    </div>
  );
}

export default Navbar;