import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="wrapper lg:w-[1280px] mx-auto lg:px-0 md:px-3 sm:px-3 px-3 py-10">
        <ul className="flex justify-center gap-5 font-semibold tracking-widest">
          <Link
            to="shop"
            className="hover:text-red-500 hover:underline duration-300"
          >
            Shop
          </Link>
          <Link
            to="blog"
            className="hover:text-red-500 hover:underline duration-300"
          >
            Blog
          </Link>
          <Link
            to="profile"
            className="hover:text-red-500 hover:underline duration-300"
          >
            Profile
          </Link>
        </ul>
      </div>
    </div>
  );
}
