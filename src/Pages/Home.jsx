import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl =
      "http://nflhlnews-alb-staging-113665149.us-east-1.elb.amazonaws.com:9000";

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response data
        console.log("Response:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-6">
      {data.map((item) => {
        return <p className="font-bold w-100 p-2 bg-black text-white m-2 cursor-pointer hover:bg-green-400 ">{item}</p>;
      })}
    </div>
  );
}

export default Home;
