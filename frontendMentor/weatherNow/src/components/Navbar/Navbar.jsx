// import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
//   const [isOpen, setIsOpen] = false;

//   const handleModal = () => {
//     setIsOpen(true);
//   };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
      </div>

      <div className="unit-select">
        <img src="icon-units.svg" alt="icon-units" />
        <span>Units</span>
        <img src="icon-dropdown.svg" alt="icon-dropdown" />
      </div>
    </div>

    
  );
};

export default Navbar;
