import React from "react";

function Message({ recieved, profileimg, message }) {
  return (
    <div className={`flex items-start rounded ${!recieved && "justify-end"}`}>
      <img
        src={profileimg}
        alt=""
        className={`w-9 h-9 object-contain rounded-full ${
          !recieved ? "ml-2" : "mr-2"
        }`}
      />
      <p
        className={`${
          !recieved
            ? "order-first rounded-sent  bg-[#D4F1F4]"
            : "rounded-recieved bg-[#F4F4F4]"
        } relative leading-loose w-[383px] break-words text-[12.5px]  py-5 px-4`}
      >
        {message}
        <span className="pt-4 absolute text-[11px] text-gray-400 right-3 bottom-0">
          8:00 AM
        </span>
      </p>
    </div>
  );
}

export default Message;
