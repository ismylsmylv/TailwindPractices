import React from "react";
import { BiSolidCategory } from "react-icons/bi";
type Props = {};

function Categories({}: Props) {
  return (
    <div className=" mx-auto bg-neutral-50 p-20">
      <div className="container mx-auto">
        <div className="headline flex justify-between items-center">
          <div className="name font-bold text-3xl uppercase ">
            popular categories
          </div>
          <div className="line  bg-black-900  w-100 h-2"></div>
          <BiSolidCategory size={30} />
        </div>
        <div className="cards py-10 grid grid-cols-4">
          <div className="card flex flex-col justify-center items-center">
            <img
              className="h-80 mb-5 rounded-xl"
              src="https://www.linjer.co/cdn/shop/products/linjer-classic-watch-38-gunmetal-tan-1-front_grande.jpg?v=1602577160"
              alt="watch"
            />
            <p className="font-semibold"> The Classic Watch</p>
          </div>
          <div className="card flex flex-col justify-center items-center">
            <img
              className="h-80 mb-5 rounded-xl"
              src="https://www.linjer.co/cdn/shop/products/linjer-classic-watch-38-gunmetal-tan-1-front_grande.jpg?v=1602577160"
              alt="watch"
            />
            <p className="font-semibold"> The Classic Watch</p>
          </div>
          <div className="card flex flex-col justify-center items-center">
            <img
              className="h-80 mb-5 rounded-xl"
              src="https://www.linjer.co/cdn/shop/products/linjer-classic-watch-38-gunmetal-tan-1-front_grande.jpg?v=1602577160"
              alt="watch"
            />
            <p className="font-semibold"> The Classic Watch</p>
          </div>
          <div className="card flex flex-col justify-center items-center">
            <img
              className="h-80 mb-5 rounded-xl"
              src="https://www.linjer.co/cdn/shop/products/linjer-classic-watch-38-gunmetal-tan-1-front_grande.jpg?v=1602577160"
              alt="watch"
            />
            <p className="font-semibold"> The Classic Watch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
