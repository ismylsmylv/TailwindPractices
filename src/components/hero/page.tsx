import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="container mx-auto ">
      <div className="Hero flex content-between container my-auto mx-0 p-20">
        <div className="left w-1/2">
          <div className="heading text-8xl text-left uppercase font-black ">
            perfect time to shop
          </div>
          <button className="rounded-md px-10 py-5 mt-10 bg-purple-700 capitalize text-white">
            more collection
          </button>
          <div className="stats flex py-5 mt-10 content-center justify-items-center">
            <div className="kcount flex flex-col content-center justify-items-center">
              <div className="upper text-4xl font-bold">10k</div>
              <div className="lower text-gray-500 capitalize">
                happy customers
              </div>
            </div>
            <div className="line mx-10  w-1 h-13 bg-gray-500"></div>
            <div className="pcount flex flex-col content-center justify-items-center">
              <div className="upper text-4xl font-bold">400+</div>
              <div className="lower text-gray-500 capitalize">daily sales</div>
            </div>
          </div>
        </div>
        <div className="right">sdfsdf</div>
      </div>
    </div>
  );
}

export default Hero;
