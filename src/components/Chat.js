import React from "react";

function Chat({ name, message, recieved, number, online }) {
  return (
    <div className="border-b-2 border-gray-200 last:border-none flex items-center py-4 px-3 space-x-3">
      <div className="relative">
        <img
          src="/images/profile2.jpg"
          alt="profile"
          className="rounded-full object-contain w-10 h-10"
        />
        {online && (
          <div className="absolute w-2 h-2 rounded-full -right-0.5 bottom-1 bg-[#6FCF97]"></div>
        )}
      </div>
      <div className="flex-1 space-y-1">
        <h2 className="text-[14px] font-medium">{name}</h2>
        <p
          className={`text-[12px] ${recieved ? "text-black" : "text-gray-400"}`}
        >
          {message}
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <p className="text-[11px] text-gray-400">1min</p>
        {recieved && (
          <p className="bg-[#FA976C] text-white rounded-full w-4 h-4 text-[9px] flex justify-center items-center">
            {number}
          </p>
        )}
      </div>
    </div>
  );
}

export default Chat;
