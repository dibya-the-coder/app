import { Link } from 'react-router-dom';
import './css/dashboard.css'

const SideBar = () => {
  return (
    <div className="admin-sideBar">
      <ul>
        <li><Link to={''}>Profile</Link></li>
        <li><Link to= {'create'}>Create blog</Link></li>
        <li><Link to={'blogs'}>See own blogs</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
