import React from "react";
import { BsCreditCard } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header-container w-3/6 m-auto">
      <div className=" header flex justify-between align-center flex-1 my-2 mx-3">
        <div className="header-logo flex align-center text-3xl font-medium">
          Xpenser
          <BsCreditCard className="flex align-center ml-2" />
        </div>
        <div className="header-button text-xl flex justify-center align-center border-[1px] border-solid border-black rounded px-2 mr-1">
          <a
            className="decoration-none"
            href="https://github.com"
            target="_blank"
          >
            <i className="devicon-github-original"></i>
            Star
          </a>
        </div>
      </div> 
    </div>
  );
};

export default Header;
