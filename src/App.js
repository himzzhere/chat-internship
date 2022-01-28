import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FiSearch, FiSend } from "react-icons/fi";
import Chat from "./components/Chat";
import { AiOutlineMore, AiOutlineArrowLeft } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import Message from "./components/Message";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const messageRef = useRef(null);
  const [messages, setMessages] = useState([]);
  console.log(window.screen.width);
  const sendMessage = (e) => {
    e.preventDefault();
    const message = { input: messageRef.current.value };
    setMessages([...messages, message]);
    messageRef.current.value = "";
  };
  return (
    <div className="overflow-hidden h-screen flex font-body">
      <Sidebar />
      <main className="flex-1 desktop:px-10 mobile:px-0 desktop:py-5 mobile:py-0">
        <Header />
        <section className="desktop:mt-14 mobile:mt-0 flex">
          <div className="w-80 mobile:hidden desktop:flex desktop:flex-col">
            <form className="flex items-center border-2 border-gray-200 rounded-xl py-1 bg-white">
              <FiSearch className="text-3xl px-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none bg-transparent"
              />
            </form>
            <div className="flex flex-col mt-10 border-2 rounded-xl border-gray-200">
              <Chat name="Esther Howard" message="Of course I can" online />
              <Chat
                name="Marvin McKinney"
                message="That's great!!"
                number="2"
                recieved
              />
              <Chat name="Kathryn Murphy" message="Counting yor slot..." />
              <Chat name="Floyd Miles" message="Copy me know..." />
              <Chat name="Albert Flores" message="All faith needs feet.." />
              <Chat name="Brooklyn Simmons" message="Glad to hear from you" />
            </div>
          </div>
          <div className="scrollbar scrollbar-thumb-gray-200 scrollbar-track-gray-600 w-full overflow-y-hidden mobile:h-[725px] desktop:h-[600px] mobile:ml-0 desktop:ml-20 flex flex-col desktop:flex-1 border-gray-200 desktop:border-2 mobile:rounded-none desktop:rounded-lg">
            <Navbar />
            <header className="flex items items-center space-x-4 mobile:bg-white desktop:bg-[#303C6C] desktop:text-white mobile:rounded-none desktop:rounded-t-lg py-3 px-6 border-b-2 border-gray-200">
              <AiOutlineArrowLeft className="desktop:hidden" />
              <div className="flex items-center space-x-3 flex-1">
                <div className="relative">
                  <img
                    src="/images/profile1.jpg"
                    alt="profile"
                    className="rounded-full w-10 h-10 object-contain"
                  />
                  <div className="absolute w-2 h-2 rounded-full -right-0.5 bottom-1 bg-[#6FCF97]"></div>
                </div>
                <div>
                  <h2 className="text-[14px] font-semibold">Esther Howard</h2>
                  <p className="desktop:hidden text-[11px]">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <AiOutlineMore className="text-xl" />
                <IoCloseOutline className="text-xl mobile:hidden desktop:flex" />
              </div>
            </header>
            <div className="overflow-y-scroll h-auto flex-1 px-5 py-10 space-y-4 ">
              <Message
                profileimg="images/profile1.jpg"
                message="Hii Prakash ! Feels like it’s been a while! How are you? Do you have any time for the remainder of the week to help me with an ongoing project?"
                recieved
              />
              <Message
                profileimg="images/profile.jpeg"
                message="Hii Easther, glad to hear from you, I’m fine, What about you? and how it’s going with the velocity website? off cours, I’ll help with this project"
              />
              <Message
                profileimg="images/profile1.jpg"
                message="Super, I’ll get you the new brief for our own site over to you this evening, so you have time to read over I’m good thank you!"
                recieved
              />
              {messages.map((message, index) => (
                <Message
                  key={index}
                  message={message.input}
                  profileimg="images/profile.jpeg"
                />
              ))}
            </div>
            <div className="p-5 flex items-center space-x-5">
              <form
                onSubmit={sendMessage}
                className="py-2 px-4 rounded-md flex-1 flex items-center border-2 border-gray-200"
              >
                <input
                  type="text"
                  ref={messageRef}
                  placeholder="Write a message"
                  className="flex-1 outline-none text-sm"
                />
                <label>
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    hidden
                  />
                  <RiAttachment2 className="active:scale-95 transition-all duration-150 cursor-pointer text-2xl text-gray-500" />
                </label>
              </form>
              <button
                onClick={sendMessage}
                className="active:scale-95 transition-all duration-150 p-2 bg-[#C4C4C4] rounded-full "
              >
                <FiSend className="text-[#3C3C3C] text-xl" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
