import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div>
      <div className="logo">Shoplead</div>
      <div className="navs">
        <div className="nav">home</div>
        <div className="nav">shop</div>
        <div className="nav">pages</div>
        <div className="nav">blog</div>
        <div className="nav">about</div>
      </div>
    </div>
  );
}

export default Navbar;
