import React from "react";
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
type Props = {};

function Navbar({}: Props) {
  return (
    <div className="bg-red w-full shadow-md flex place-content-around p-10 items-center	">
      <div className="logo font-Dancing text-5xl font-black">Shoplead</div>
      <div className="navs flex  place-content-around items-center	">
        <div className="nav px-5 capitalize">home</div>
        <div className="nav px-5 capitalize">shop</div>
        <div className="nav px-5 capitalize">pages</div>
        <div className="nav px-5 capitalize">blog</div>
        <div className="nav px-5 capitalize">about</div>
      </div>
      <div className="icons flex place-content-around items-center	">
        <div className="icon px-5">
          <IoMdContact size={25} />
        </div>
        <div className="icon px-5">
          <FaShoppingCart size={25} />
        </div>
        <div className="icon px-5">
          <IoMdNotifications size={25} />
        </div>
        <div className="icon px-5">
          <MdAccountCircle size={25} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
