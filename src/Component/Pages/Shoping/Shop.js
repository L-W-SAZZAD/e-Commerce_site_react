import React from "react";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";

export default function Shop({ shop }) {
  const { name, images, description, retting, price } = shop;

  return (
    <div className=" relative rounded-md shadow-lg p-5">
      <div className=" w-full rounded-md  overflow-hidden">
        <img
          className="w-full h-[300px] object-cover rounded-md block"
          src={images}
          alt="images"
        />
      </div>
      <div className="description">
        <h2 className=" text-2xl font-semibold py-5 uppercase tracking-wide">
          {name}
        </h2>
        <div className=" h-[200px] overflow-y-scroll">
          <p className=" text-justify tracking-normal leading-6">
            {description.slice(0, 300)}
          </p>
        </div>
        <div className="pt-3 ">
          <p className="text-xl text-red-500 tracking-wide ">Price:{price}</p>
          <div className="ratting flex gap-1 pt-2 pb-16">
            {[...Array(retting)].map((ar) => (
              <FcRating />
            ))}
            {/*            
            <FcRating />
            <FcRating />
            <FcRating /> */}
          </div>
        </div>
        <div className="btn flex justify-between ">
          <Link>
            <button className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold absolute bottom-0 left-5">
              Buy Now
            </button>
          </Link>
          <button className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold absolute bottom-0 right-5">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
