
// import { TbSend } from "react-icons/tb";
// import "./Chatbot.css"; // Custom CSS for animations
// import { CSSTransition } from "react-transition-group";
// import { useEffect, useState } from "react";

// const Chatbot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false); // Chatbot body visibility
//   const [showPopup, setShowPopup] = useState(true); // Auto-popup visibility
//   const [messages, setMessages] = useState<{
//     sender: string;
//     text: string;
//   }[]>([
//     {
//       sender: "chatbot",
//       text:
//         "Greetings from CareerBanao Education!<br>Guidance regarding course?<br>Connect to us at +91-8750092628",
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [step, setStep] = useState(0);

//   // Auto-hide popup after 10 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowPopup(false), 20000);
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//     setShowPopup(false); // Hide popup if chat is opened
//   };

//   const sendMessage = () => {
//     if (!inputValue.trim()) return;

//     setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

//     if (step === 0) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text: "May I know which course you are looking for?",
//         },
//       ]);
//       setStep(1);
//     } else if (step === 1) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text: "Could you please help me with your <br>NAME:<br> PHONE NUMBER: ?",
//         },
//       ]);
//       setStep(2);
//     } else if (step === 2) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text: "Are you connected to any other counselor?",
//         },
//       ]);
//       setStep(3);
//     } else if (step === 3) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "chatbot",
//           text:
//             "Thank you for reaching out to us!<br>Our Program expert CareerBanao Mentor will contact you shortly.<br>Meanwhile, please do not share your number with any other source to avoid multiple calls.",
//         },
//       ]);
//       setStep(4);
//     }

//     setInputValue("");
//   };

//   return (
//     <div>
//       {/* Auto-triggered Popup */}
//       {showPopup && (
//         <div className="fixed bottom-24 right-14 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex items-center gap-3 z-50 animate-bounce-in">
//           <div className="relative w-12 h-12">
//             <img
//               src="./logo/Default_WHO_Introduces_AI_Chatbot_SARAH_Despite_Flaws_0.webp"
//               alt="Niaa Avatar"
//               className="w-full h-full rounded-full border-2 border-primaryBtn"
//             />
//           </div>
//           <p className="text-sm font-medium">
//             Hello, I am Riya, <br /> your Admission Assistant.
//           </p>
//           <button
//             className="absolute top-1 right-2 text-red-500 text-xl"
//             onClick={() => setShowPopup(false)}
//           >
//             &times;
//           </button>
//         </div>
//       )}

//       {/* Chat Icon */}
//       <div
//         className="fixed bottom-[70px] right-5 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-lg z-50 transition-transform transform hover:scale-110"
//         onClick={toggleChat}
//       >
//         <div className="relative">
//           <img
//             src="./logo/Default_WHO_Introduces_AI_Chatbot_SARAH_Despite_Flaws_0.webp"
//             className="rounded-full w-11 h-11 border-2 border-white"
//           />
//           <span className="absolute top-0 left-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//             1
//           </span>
//         </div>
//       </div>

//       {/* Chatbot Body */}
//       <CSSTransition in={isOpen} timeout={300} classNames="chatbot" unmountOnExit>
//         <div className="fixed bottom-24 right-5 font-poppins w-full max-w-[90%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[20%] xl:max-w-[25%] bg-white/90 border border-gray-300 rounded-lg shadow-lg z-50">
//           {/* Chat Header */}
//           <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-t-lg">
//             <div className="text-lg font-bold flex items-center gap-2">
//               <img
//                 src="./logo/CBlogo.jpg"
//                 alt="CareerBanao"
//                 className="h-8 w-8 rounded-full"
//               />
//               <h2 className="text-white">CareerBanao Mentor</h2>
//             </div>
//             <button className="text-2xl" onClick={toggleChat}>
//               &times;
//             </button>
//           </div>

//           {/* Chat Body */}
//           <div className="h-64 overflow-y-auto px-4 py-2 bg-gray-50">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`p-2 mb-2 max-w-[75%] rounded-lg shadow-md text-sm ${
//                   message.sender === "user"
//                     ? "bg-purple-100 ml-auto"
//                     : "bg-gray-200"
//                 }`}
//               >
//                 <p dangerouslySetInnerHTML={{ __html: message.text }} />
//               </div>
//             ))}
//           </div>

//           {/* Chat Footer */}
//           {step < 4 && (
//             <div className="flex items-center px-2 sm:px-4 py-2 bg-gray-100 rounded-b-lg">
//               <input
//                 type="text"
//                 className="flex-grow border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="Type a message..."
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 className="ml-2 bg-primaryBtn text-white px-4 py-2 flex justify-center rounded-lg hover:bg-hoverBtn !w-full !max-w-xs"
//                 onClick={sendMessage}
//               >
//                 <TbSend className="text-white" />
//               </button>
//             </div>
//           )}
//         </div>
//       </CSSTransition>
//     </div>
//   );
// };

