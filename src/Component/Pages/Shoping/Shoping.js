import axios from "axios";
import React, { useEffect, useState } from "react";
import Shop from "./Shop";

export default function Shoping() {
  const [shoping, setShoping] = useState(null);
  const shopingData = async () => {
    const { data } = await axios({
      method: "GET",
      url: `shopData.json`,
    });
    setShoping(data);
  };
  useEffect(() => {
    shopingData();
  }, []);
  return (
    <div className="lg:w-[1280px] mx-auto lg:px-0 md:px-3 sm:px-3 px-3">
      <div className="wrapper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 py-10 overflow-hidden">
        {shoping?.map((shop, inx) => (
          <Shop key={inx} shop={shop} />
        ))}
      </div>
    </div>
  );
}
