import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./datas.css";

const DataComponent = () => {
  const [status, setStatus] = useState(200);
  useEffect(() => {
    const getDatas = async () => {
      try {
        const data = await axios.get("http://localhost:3000/user/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setStatus(data.data.status);
      } catch (error) {
        setStatus(error.response.status);
      }
    };
    getDatas();
  }, []);

  return (
    <div>
      {status == 200 ? <Outlet/> : <Navigate to={'/login'}/>}
    </div>
  );
};

export default DataComponent;
