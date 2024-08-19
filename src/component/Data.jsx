import DataCard from "./DataCard";
import "./datas.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const getDatas = async () => {
      try {
        const data = await axios.get("http://localhost:3000/user/all", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setUser(data.data.payload);
      } catch (error) {
        setMessage(error.response.statusText);
      }
    };
    getDatas();
  }, []);

  return (
    <div className="user-datas">
      {message && <h1>{message}</h1>}
      {user == []
        ? "no data"
        : user.map((item) => <DataCard key={item._id} data={item} />)}
    </div>
  );
};

export default Data;
