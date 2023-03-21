import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/profile.jpg";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handelImg = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    setMenu(false);
  }, []);
  //   setMenu(false);
  return (
    <div className=" shadow-lg">
      <div className="lg:w-[1280px] mx-auto lg:px-0 md:px-3 sm:px-3 px-3 z-50">
        {/* wrapper */}
        <div className="wrapper lg:flex md:flex sm:flex flex  lg:justify-between md:justify-between sm:justify-between justify-between lg:items-center md:items-center sm:items-center items-center py-2 ">
          {/* Logo */}
          <div className="logo">
            <Link to="/home" className="text-2xl text-red-500 font-bold">
              Enjoy
              <span className="text-lg tracking-widest font-thin pl-2">
                Shopping
              </span>
            </Link>
          </div>
          {/* logo end */}
          {/* navbar start */}
          <div
            className={`navbar_menu lg:static md:static absolute lg:shadow-none md:shadow-none shadow-lg right-5 top-[77px] lg:max-w-fit md:w-fit w-1/3 text-center p-5 lg:p-0 md:p-0 lg:opacity-100 md:opacity-100 opacity-0 z-50  ${
              menu && "opacity-100"
            }`}
          >
            <ul className="lg:flex md:flex lg:gap-5 md:gap-5">
              <NavLink
                to="/shop"
                className="text-lg shadow-lg font-semibold  lg:py-1 md:py-1 lg:px-4 md:px-4 lg:rounded-full md:rounded-full lg:hover:bg-red-500 md:hover:bg-red-500 lg:hover:text-white md:hover:text-white lg:duration-300 md:duration-300 "
              >
                <li className=" py-1 lg:py-0 md:py-0 px-3 lg:px-0 md:px-0 shadow lg:shadow-none md:shadow-none lg:mb-0 md:mb-0 mb-3 drop-shadow-lg shadow-black lg:bg-transparent md:bg-transparent bg-red-500 duration-300 lg:text-inherit md:text-inherit text-white">
                  Shop
                </li>
              </NavLink>
              <NavLink
                to="/blog"
                className="text-lg shadow-lg font-semibold  lg:py-1 md:py-1  lg:px-4 md:px-4 lg:rounded-full md:rounded-full lg:hover:bg-red-500 md:hover:bg-red-500 lg:hover:text-white md:hover:text-white lg:duration-300 md:duration-300"
              >
                <li className=" py-1 lg:py-0 md:py-0 px-3 lg:px-0 md:px-0 shadow lg:shadow-none md:shadow-none lg:mb-0 md:mb-0 mb-3 drop-shadow-lg shadow-black lg:bg-transparent md:bg-transparent hover:bg-red-500 duration-300 hover:text-white ">
                  Blog
                </li>
              </NavLink>
              <NavLink>
                <li className="lg:hidden md:hidden py-1 lg:py-0 md:py-0 px-3 lg:px-0 md:px-0 shadow lg:shadow-none md:shadow-none lg:mb-0 md:mb-0 mb-3 drop-shadow-lg shadow-black font-semibold lg:bg-transparent md:bg-transparent hover:bg-red-500 duration-300 hover:text-white">
                  Profile
                </li>
              </NavLink>
              <NavLink>
                <li className="lg:hidden md:hidden py-1 lg:py-0 md:py-0 px-3 lg:px-0 md:px-0 shadow lg:shadow-none md:shadow-none lg:mb-0 md:mb-0 mb-3 drop-shadow-lg shadow-black font-semibold lg:bg-transparent md:bg-transparent hover:bg-red-500 duration-300 hover:text-white">
                  Log In
                </li>
              </NavLink>
            </ul>
          </div>
          {/* navbar End */}
          {/* user Profile */}
          <div className="user_profile">
            <div onClick={handelImg} className="profile">
              <img
                className="w-[60px] h-[60px] object-cover rounded-full ring-2 ring-gray-500 block cursor-pointer"
                src={profile}
                alt=""
              />
            </div>
          </div>
          {/* user Profile */}
        </div>
      </div>
      {/* wrapper */}
    </div>
  );
}
