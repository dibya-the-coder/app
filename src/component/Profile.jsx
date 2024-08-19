import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./datas.css";

const Profile = () => {
  const [user, setUser] = useState();
  const [message, setMessage]= useState('Loading...')

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setUser(response.data.payload);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };
    getUser();
  }, []);


  return (
    <div className="profile">
      <h1>MY PROFILE</h1>
      {user ? (
        <>
          <div>
            <span>Name</span><span>{user.name}</span>
          </div>
          <div>
            <span>Email</span><span>{user.email}</span>
          </div>
        </>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

Profile.propTypes = {
  data: PropTypes.object,
};

export default Profile;
