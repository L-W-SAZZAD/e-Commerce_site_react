import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./error.css";

export default function Error() {
  const { status, statusText } = useRouteError();

  return (
    <div className="error_bg">
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold tracking-wider">
          <span className="w-[30px] h-[30px] border-dashed border-red-500 animate-spin rounded-full inline-block delay-700 ease-in-out duration-500 mr-5 bg-white"></span>
          {status}
          <span className="w-[30px] h-[30px] border-dashed border-red-500 animate-spin rounded-full inline-block delay-700 ease-in-out duration-500 ml-5 bg-green-500"></span>
        </h2>
        <h3 className="text-xl tracking-widest pb-5 pt-5">{statusText}</h3>
        <p className="text-xl font-thin tracking-widest">
          <small>Back To</small>{" "}
          <Link
            to="/"
            className="bg-red-500 px-4 py-2 hover:bg-pink-800 duration-300 rounded-md text-white"
          >
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
