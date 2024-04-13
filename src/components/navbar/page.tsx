import React from "react";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="bg-red w-full shadow-md flex place-content-around p-10 items-center	">
      <div className="logo font-Dancing text-5xl font-black cursor-pointer">
        Shoplead
      </div>
      <div className="navs flex  place-content-around items-center	">
        <div className="nav px-5 capitalize cursor-pointer hover:border-b-4 border-sky-500 ease-in duration-100">
          home
        </div>
        <div className="nav px-5 capitalize cursor-pointer hover:border-b-4 border-sky-500 ease-in duration-100">
          shop
        </div>
        <div className="nav px-5 capitalize cursor-pointer hover:border-b-4 border-sky-500 ease-in duration-100">
          pages
        </div>
        <div className="nav px-5 capitalize cursor-pointer hover:border-b-4 border-sky-500 ease-in duration-100">
          blog
        </div>
        <div className="nav px-5 capitalize cursor-pointer hover:border-b-4 border-sky-500 ease-in duration-100">
          about
        </div>
      </div>
      <div className="icons flex place-content-around items-center	">
        <div className="icon mx-5 cursor-pointer  hover:border-4 border-sky-500 ease-in duration-100 rounded-full		">
          <FaShoppingCart size={23} />
        </div>
        <div className="icon mx-5 cursor-pointer hover:border-4 border-sky-500 ease-in duration-100 rounded-full		">
          <IoMdNotifications size={25} />
        </div>
        <div className="icon mx-5 cursor-pointer hover:border-4 border-sky-500 ease-in duration-100 rounded-full		">
          <MdAccountCircle size={25} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
