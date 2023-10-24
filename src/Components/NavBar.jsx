import React from "react";

function NavBar() {
  return (
    <div className="bg-[#f5d1d3] p-2 w-full  flex items-center text-center">
      <div className="bg bg-[url('https://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fnfl.png')] w-[80px] h-[80px] bg-cover bg-no-repeat"></div>
      <p className="font-bold">NFL NEWS</p>
    </div>
  );
}

export default NavBar;