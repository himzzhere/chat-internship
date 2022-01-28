import React, { useState } from "react";
import { BsGrid1X2, BsChatDots } from "react-icons/bs";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const [selected, setSelected] = useState(2);
  return (
    <aside className="mobile:hidden shadow-right bg-[#303C6C] min-h-screen w-1/12 text-white desktop:flex flex-col py-5 rounded-r-xl">
      <BsGrid1X2 className="text-2xl self-center" />
      <div className="mt-20 flex-1 space-y-10">
        <div
          onClick={() => setSelected(1)}
          className={`${
            selected === 1 ? "bg-gray-400" : "hover:bg-gray-400"
          } py-2 flex justify-center  transition-all duration-150 cursor-pointer`}
        >
          <AiOutlineHome className="text-2xl" />
        </div>
        <div
          onClick={() => setSelected(2)}
          className={`${
            selected === 2 ? "bg-gray-400" : "hover:bg-gray-400"
          } py-2 flex justify-center hover:bg-gray-400 transition-all duration-150 cursor-pointer`}
        >
          <BsChatDots className="text-2xl" />
        </div>
        <div
          onClick={() => setSelected(3)}
          className={`${
            selected === 3 ? "bg-gray-400" : "hover:bg-gray-400"
          } py-2 flex justify-center hover:bg-gray-400 transition-all duration-150 cursor-pointer`}
        >
          <AiOutlineSetting className="text-2xl" />
        </div>
      </div>
      <FiLogOut className="text-xl self-center" />
    </aside>
  );
}

export default Sidebar;
