import React from "react";
import { RiEqualizerFill } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

function Header() {
  return (
    <header className="mobile:hidden desktop:flex items-center justify-between">
      <div className="flex items-center w-80 justify-between">
        <h1 className="text-3xl font-semibold">Chat</h1>
        <div className="flex items-center space-x-2">
          <RiEqualizerFill className="bg-gray-200 rounded-md text-2xl p-1 text-gray-400" />
          <h2 className="text-gray-600">Sort</h2>
        </div>
      </div>
      <div className="flex items-center w-48 justify-between">
        <div className="relative">
          <div className="bg-red-500 w-1.5 h-1.5 rounded-full absolute right-1 top-1"></div>
          <IoMdNotificationsOutline className="text-2xl text-gray-500" />
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="/images/profile.jpeg"
            alt="profile"
            className="w-8 h-8 rounded-full object-contain"
          />
          <p className="text-[14px]">Prakash</p>
        </div>
        <BiChevronDown className="text-xl" />
      </div>
    </header>
  );
}

export default Header;
