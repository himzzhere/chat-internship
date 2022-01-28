import React from "react";
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  return (
    <nav className="py-4 px-5 bg-[#303C6C] text-white desktop:hidden mobile:flex items-center">
      <RiMenu4Fill className="text-xl" />
      <h2 className="flex-1 text-center">Messages</h2>
    </nav>
  );
}

export default Navbar;
