import React from "react";
import Countdown from "./Countdown";

const DiscountCountDown = () => {
  return (
    <div className="h-96 relative my-5  bg-[url('https://thumbs.dreamstime.com/b/sport-car-vehicle-black-gradient-background-d-sport-car-vehicle-black-gradient-background-d-144151337.jpg')]">
      <div className="text-center  text-white flex flex-col justify-center align-middle  items-center ">
        <h1 className="text-3xl font-bold mt-12 ">
          <span className="text-6xl animate-pulse">20%</span> <br />
          Discount On All Kid's Car Toys
        </h1>
        <p>Offer Expires on</p>
      </div>
      <div>
        <Countdown targetDate="2023-12-31T23:59:59"></Countdown>
      </div>
      <div className="absolute left-[140px]  md:left-[620px] mt-4">
        <button className="btn bg-white font-bold   text-black">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default DiscountCountDown;
