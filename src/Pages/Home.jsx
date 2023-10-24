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
        return (
          <a target="_blank" href={item.link}>
            <p className="font-bold w-100 p-2 bg-[#003A73] text-white m-2 cursor-pointer hover:bg-[#D92128] hover:scale-[1.1] transition-all rounded-sm ">
              {item.headline}
            </p>
          </a>
        );
      })}
    </div>
  );
}

export default Home;