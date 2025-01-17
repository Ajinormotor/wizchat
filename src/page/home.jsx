
import Message from "../component/message"
import EmojiPicker from 'emoji-picker-react';


import {Helmet} from "react-helmet";
import { chatdata } from "../data/chatdata";
import { useEffect, useRef, useState } from "react";
import useHook from "../hooks/useHook";


const Home = () => {



  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(chatdata[0].chat.messages);
  const [newMessage, setNewMessage] = useState('');
  const scrollRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !currentChat) return;

    const messageDetails = {
      id: `msg_${Date.now()}`,
      senderId: currentChat.id,
      content: newMessage,
      timestamp: new Date().toISOString(),
      reactions: {},
      replies: [],
      forwardedFrom: null,
    };

    setMessages((prevMessages) => [...prevMessages, messageDetails]);
    localStorage.setItem("messageDetails", messageDetails)
    setNewMessage('');
  };

  const handleEditMessage = (id, newContent) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, content: newContent } : msg
      )
    );
  };

  const handleDeleteMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  // When new messages drop
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);


  // online Presence indicator
  const [presence, setPresence] = useState({});
  const handlePresence = (id) => {
    setPresence((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  //emoji 
  const [openEmoji, setOpenEmoji] =useState(false)
  const handleEmoji = (e) => {
   setNewMessage((prev)=>prev + e.emoji)
    setOpenEmoji(false)
  }

  //hide conversation


  //get last message 
  const getLastMessage = (chatId) => {
    const chatMessages = messages.filter(msg => msg.senderId === chatId || msg.replies.some(reply => reply.senderId === chatId));
    return chatMessages.length > 0 ? chatMessages[chatMessages.length - 1].content : '';
  };
  

 const 
 {handleHideConversation,hideConversation,

 }   = useHook();

  return (
    <section className="flex  justify-center w-[100%] h-[100vh] overflow-x-hidden   lg:mb-[2rem]  relative rounded-[10px]   overflow-y-hidden">
      <Helmet>
        <title className="gap-[5px]">WizChat | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {/* chatMenu with conversation */}
      <div
      
      className={`flex-col h-[100vh] lg:w-[28%] md:px-[1rem] md:pt-[1rem] gap-[20px] flex   md:flex w-[60%]   rounded-[5px] border-r-[1px] border-white md:border-transparent ${
        hideConversation
          ? "hidden"
          : "block z-10 bg-violet-500 left-0 md:bg-transparent  md:w-[40%]  w-[100%] absolute "
      }`}
        >
        {/* Logo Heading Input */}
        <div className="flex  items-center bg-[#f9f9f9] w-[100%]  md:bg-violet-500 rounded-[3px] p-1 gap-[10px]">
        <i className="ri-messenger-fill text-[25px] lg:text-[40px]"></i>
        <h1 className="lg:text-[40px] font-[600] md:text-[#f9f9f9]">WizChat</h1>
        </div>

        <div className="pt-[1rem] cursor-pointer flex flex-col gap-[20px]">


          <h1 className="text-[30px] font-[400]">Friends</h1>
          <div className="items-center  bg-[#f9f9f9] md:bg-transparent gap-[10px]">
            {chatdata[0].chat.participants.map((item) => (
              <div
                key={item.id}
                onClick={() => setCurrentChat(item) || handlePresence}
                className={`flex items-center p-1 gap-[10px] py-[0.5rem] border-b-[1px] border-violet-500 ${currentChat ? "translate-x-1" : "translate-x-0"} `}
              >
                <img
                  src={item.avatar}
                  alt="user_pics"
                  className="w-[60px] h-[60px] rounded-[50%]"
                  onClick={() => handlePresence(item.id)}
                />
                <span
                  className={`w-[7px] h-[7px] rounded-[50%] absolute md:left-[22.5%] lg:left-[20.5%] left-[28%] mt-[2rem] ${
                    presence[item.id] ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                ></span>

                <div className="flex flex-col px-2 ">
                <h1  className="font-[600]" onClick={() => handlePresence(item.id)}>{item.name}</h1>
                <p className="text-gray-600 h-[3vh] md:h-[2vh] lg:h-[3vh] overflow-hidden font-[300]">{getLastMessage(item.id)}</p>
                </div>
           
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* chatbox */}
      <div className="flex flex-col border-[1px] border-violet-500 md:ml-[22rem] w-[100%] md:w-[80%] h-[100vh]  lg:w-[50%] xl:ml-[22rem] overflow-y-hidden ">
        {currentChat ? (
          <>
            {/* heading in chatbox */}
            <div className="flex items-center justify-between h-[10vh] fixed  md:h-[11vh]  gap-[10px] p-[1rem] bg-violet-500 rounded-[5px] rounded-tl-none w-[100%] md:w-[55%] lg:w-[50%]  rounded-tr-none">
              <div
                key={currentChat.id}
                className="flex items-center border-b-gray-500 border-b-[1px] p-1 gap-[10px] py-[0rem]"
              >
                <img
                  src={currentChat.avatar}
                  alt="user_pics"
                  className="w-[60px] h-[60px] rounded-[50%]"
                />
                <span
                  className={`w-[7px] h-[7px] bg-green-500 rounded-[50%] ml-[-1rem] mt-[2rem] ${
                    currentChat ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                ></span>
                <h1>{currentChat.name}</h1>
              </div>

              <div className="block md:hidden" onClick={handleHideConversation}>
            { hideConversation ?  <i className="ri-menu-2-line text-[#f9f9f9] text-[20px]"></i> : <i className="ri-close-line text-[#f9f9f9]"></i> }
              </div>

            </div>


{/* where the message is been displayed */}
            <div className="overflow-y-scroll lg:h-[72vh] md:h-[79vh] h-[78vh] gap-[10px] flex flex-col mt-[5.0rem] md:mt-[8.5rem] lg:mt-[4.5rem] ">
              {messages.map((item) => {
                const sender = chatdata[0].chat.participants.find(
                  (p) => p.id === item.senderId
                );
                return (
                  <div key={item.id}>
                    <Message
                      img={sender?.avatar}
                      message={item}
                      own={item.senderId === currentChat.id}
                      onEdit={handleEditMessage}
                      onDelete={handleDeleteMessage}
                    />
                    {/* Ref element to scroll to */}
                    {item.id === messages[messages.length - 1].id && (
                      <div ref={scrollRef} />
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <span className="w-[100%] items-center justify-center text-center h-[100%] text-[50px] opacity-40">
            Open a conversation
          </span>
        )}

        {/* chat bottom */}
        <div className="flex items-center justify-between p-[10px] w-[100%] md:w-[55%] lg:w-[50%] fixed bottom-0 bg-[#f9f9f9]">



          <div className="flex  p-[10px] w-[100%]  mx-1 rounded-[8px] justify-between border-[1px]
           border-violet-500 ">
            <input
              type="text"
              placeholder="Send your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className=" p-[10px] border-none outline-none w-[100%] bg-transparent overflow-y-auto"
            />
            <button value="Submit" onClick={handleSendMessage}>
              <i className="ri-send-plane-fill"></i>
            </button>

          </div>

                              {/* emoji and so on */}
                              <div className="flex flex-col  border-1 border-red-400  "  >
<i className="ri-emoji-sticker-line cursor-pointer lg:text-[30px]" onClick={()=> setOpenEmoji((prev) =>!prev)}></i>
{openEmoji && <div className="w-[100px] h-[20px] absolute bottom-[510px] md:right-[250px] lg:right-[270px] right-[255px]">
  
<EmojiPicker className="w-[100px] h-[100px]"  onEmojiClick={handleEmoji}/>
  
  
  </div>}
</div>


        </div>

      </div>

      {/* chat Online */}
      <div className="hidden lg:flex flex-col items-center  w-[23%]">
        {currentChat ? (
          <div
            key={currentChat.id}
            className="flex flex-col items-center p-1 gap-[10px] py-[0.5rem]"
          >
            <img
              src={currentChat.avatar}
              alt="user_pics"
              className="w-[260px] h-[260px] rounded-[50%]"
            />
            <h1 className="font-bold text-[25px]">Name: {currentChat.name}</h1>
          </div>
        ) : (
          <span>No user clicked</span>
        )}
      </div>

    </section>
  );
};

export default Home;