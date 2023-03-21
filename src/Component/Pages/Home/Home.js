import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/bg_background.jpg";

export default function Home() {
  return (
    <div className="lg:w-[1280px] mx-auto lg:px-0 md:px-3 sm:px-3 px-3">
      <div className="lg:py-10 md:py-10 sm:py-10 py-10 lg:h-auto md:h-auto h-screen">
        <div className="cover relative h-full">
          <Link to="/shop">
            <button className="bg-red-500 px-5 py-2 rounded-md text-white font-semibold absolute top-1/2 translate-y-[-50%] lg:left-5">
              Shop Now
            </button>
          </Link>
          <img
            className="block object-cover rounded-lg h-full w-full"
            src={img}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}
