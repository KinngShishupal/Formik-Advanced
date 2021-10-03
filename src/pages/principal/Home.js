import React, { useEffect, useState } from "react";
import axios from "axios";
import PrincipalMain from "./PrincipalMain";

const Home = () => {
  const [completeData, setCompleteData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setCompleteData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {completeData.map((items) => {
        return <PrincipalMain eachTeacher={items} key={items.teacher_id}/>;
      })}
    </div>
  );
};

export default Home;