// export default Chatbot;

import { TbSend } from "react-icons/tb";
import "./Chatbot.css"; // Custom CSS for animations
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Chatbot body visibility
  const [showPopup, setShowPopup] = useState(true); // Auto-popup visibility
  const [messages, setMessages] = useState<{
    sender: string;
    text: string;
  }[]>([
    {
      sender: "chatbot",
      text:
        "Greetings from CareerBanao Education!<br>Guidance regarding course?<br>Connect to us at +91-8750092628",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(0);
  const chatBodyRef = useRef<HTMLDivElement | null>(null); // Ref for chat body

  // Auto-hide popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to the bottom of the chat body whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPopup(false); // Hide popup if chat is opened
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

    if (step === 0) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "May I know which course you are looking for?",
        },
      ]);
      setStep(1);
    } else if (step === 1) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "Could you please help me with your <br>NAME:<br> PHONE NUMBER: ?",
        },
      ]);
      setStep(2);
    } else if (step === 2) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text: "Are you connected to any other counselor?",
        },
      ]);
      setStep(3);
    } else if (step === 3) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "chatbot",
          text:
            "Thank you for reaching out to us!<br>Our Program expert CareerBanao Mentor will contact you shortly.<br>Meanwhile, please do not share your number with any other source to avoid multiple calls.",
        },
      ]);
      setStep(4);
    }

    setInputValue("");
  };

  return (
    <div>
      {/* Auto-triggered Popup */}
      {showPopup && (
        <div className="fixed bottom-16 right-20 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex items-center gap-1 smLgap-3 z-50 animate-bounce-in font-poppins">
          <div className="relative w-12 h-12">
            <img
              src="./logo/1_lyyXmbeoK5JiIBNCnzzjjg.png "
              alt="Niaa Avatar"
              className="w-full h-full rounded-full border-2 border-primaryBtn"
            />
          </div>
          <p className="text-sm font-medium">
            Hello, I am Riya, <br /> your Admission Assistant.
          </p>
          <button
            className="absolute top-1 right-2 text-red-500 text-2xl hover:bg-purple-200 rounded-lg w-6 h-7"
            onClick={() => setShowPopup(false)}
          >
            &times;
          </button>
        </div>
      )}

      {/* Chat Icon */}
      <div
        className="fixed bottom-[70px] right-5 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer shadow-lg z-50 transition-transform transform hover:scale-110"
        onClick={toggleChat}
      >
        <div className="relative">
          <img
            src="./logo/1_lyyXmbeoK5JiIBNCnzzjjg.png"
            className="rounded-full w-11 h-11 border-2 border-white"
          />
          <span className="absolute top-0 left-0 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            1
          </span>
        </div>
      </div>

      {/* Chatbot Body */}
      <CSSTransition in={isOpen} timeout={300} classNames="chatbot" unmountOnExit>
        <div className="fixed bottom-24 right-5 font-poppins w-full max-w-[90%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[20%] xl:max-w-[25%] bg-white/90 border border-gray-300 rounded-lg shadow-lg z-50">
          {/* Chat Header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-t-lg">
            <div className="text-lg font-bold flex items-center gap-2">
              <img
                src="./logo/CBlogo.jpg"
                alt="CareerBanao"
                className="h-8 w-8 rounded-full"
              />
              <h2 className="text-white">CareerBanao Mentor</h2>
            </div>
            <button className="text-2xl" onClick={toggleChat}>
              &times;
            </button>
          </div>

          {/* Chat Body */}
          <div
            className="h-64 overflow-y-auto px-4 py-2 bg-gray-50"
            ref={chatBodyRef}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 max-w-[75%] rounded-lg shadow-md text-sm ${
                  message.sender === "user"
                    ? "bg-purple-100 ml-auto"
                    : "bg-gray-200"
                }`}
              >
                <p dangerouslySetInnerHTML={{ __html: message.text }} />
              </div>
            ))}
          </div>

          {/* Chat Footer */}
          {step < 4 && (
            <div className="flex items-center px-2 sm:px-4 py-2 bg-gray-100 rounded-b-lg">
              <div className="relative flex-grow">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700"
                  onClick={sendMessage}
                >
                  <TbSend className="text-xl" />
                </button>
              </div>
            </div>
          )}

        </div>
      </CSSTransition>
    </div>
  );
};

export default Chatbot;
